import { Request, Response } from "express";
import { sendContactEmail, ContactFormData } from "../services/email.service";

/**
 * Handles POST /api/contact
 * Validates the request body and sends the contact email
 */
export async function sendMessage(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, phone, company, message } = req.body as ContactFormData;

    // Validate required fields
    const errors: string[] = [];
    if (!name || !name.trim()) errors.push("Name is required");
    if (!email || !email.trim()) errors.push("Email is required");
    if (!phone || !phone.trim()) errors.push("Phone is required");
    if (!message || !message.trim()) errors.push("Message is required");

    // Basic email format validation
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("Invalid email format");
    }

    if (errors.length > 0) {
      res.status(400).json({
        success: false,
        message: "Validation failed",
        errors,
      });
      return;
    }

    // Send the email
    await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company?.trim() || undefined,
      message: message.trim(),
    });

    res.status(200).json({
      success: true,
      message: "Your message has been sent successfully! We'll get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("❌ Error sending contact email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send your message. Please try again later or contact us directly.",
    });
  }
}
