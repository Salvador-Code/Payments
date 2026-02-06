import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = localFont({
  src: [
    {
      path: "../fonts/inter-var.woff2",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

export const metadata: Metadata = {
  title: "NPPN - National Payments Professionals Network",
  description:
    "A curated, application-based network for serious payments professionals. Join the selective community backed by Visa product leadership and KSU FinTech.",
  keywords: [
    "payments",
    "fintech",
    "professional network",
    "payments professionals",
    "NPPN",
    "membership",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
