import { NextResponse } from "next/server";
import { sendDirectEmail } from "@/lib/brevo";

// Test endpoint - ONLY for development
export async function GET() {
  // Only allow in development
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { error: "Test endpoint not available in production" },
      { status: 403 }
    );
  }

  try {
    const testEmail = process.env.TEST_EMAIL || "mrowaisabdullah@gmail.com";

    const result = await sendDirectEmail(
      testEmail,
      "Brevo Test Email from Portfolio",
      `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #3a69ff;">Brevo Integration Successful! 🎉</h1>
          <p>If you're seeing this email, the Brevo integration is working correctly.</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3>Test Details:</h3>
            <ul>
              <li><strong>From:</strong> ${process.env.BREVO_SENDER_NAME} &lt;${process.env.BREVO_SENDER_EMAIL}&gt;</li>
              <li><strong>To:</strong> ${testEmail}</li>
              <li><strong>Sent at:</strong> ${new Date().toISOString()}</li>
            </ul>
          </div>
          <p style="color: #666;">This is a test email from your portfolio contact form integration.</p>
        </div>
      `
    );

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully",
      messageId: result.messageId,
      testEmail,
    });
  } catch (error) {
    console.error("Brevo test error:", error);

    const err = error as { response?: { body?: { message?: string } }; message?: string };
    return NextResponse.json(
      {
        error: "Failed to send test email",
        details: err.response?.body?.message || err.message,
      },
      { status: 500 }
    );
  }
}
