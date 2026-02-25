import { NextRequest, NextResponse } from "next/server";
import { handleContactForm } from "@/lib/brevo";
import { checkRateLimit, getClientIP, cleanupExpiredEntries } from "@/lib/rate-limit";
import { validateContactForm } from "@/lib/validation";

// Cleanup expired entries periodically (run on some requests)
if (Math.random() < 0.1) {
  // 10% chance to cleanup on each request
  cleanupExpiredEntries();
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, subject, message, website, timestamp } = body;

    // Get client IP for rate limiting
    const clientIP = getClientIP(request);

    // Check rate limit by IP
    const rateLimitResult = checkRateLimit(clientIP);
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
          success: false,
          retryAfter: Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000).toString(),
            "X-RateLimit-Limit": "5",
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": new Date(rateLimitResult.resetTime).toISOString(),
          },
        }
      );
    }

    // Validate form data with honeypot and timing checks
    const validationResult = validateContactForm({
      name,
      email,
      subject,
      message,
      honeypot: website,
      timestamp,
    });

    if (!validationResult.valid) {
      // If honeypot was filled, return success to fool bots
      // but don't actually send the email
      const hasHoneypotError = validationResult.errors.some(
        (e) => e === "Invalid submission"
      );

      if (hasHoneypotError) {
        // Silent rejection for bots - return success but log
        console.warn(`Bot submission blocked from IP: ${clientIP}`);
        return NextResponse.json({
          success: true,
          message: "Message sent successfully!",
        });
      }

      // Normal validation errors
      return NextResponse.json(
        {
          error: validationResult.errors.join(". "),
          success: false,
        },
        { status: 400 }
      );
    }

    // Use sanitized data
    const sanitizedData = validationResult.sanitizedData;

    // Send emails via Brevo
    const result = await handleContactForm(sanitizedData);

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully!",
        messageId: result.adminMessageId,
      },
      {
        headers: {
          "X-RateLimit-Limit": "5",
          "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
          "X-RateLimit-Reset": new Date(rateLimitResult.resetTime).toISOString(),
        },
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    // Check for Brevo-specific errors
    const err = error as { response?: { body?: { message?: string } } };
    if (err.response?.body?.message) {
      return NextResponse.json(
        {
          error: "Failed to send email. Please try again later.",
          details: err.response.body.message,
          success: false,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send email. Please try again later.", success: false },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
