import { BrevoClient } from "@getbrevo/brevo";
import { siteConfig, getAbsolutePath } from "./config";

// Get configuration from environment
const getSenderEmail = () => process.env.BREVO_SENDER_EMAIL || `noreply@${new URL(siteConfig.url).hostname}`;
const getSenderName = () => process.env.BREVO_SENDER_NAME || siteConfig.name;
const getAdminEmail = () => process.env.BREVO_ADMIN_EMAIL || "nasir@nasirsidiki.com";

// Get API key with validation
const getApiKey = () => {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    throw new Error("BREVO_API_KEY not set in environment variables");
  }
  return apiKey;
};

// Initialize Brevo client (lazy initialization)
let brevoInstance: BrevoClient | null = null;

const getBrevoClient = () => {
  if (!brevoInstance) {
    brevoInstance = new BrevoClient({
      apiKey: getApiKey(),
      timeoutInSeconds: 30,
      maxRetries: 2,
    });
  }
  return brevoInstance;
};

export { getBrevoClient, getSenderEmail, getSenderName, getAdminEmail };

/**
 * Send a direct HTML email
 */
export async function sendDirectEmail(
  to: string,
  subject: string,
  htmlContent: string,
  toName?: string
) {
  const brevo = getBrevoClient();
  const result = await brevo.transactionalEmails.sendTransacEmail({
    sender: { email: getSenderEmail(), name: getSenderName() },
    to: [{ email: to, ...(toName && { name: toName }) }],
    subject,
    htmlContent,
    textContent: stripHtmlTags(htmlContent),
  });

  return result;
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
  const brevo = getBrevoClient();
  const senderEmail = getSenderEmail();
  const senderName = getSenderName();
  const adminEmail = getAdminEmail();

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
  const adminEmailParams = {
    sender: { email: senderEmail, name: senderName },
    to: [{ email: adminEmail, name: "Nasir Siddiqui" }],
    subject: `📬 New Message: ${safeSubject}`,
    htmlContent: `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
    <body style="margin:0;padding:0;background:#f0f2f5;font-family:'Segoe UI',Arial,sans-serif;">
      <div style="max-width:600px;margin:0 auto;padding:24px;">
        <div style="background:#0d1117;border-radius:12px 12px 0 0;padding:28px 30px;text-align:center;">
          <div style="display:inline-block;background:rgba(100,244,171,0.15);border:1px solid #64F4AB;border-radius:6px;padding:4px 12px;margin-bottom:14px;">
            <span style="color:#64F4AB;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Portfolio Contact</span>
          </div>
          <h1 style="color:#ffffff;margin:0;font-size:20px;font-weight:700;">New Message Received</h1>
          <p style="color:#8b949e;margin:6px 0 0;font-size:13px;">Someone reached out via your portfolio</p>
        </div>
        <div style="background:#ffffff;border-left:1px solid #e1e4e8;border-right:1px solid #e1e4e8;padding:28px;">
          <div style="background:#f6f8fa;border-radius:8px;padding:18px;margin-bottom:20px;border:1px solid #e1e4e8;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:9px 0;border-bottom:1px solid #e1e4e8;width:90px;">
                  <span style="color:#1a7f5a;font-size:11px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;">From</span>
                </td>
                <td style="padding:9px 0;border-bottom:1px solid #e1e4e8;color:#24292f;font-size:14px;font-weight:500;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding:9px 0;border-bottom:1px solid #e1e4e8;">
                  <span style="color:#1a7f5a;font-size:11px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;">Email</span>
                </td>
                <td style="padding:9px 0;border-bottom:1px solid #e1e4e8;">
                  <a href="mailto:${safeEmail}" style="color:#0969da;text-decoration:none;font-size:14px;">${safeEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:9px 0;">
                  <span style="color:#1a7f5a;font-size:11px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;">Subject</span>
                </td>
                <td style="padding:9px 0;color:#24292f;font-size:14px;">${safeSubject}</td>
              </tr>
            </table>
          </div>
          <p style="color:#1a7f5a;font-size:11px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;margin:0 0 10px;">Message</p>
          <div style="background:#f6f8fa;border-left:3px solid #64F4AB;border-radius:0 6px 6px 0;padding:14px 18px;color:#24292f;font-size:14px;line-height:1.7;">
            ${safeMessage}
          </div>
          <div style="margin-top:24px;text-align:center;">
            <a href="mailto:${safeEmail}?subject=Re: ${safeSubject}" style="display:inline-block;background:#FECD1A;color:#000000;padding:11px 30px;text-decoration:none;border-radius:50px;font-weight:700;font-size:14px;">Reply to ${safeName} &#8594;</a>
          </div>
        </div>
        <div style="background:#f6f8fa;border:1px solid #e1e4e8;border-top:0;border-radius:0 0 12px 12px;padding:14px 30px;text-align:center;">
          <p style="color:#656d76;font-size:11px;margin:0;">Received ${new Date().toLocaleString('en-US',{dateStyle:'long',timeStyle:'short'})} &middot; Nasir Siddiqui Portfolio</p>
        </div>
      </div>
    </body>
    </html>
    `,
  };

  // Auto-reply to sender
  const autoReplyParams = {
    sender: { email: senderEmail, name: senderName },
    to: [{ email: data.email, name: data.name }],
    subject: `Got your message, ${safeName}! ✅`,
    replyTo: { email: adminEmail, name: "Nasir Siddiqui" },
    htmlContent: `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
    <body style="margin:0;padding:0;background:#f0f2f5;font-family:'Segoe UI',Arial,sans-serif;">
      <div style="max-width:600px;margin:0 auto;padding:24px;">
        <div style="background:#0d1117;border-radius:12px 12px 0 0;padding:36px 30px;text-align:center;">
          <div style="width:72px;height:72px;background:rgba(100,244,171,0.12);border-radius:50%;margin:0 auto 18px;border:1px solid rgba(100,244,171,0.4);line-height:72px;text-align:center;">
            <span style="font-size:32px;">&#9989;</span>
          </div>
          <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:700;">Message Received!</h1>
          <p style="color:#8b949e;margin:8px 0 0;font-size:14px;">Thanks for reaching out, <span style="color:#64F4AB;font-weight:600;">${safeName}</span>!</p>
        </div>
        <div style="background:#ffffff;border-left:1px solid #e1e4e8;border-right:1px solid #e1e4e8;padding:28px;text-align:center;">
          <p style="color:#24292f;font-size:15px;line-height:1.8;margin:0 0 22px;">
            I&apos;ve received your message and will get back to you <strong>within 24 hours</strong>. In the meantime, feel free to explore my work.
          </p>
          <div style="background:#f6f8fa;border-radius:8px;border:1px solid #e1e4e8;padding:14px 18px;margin:0 0 24px;text-align:left;">
            <p style="color:#656d76;font-size:11px;letter-spacing:0.8px;text-transform:uppercase;margin:0 0 6px;font-weight:600;">Your message subject</p>
            <p style="color:#24292f;font-size:14px;margin:0;font-style:italic;">&quot;${safeSubject}&quot;</p>
          </div>
          <div>
            <a href="${getAbsolutePath('/projects')}" style="display:inline-block;background:#FECD1A;color:#000;padding:11px 26px;text-decoration:none;border-radius:50px;font-weight:700;font-size:13px;margin:4px;">View Projects</a>
            <a href="${getAbsolutePath('/services')}" style="display:inline-block;background:#ffffff;color:#1a7f5a;padding:11px 26px;text-decoration:none;border-radius:50px;font-weight:600;font-size:13px;border:1.5px solid #64F4AB;margin:4px;">My Services</a>
          </div>
        </div>
        <div style="background:#f6f8fa;border:1px solid #e1e4e8;border-top:0;border-radius:0 0 12px 12px;padding:18px 30px;text-align:center;">
          <p style="color:#656d76;font-size:12px;margin:0 0 4px;"><a href="${siteConfig.url}" style="color:#1a7f5a;text-decoration:none;font-weight:600;">nasirsidiki.com</a></p>
          <p style="color:#8c949e;font-size:11px;margin:0;">This is an automated confirmation. Please don&apos;t reply to this email directly.</p>
        </div>
      </div>
    </body>
    </html>
    `,
  };

  // Send both emails in parallel
  const [adminResult, autoReplyResult] = await Promise.all([
    brevo.transactionalEmails.sendTransacEmail(adminEmailParams),
    brevo.transactionalEmails.sendTransacEmail(autoReplyParams),
  ]);

  return {
    adminMessageId: adminResult.messageId,
    autoReplyMessageId: autoReplyResult.messageId,
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
    const brevo = getBrevoClient();
    const result = await brevo.transactionalEmails.sendTransacEmail({
      sender: { email: getSenderEmail(), name: getSenderName() },
      to: [{ email: to, ...(toName && { name: toName }) }],
      subject,
      htmlContent,
    });
    return { success: true, messageId: result.messageId };
  } catch (err: unknown) {
    // Type guard for BrevoError
    const brevoError = err as { statusCode?: number; message?: string; body?: unknown };
    console.error("Brevo API error:", brevoError);
    return {
      success: false,
      error: brevoError.message || "Unknown error",
      code: brevoError.statusCode,
    };
  }
}

/**
 * Helper function to strip HTML tags for text content
 */
function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}
