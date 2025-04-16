"use server"

import { sendEmail, createContactFormEmail } from "@/lib/email"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Validate form data
  if (!name || !email || !message) {
    throw new Error("All fields are required")
  }

  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    throw new Error("Invalid form data")
  }

  try {
    // Create email content
    const { subject, html } = createContactFormEmail({
      name,
      email,
      message,
    })

    // Send email
    await sendEmail({
      to: "ranjeetnaiknavare@gmail.com",
      subject,
      html,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send message. Please try again later.")
  }
}
