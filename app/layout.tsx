import PWAInstallPrompt from "@/components/Install";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Universal Converter | Free Online File & Format Tools",
  description:
    "Universal Converter is your all-in-one platform for quick, secure, and accurate file conversions. Convert documents, images, and more online without hassle.",
  keywords: [
    "file converter",
    "universal converter",
    "online converter",
    "pdf to word",
    "image to pdf",
    "free converter tool",
  ],
  authors: [{ name: "Universal Converter Team" }],
  creator: "Universal Converter",
  publisher: "Universal Converter",
  applicationName: "Universal Converter",
  metadataBase: new URL("https://yourdomain.com"),

  openGraph: {
    title: "Universal Converter | Free Online File & Format Tools",
    description:
      "Convert your files quickly and securely with Universal Converter. Supports documents, images, and more — all free and online.",
    url: "https://yourdomain.com",
    siteName: "Universal Converter",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/icons/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "Universal Converter Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Universal Converter | Free Online File & Format Tools",
    description:
      "Free online tool to convert documents, images, and more. Simple, secure, and fast conversions.",
    images: ["https://yourdomain.com/icons/icon-512x512.png"],
    creator: "@yourhandle", // replace with your Twitter handle if you have one
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/icons/icon-192x192.png",
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
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/pwa-192x192.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>{children}
        <PWAInstallPrompt/>
      </body>
    </html>
  );
}
