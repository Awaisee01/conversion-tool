import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Pro Unit Converters",
  description:
    "Read the Terms & Conditions of ProUnitConverters.com. Learn about acceptable use, intellectual property rights, disclaimers, limitations of liability, and your responsibilities when using our online conversion tools.",
  keywords: [
    "terms and conditions",
    "Pro Unit Converters terms",
    "user agreement",
    "converter terms of service",
    "online converter policies",
  ],
  openGraph: {
    title: "Terms & Conditions | Pro Unit Converters",
    description:
      "Review the Terms & Conditions of ProUnitConverters.com. Understand your rights and responsibilities while using our tools and services.",
    url: "https://prounitconverters.com/terms",
    siteName: "Pro Unit Converters",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col bg-gray-50 min-h-screen">
        <main className="flex-1 mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h1>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Welcome to <strong>ProUnitConverters.com</strong>. By using our
            website and tools, you agree to comply with the following Terms &
            Conditions. Please read them carefully before accessing or using our
            services.
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using ProUnitConverters.com, you agree to these
                Terms & Conditions and our{" "}
                <a
                  href="/privacy-policy"
                  className="text-gray-900 font-medium hover:underline"
                >
                  Privacy Policy
                </a>
                . If you do not agree, please discontinue use of our site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                2. Use of Services
              </h2>
              <p>
                Our tools are provided for personal and educational purposes
                only. You agree not to misuse our services, including attempts
                to gain unauthorized access, distributing harmful software, or
                using the tools for illegal purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                3. Intellectual Property
              </h2>
              <p>
                All content, design, branding, and functionality on
                ProUnitConverters.com are protected by intellectual property
                laws. You may not copy, distribute, or reproduce any material
                without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                4. Disclaimer of Warranties
              </h2>
              <p>
                Our services are provided “as is” without any warranties, either
                express or implied. We do not guarantee that conversions will
                always be accurate, error-free, or available without
                interruptions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                5. Limitation of Liability
              </h2>
              <p>
                Pro Unit Converters shall not be held responsible for any
                damages, including data loss, errors, or service interruptions,
                resulting from the use or inability to use our tools.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                6. Third-Party Links
              </h2>
              <p>
                Our site may contain links to third-party websites. We are not
                responsible for the content, practices, or policies of those
                external sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                7. Changes to Terms
              </h2>
              <p>
                We may update these Terms & Conditions from time to time. Any
                updates will be posted on this page with a revised effective
                date. Continued use of the site means you accept the updated
                terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                8. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms & Conditions, please
                contact us at{" "}
                <span className="font-medium">
                  prounitconverters@gmail.com
                </span>
                .
              </p>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
