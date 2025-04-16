"use client"

import { useState } from "react"
import { submitContactForm } from "@/app/actions"

export default function MaintenanceMode() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formError, setFormError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setFormStatus("submitting")

    try {
      await submitContactForm(formData)
      setFormStatus("success")
    } catch (error) {
      console.error("Form submission error:", error)
      setFormError(typeof error === "string" ? error : "Something went wrong. Please try again.")
      setFormStatus("error")
    }
  }

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center overflow-y-auto">
      <div className="w-full max-w-2xl mx-auto p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-2xl border border-saffron-500/30 text-white">
        <div className="flex items-center justify-center mb-6">
          <img src="/saffron-shivaji-seal.png" alt="Shivaji Maharaj Seal" className="h-12 w-12 mr-3" />
          <h1 className="text-3xl font-bold text-saffron-500">Site Under Development</h1>
        </div>

        <div className="mb-8 text-center">
          <p className="text-xl mb-2">
            The Chhatrapati Shivaji Maharaj tribute website is currently under construction.
          </p>
          <p className="text-lg text-saffron-300">
            We are working to bring you the complete legacy of this legendary Maratha warrior king.
          </p>
        </div>

        {formStatus === "success" ? (
          <div className="bg-green-900/30 border border-green-500 p-4 rounded-md text-center">
            <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent Successfully!</h3>
            <p>Thank you for your interest. We will get back to you soon.</p>
          </div>
        ) : (
          <div className="bg-black/30 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-saffron-400">Contact Us</h2>
            <form action={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-gray-500 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-gray-500 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-gray-500 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 text-white"
                    placeholder="Your message or inquiry"
                  ></textarea>
                </div>
              </div>

              {formError && (
                <div className="mb-4 p-3 bg-red-900/30 border border-red-500 rounded-md text-red-200">{formError}</div>
              )}

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full py-3 px-6 bg-saffron-600 hover:bg-saffron-700 text-white font-bold rounded-md transition duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        )}

        <div className="mt-8 text-center text-sm text-gray-300">
          <p>© 2024 Chhatrapati Shivaji Maharaj Tribute</p>
          <p className="mt-1">Jay Shivaji! Jay Bhavani!</p>
        </div>
      </div>
    </div>
  )
}
