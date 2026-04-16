import nodemailer from "nodemailer";
import { env } from "../config/env";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

// Create reusable SMTP transporter
const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: false, // true for 465, false for 587 (STARTTLS)
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
});

/**
 * Sends a contact form email to the configured recipient
 */
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const { name, email, phone, company, message } = data;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #3e5926, #3c5c1f); padding: 30px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 24px; }
        .header p { color: #f4b200; margin: 8px 0 0; font-size: 14px; }
        .body { padding: 30px; }
        .field { margin-bottom: 20px; }
        .field-label { font-size: 12px; font-weight: 700; color: #3c5c1f; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .field-value { font-size: 16px; color: #333333; padding: 10px 14px; background: #f8f8f4; border-left: 3px solid #3c5c1f; border-radius: 4px; }
        .message-box { padding: 16px; background: #f8f8f4; border-left: 3px solid #f4b200; border-radius: 4px; font-size: 15px; color: #333; line-height: 1.6; white-space: pre-wrap; }
        .footer { background: #f8f8f4; padding: 20px 30px; text-align: center; font-size: 12px; color: #888; }
        .divider { height: 1px; background: #e0e0d8; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📩 New Contact Form Submission</h1>
          <p>Vaishno Hills Dairy Website</p>
        </div>
        <div class="body">
          <div class="field">
            <div class="field-label">Full Name</div>
            <div class="field-value">${name}</div>
          </div>
          <div class="field">
            <div class="field-label">Email Address</div>
            <div class="field-value"><a href="mailto:${email}" style="color: #3c5c1f;">${email}</a></div>
          </div>
          <div class="field">
            <div class="field-label">Phone Number</div>
            <div class="field-value"><a href="tel:${phone}" style="color: #3c5c1f;">${phone}</a></div>
          </div>
          ${company ? `
          <div class="field">
            <div class="field-label">Company</div>
            <div class="field-value">${company}</div>
          </div>
          ` : ""}
          <div class="divider"></div>
          <div class="field">
            <div class="field-label">Message</div>
            <div class="message-box">${message}</div>
          </div>
        </div>
        <div class="footer">
          This email was sent from the contact form on <strong>vaishnohillsdairy.co.in</strong>
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: `"Vaishno Hills Dairy Website" <${env.SMTP_USER}>`,
    to: env.RECIPIENT_EMAIL,
    replyTo: email,
    subject: `New Inquiry from ${name}${company ? ` - ${company}` : ""}`,
    html: htmlContent,
    text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}${company ? `\nCompany: ${company}` : ""}\n\nMessage:\n${message}`,
  };

  await transporter.sendMail(mailOptions);
}
