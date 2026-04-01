import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The LIFT Method | Secure Retirement Wealth",
  description: "How smart money uses Indexed Universal Life to grow, protect, and keep their wealth with tax-advantaged income and 0% market floors.",
  icons: {
    icon: "/favicon.ico",
  }
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
