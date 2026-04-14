import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1169801138632424'); 
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1169801138632424&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

