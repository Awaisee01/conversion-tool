import PWAInstallPrompt from "@/components/Install";
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script"; // ✅ needed for JSON-LD + GA + AdSense scripts

export const metadata: Metadata = {
  title: "Pro Unit Converters | Free Online Measurement Converter for Length, Weight, Temperature, Time & More",
  description:
    "Convert any unit instantly with ProUnitConverters.com! Free online measurement converter for length, weight, temperature, time, currency, and more. Fast, accurate, and mobile-friendly.",
  keywords: [
    "file converter",
    "Pro Unit Converters",
    "online converter",
    "Pro Unit Converters",
    "free converter tool",
  ],
  authors: [{ name: "Pro Unit Converters" }],
  creator: "Pro Unit Converters",
  publisher: "Universal Converter",
  applicationName: "Universal Converter",
  metadataBase: new URL("https://prounitconverters.com/"),

  openGraph: {
    title: "Pro Unit Converters | Free Online Measurement Converter for Length, Weight, Temperature, Time & More",
    description:
      "Convert any unit instantly with ProUnitConverters.com! Free online measurement converter for length, weight, temperature, time, currency, and more. Fast, accurate, and mobile-friendly.",
    url: "https://prounitconverters.com/",
    siteName: "Pro Unit Converters",
    type: "website",
    images: [
      {
        url: "https://prounitconverters.com/favicon.ico",
        width: 512,
        height: 512,
        alt: "Pro Unit Converters Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pro Unit Converters | Free Online Unit & Format Tools",
    description:
      "Convert any unit instantly with ProUnitConverters.com! Free online measurement converter for length, weight, temperature, time, currency, and more. Fast, accurate, and mobile-friendly.",
    images: ["https://prounitconverters.com/favicon.ico"],
    creator: "@ProUnitConverters",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },

  manifest: "/manifest.json",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* PWA essentials */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/pwa-192.png" />
        <meta name="theme-color" content="#000000" />

        {/* ✅ Google AdSense verification */}
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXX" />

        {/* ✅ Structured Data (JSON-LD for SEO) */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Pro Unit Converters",
              url: "https://prounitconverters.com/",
              description:
                "Convert any unit instantly with ProUnitConverters.com! Free online measurement converter for length, weight, temperature, time, currency, and more. Fast, accurate, and mobile-friendly.",
              publisher: {
                "@type": "Organization",
                name: "Pro Unit Converters",
                logo: {
                  "@type": "ImageObject",
                  url: "https://prounitconverters.com/favicon.ico",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://prounitconverters.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <PWAInstallPrompt />

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ETSYG1GT5K"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ETSYG1GT5K');
            `,
          }}
        />

        {/* ✅ Load AdSense JS */}
        <Script
          id="adsense-script"
          async
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
        />
      </body>
    </html>
  );
}
