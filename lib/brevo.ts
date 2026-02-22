import {
  TransactionalEmailsApi,
  SendSmtpEmail,
  TransactionalEmailsApiApiKeys,
} from "@getbrevo/brevo";

// Initialize Brevo API client
const apiInstance = new TransactionalEmailsApi();

// Set API key from environment
const apiKey = process.env.BREVO_API_KEY;
if (!apiKey) {
  throw new Error("BREVO_API_KEY not set in environment variables");
}
apiInstance.setApiKey(TransactionalEmailsApiApiKeys.apiKey, apiKey);

// Get sender info from environment
const senderEmail = process.env.BREVO_SENDER_EMAIL || "noreply@owaisabdullah.dev";
const senderName = process.env.BREVO_SENDER_NAME || "Owais Abdullah";
const adminEmail = process.env.BREVO_ADMIN_EMAIL || "mrowaisabdullah@gmail.com";

export { apiInstance, SendSmtpEmail, senderEmail, senderName, adminEmail };

/**
 * Send a direct HTML email
 */
export async function sendDirectEmail(
  to: string,
  subject: string,
  htmlContent: string,
  toName?: string
) {
  const email = new SendSmtpEmail();
  email.sender = { email: senderEmail, name: senderName };
  email.to = [{ email: to, ...(toName && { name: toName }) }];
  email.subject = subject;
  email.htmlContent = htmlContent;
  email.textContent = stripHtmlTags(htmlContent); // Fallback for text-only clients

  return await apiInstance.sendTransacEmail(email);
}

/**
 * Send contact form submission to admin with auto-reply to sender
 */
export async function handleContactForm(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  // Escape HTML to prevent XSS
  const escapeHtml = (text: string) =>
    text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeSubject = escapeHtml(data.subject);
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br>");

  // Email to admin
  const adminEmailContent = new SendSmtpEmail();
  adminEmailContent.sender = { email: senderEmail, name: senderName };
  adminEmailContent.to = [{ email: adminEmail, name: "Owais Abdullah" }];
  adminEmailContent.subject = `Portfolio Contact: ${safeSubject}`;
  adminEmailContent.htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #3a69ff;">New Contact Form Submission</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">Name:</td>
          <td style="padding: 8px 0;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
          <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #3a69ff;">${safeEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">Subject:</td>
          <td style="padding: 8px 0;">${safeSubject}</td>
        </tr>
      </table>
      <div style="margin-top: 20px;">
        <h3 style="color: #555;">Message:</h3>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
          ${safeMessage}
        </div>
      </div>
      <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
      <p style="font-size: 12px; color: #999;">
        Sent from portfolio contact form at ${new Date().toISOString()}
      </p>
    </div>
  `;

  // Auto-reply to sender
  const autoReplyEmail = new SendSmtpEmail();
  autoReplyEmail.sender = { email: senderEmail, name: senderName };
  autoReplyEmail.to = [{ email: data.email, name: data.name }];
  autoReplyEmail.subject = "Thanks for reaching out!";
  autoReplyEmail.replyTo = { email: adminEmail, name: "Owais Abdullah" };
  autoReplyEmail.htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; text-align: center;">
      <div style="background: linear-gradient(135deg, #3a69ff 0%, #1a47ff 100%); padding: 30px; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0;">Thank You, ${safeName}! 👋</h1>
      </div>
      <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
        <p style="font-size: 16px; color: #555; line-height: 1.6;">
          Thanks for reaching out! I've received your message and I'll get back to you within 24 hours.
        </p>
        <p style="font-size: 14px; color: #777; margin-top: 20px;">
          In the meantime, feel free to check out my <a href="https://owaisabdullah.dev/projects" style="color: #3a69ff;">projects</a>
          or <a href="https://owaisabdullah.dev/services" style="color: #3a69ff;">services</a>.
        </p>
        <div style="margin-top: 30px;">
          <a href="https://owaisabdullah.dev" style="display: inline-block; background: #3a69ff; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
            Visit Portfolio
          </a>
        </div>
      </div>
      <p style="font-size: 12px; color: #999; margin-top: 20px;">
        This is an automated message. Please do not reply to this email.
      </p>
    </div>
  `;

  // Send both emails in parallel
  const [adminResult, autoReplyResult] = await Promise.all([
    apiInstance.sendTransacEmail(adminEmailContent),
    apiInstance.sendTransacEmail(autoReplyEmail),
  ]);

  return {
    adminMessageId: adminResult.body.messageId,
    autoReplyMessageId: autoReplyResult.body.messageId,
  };
}

/**
 * Send email with error handling
 */
export async function sendEmailWithErrorHandling(
  to: string,
  subject: string,
  htmlContent: string,
  toName?: string
) {
  try {
    const result = await apiInstance.sendTransacEmail({
      sender: { email: senderEmail, name: senderName },
      to: [{ email: to, ...(toName && { name: toName }) }],
      subject,
      htmlContent,
    });
    return { success: true, messageId: result.body.messageId };
  } catch (error: any) {
    // Brevo API error structure
    if (error.response?.body) {
      console.error("Brevo API error:", error.response.body);
      return {
        success: false,
        error: error.response.body.message,
        code: error.response.body.code,
      };
    }
    console.error("Unexpected error:", error);
    return { success: false, error: "Unknown error" };
  }
}

/**
 * Helper function to strip HTML tags for text content
 */
function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}
