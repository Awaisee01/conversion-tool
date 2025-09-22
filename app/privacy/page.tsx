import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pro Unit Converters",
  description:
    "Read the Privacy Policy of ProUnitConverters.com. Learn how we collect, use, and protect your personal data while ensuring transparency and security.",
  keywords: [
    "privacy policy",
    "Pro Unit Converters privacy",
    "data protection",
    "user data security",
    "GDPR compliance",
    "online converter privacy",
  ],
  openGraph: {
    title: "Privacy Policy | Pro Unit Converters",
    description:
      "Understand how ProUnitConverters.com collects, uses, and protects your information when using our tools.",
    url: "https://prounitconverters.com/privacy-policy",
    siteName: "Pro Unit Converters",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col bg-gray-50">
        <main className="flex-1 mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Your privacy is important to us. This Privacy Policy explains how{" "}
            <strong>ProUnitConverters.com</strong> collects, uses, and protects
            your information when you use our website and tools.
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                1. Information We Collect
              </h2>
              <p>
                We may collect basic information such as your name, email
                address, and any details you provide when contacting us through
                forms. We also collect anonymous usage data (like search terms
                and visited pages) to improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                2. How We Use Your Information
              </h2>
              <p>The information we collect is used to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Provide and improve our conversion tools</li>
                <li>Respond to inquiries and feedback</li>
                <li>Monitor site usage for analytics and performance</li>
                <li>Ensure security and prevent misuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                3. Cookies and Tracking
              </h2>
              <p>
                Our website may use cookies and third-party analytics (such as
                Google Analytics) to track usage trends. You can disable cookies
                in your browser settings, but some features may not function
                correctly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                4. Sharing of Information
              </h2>
              <p>
                We do not sell or rent your personal data. We may share
                information only when required by law or to protect our rights,
                safety, or security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                5. Data Security
              </h2>
              <p>
                We implement reasonable technical and organizational measures to
                protect your information. However, no online platform can
                guarantee 100% security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                6. Your Rights
              </h2>
              <p>
                You may request access, correction, or deletion of your personal
                data by contacting us at{" "}
                <span className="font-medium">
                  support@prounitconverters.com
                </span>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                7. Updates to this Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. The updated
                version will be posted on this page with the revised effective
                date.
              </p>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
