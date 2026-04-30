"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function PrivacyPolicyPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Button variant="ghost" className="mb-8" onClick={() => router.back()}>
          ← Back
        </Button>

        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: November, 2025</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nicholson Digital Co. LLC ("Company," "we," "our," or "us") respects your privacy and is committed to
              protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website and sign up for our services, including our Branson,
              MO travel package promotions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li>Sign up for information on our Branson, MO travel package</li>
              <li>Submit forms on our website</li>
              <li>Subscribe to our marketing communications</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
              The personal information we collect may include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li>First and Last Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. SMS Marketing and Communications</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By providing your phone number and checking the SMS consent box on our signup form, you explicitly consent
              to receive SMS text messages from Nicholson Digital Co. LLC regarding your trip to Branson, MO. These
              messages may include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li>Trip confirmations and updates</li>
              <li>Travel package information and promotions</li>
              <li>Booking reminders and notifications</li>
              <li>Special offers related to the Branson, MO travel package</li>
            </ul>
            <div className="space-y-3 mt-4">
              <p className="text-muted-foreground leading-relaxed">
                <strong>Message Frequency:</strong> Message frequency may vary depending on your interaction with our
                services and ongoing promotions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Standard Rates:</strong> Standard message and data rates may apply as determined by your mobile
                carrier.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Opt-Out:</strong> You can opt out of receiving SMS messages at any time by replying "STOP" to
                any message we send. You may also reply "HELP" for assistance.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li>Process your registration for the Branson, MO travel package</li>
              <li>Send you SMS and email communications about your trip</li>
              <li>Provide customer support and respond to your inquiries</li>
              <li>Send you marketing and promotional communications (with your consent)</li>
              <li>Improve our services and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell, rent, or trade your personal information to third parties. We may share your information
              with:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li>
                Service providers who assist us in operating our business (e.g., SMS gateway providers, email service
                providers)
              </li>
              <li>Travel partners involved in delivering the Branson, MO travel package</li>
              <li>Legal authorities when required by law or to protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal
              information from unauthorized access, disclosure, alteration, or destruction. However, no method of
              transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Withdraw consent for SMS messaging by replying "STOP"</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience and
              analyze website traffic. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
              information from children. If you believe we have collected information from a child, please contact us
              immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-sky-50 rounded-lg">
              <p className="font-semibold">Nicholson Digital Co. LLC</p>
              <p className="text-muted-foreground">Email: nicholsondigitalco@gmail.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
