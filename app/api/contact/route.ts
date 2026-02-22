import { NextRequest, NextResponse } from "next/server";
import { handleContactForm } from "@/lib/brevo";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields", success: false },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address", success: false },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim().slice(0, 100), // Limit to 100 chars
      email: email.trim().toLowerCase().slice(0, 255),
      subject: subject.trim().slice(0, 200),
      message: message.trim().slice(0, 5000), // Limit to 5000 chars
    };

    // Send emails via Brevo
    const result = await handleContactForm(sanitizedData);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
      messageId: result.adminMessageId,
    });
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
