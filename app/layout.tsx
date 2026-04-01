import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The LIFT Method | Secure Retirement Wealth",
  description: "How smart money uses Indexed Universal Life to grow, protect, and keep their wealth with tax-advantaged income and 0% market floors.",
  metadataBase: new URL("https://theliftmethod.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The LIFT Method | Secure Retirement Wealth",
    description: "Discover the 'Great Deception' in retirement planning and how to protect your wealth with the LIFT Method.",
    url: "https://theliftmethod.com",
    siteName: "The LIFT Method",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "The LIFT Method - Secure Retirement Wealth",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The LIFT Method | Secure Retirement Wealth",
    description: "Protect your retirement from taxes and market volatility with the LIFT Method.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

