"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("https://hooks.zapier.com/hooks/catch/16474207/uvaw3yw/", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: "NDC Website Contact Form",
        }),
      })

      // Zapier webhooks with no-cors mode don't return readable responses
      // so we assume success if no error was thrown
      setSubmitted(true)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <Card className="border-border bg-card shadow-xl">
              <CardContent className="p-12 flex flex-col items-center text-center gap-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-9 w-9 text-primary" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground text-balance">
                  Message Sent Successfully!
                </h2>
                <p className="text-lg text-muted-foreground max-w-md text-balance">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="mt-2"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: "", email: "", company: "", message: "" })
                  }}
                >
                  Send Another Message
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                  Ready to Reach New Heights?
                </h2>
                <p className="text-lg text-muted-foreground text-balance">
                  {"Let's discuss how we can help your business grow. Get in touch for a free consultation."}
                </p>
              </div>

              <Card className="border-border bg-card shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 bg-destructive/10 text-destructive rounded-lg text-sm">
                        {error}
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-card-foreground">
                        Company
                      </label>
                      <Input
                        id="company"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
