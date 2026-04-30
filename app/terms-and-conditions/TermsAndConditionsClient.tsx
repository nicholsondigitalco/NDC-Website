"use client"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function TermsAndConditionsClient() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Button variant="ghost" className="mb-8 gap-2" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        <div className="bg-white rounded-lg shadow-sm border border-sky-100 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: November 24, 2025</p>

          <div className="prose prose-sky max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing our website and signing up for the Branson, MO travel package offered by Nicholson Digital
                Co. LLC ("Company," "we," "our," or "us"), you agree to be bound by these Terms and Conditions. If you
                do not agree with any part of these terms, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Travel Package Terms</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2.1 Package Details</h3>
              <p className="text-gray-700 leading-relaxed">
                The Branson, MO travel package is offered at $299 for a 3-day trip. Package details, inclusions, and
                exclusions will be provided upon registration and are subject to availability.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2.2 Booking and Payment</h3>
              <p className="text-gray-700 leading-relaxed">
                By signing up, you agree to the package price and payment terms as communicated. All sales are final
                unless otherwise specified in our cancellation policy.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2.3 Travel Requirements</h3>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for meeting all travel requirements, including valid identification and any health
                or safety requirements for travel to Branson, MO.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. SMS Marketing Consent and Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By checking the SMS consent box and submitting your phone number on our signup form, you explicitly
                agree to the following:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3.1 Consent to Receive SMS Messages</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                You consent to receive SMS text messages from Nicholson Digital Co. LLC regarding your trip to Branson,
                MO. These messages may include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Trip confirmations and booking information</li>
                <li>Travel updates and itinerary changes</li>
                <li>Promotional offers related to the Branson, MO travel package</li>
                <li>Marketing communications about future travel opportunities</li>
                <li>Reminders and notifications about your trip</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3.2 Message Frequency</h3>
              <p className="text-gray-700 leading-relaxed">
                The frequency of messages may vary depending on your booking status and ongoing promotions. You may
                receive multiple messages per week during active promotion periods.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3.3 Standard Rates Apply</h3>
              <p className="text-gray-700 leading-relaxed">
                Standard message and data rates may apply as determined by your mobile carrier. Nicholson Digital Co.
                LLC is not responsible for any charges incurred from your mobile carrier.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3.4 Opt-Out Rights</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                You may opt out of receiving SMS messages at any time by:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Replying "STOP" to any SMS message you receive from us</li>
                <li>Contacting us directly at nicholsondigitalco@gmail.com</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                After you opt out, you will receive one final confirmation message. Opting out of SMS messages does not
                cancel your travel package booking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Privacy and Data Collection</h2>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you acknowledge that you have read and understood our Privacy Policy, which
                explains how we collect, use, and protect your personal information, including your phone number for SMS
                communications. Your use of our services constitutes acceptance of our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-2">You agree to:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Provide accurate and complete information when signing up</li>
                <li>Maintain the confidentiality of your booking information</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Use our services only for lawful purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Cancellation and Refund Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                Cancellation terms and refund eligibility will be provided upon booking. Unless otherwise stated, all
                sales are final. Cancellation requests must be submitted in writing to nicholsondigitalco@gmail.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are provided "as is" and "as available" without warranties of any kind, either express or
                implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                To the fullest extent permitted by law, Nicholson Digital Co. LLC shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising out of or relating to your use of our
                services or the Branson, MO travel package.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify and hold harmless Nicholson Digital Co. LLC and its affiliates from any claims,
                damages, losses, liabilities, and expenses arising from your use of our services or violation of these
                Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">10. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective
                immediately upon posting to our website. Your continued use of our services after changes are posted
                constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">11. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the United
                States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">12. Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms and Conditions is found to be unenforceable or invalid, that provision
                shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall
                remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">13. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                For questions about these Terms and Conditions, please contact:
              </p>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
                <p className="font-semibold text-gray-900">Nicholson Digital Co. LLC</p>
                <p className="text-gray-700">Email: nicholsondigitalco@gmail.com</p>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-gray-700 leading-relaxed font-medium">
                By signing up for our Branson, MO travel package and checking the required consent boxes, you
                acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our
                Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
