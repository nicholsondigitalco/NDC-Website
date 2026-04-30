"use client"

import type React from "react"
import Link from "next/link"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function BransonForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    transactional: false,
    marketing: false,
    terms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section id="reservation-form" className="py-20 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Reserve Your Branson Adventure</h2>
          <p className="text-lg text-muted-foreground">
            Fill out the form below to secure your 3-day getaway for just $299
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card border rounded-lg p-8 shadow-lg">
          <div className="space-y-2">
            <Label htmlFor="firstName">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastName"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-3">
              <Checkbox
                id="transactional"
                checked={formData.transactional}
                onCheckedChange={(checked) => setFormData({ ...formData, transactional: checked as boolean })}
              />
              <Label htmlFor="transactional" className="text-sm leading-relaxed cursor-pointer">
                By checking this box and clicking "SEND," you consent to receive transactional text messages for
                notifications and alerts from Nicholson Digital Co. Reply STOP to opt out. Reply HELP for help. Message
                and data rates may apply. Message frequency may vary.
              </Label>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="marketing"
                checked={formData.marketing}
                onCheckedChange={(checked) => setFormData({ ...formData, marketing: checked as boolean })}
              />
              <Label htmlFor="marketing" className="text-sm leading-relaxed cursor-pointer">
                By checking this box and clicking "SEND," you consent to receive marketing text messages and promotional
                offers from Nicholson Digital Co. Reply STOP to opt out. Reply HELP for help. Message and data rates may
                apply.
              </Label>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="terms"
                checked={formData.terms}
                onCheckedChange={(checked) => setFormData({ ...formData, terms: checked as boolean })}
                required
              />
              <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                <span className="text-red-500">*</span> I have read and agree to the{" "}
                <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                  privacy policy
                </Link>{" "}
                and{" "}
                <Link href="/terms-and-conditions" className="text-blue-600 hover:underline">
                  terms and conditions
                </Link>
                .
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg">
            Send
          </Button>
        </form>
      </div>
    </section>
  )
}
