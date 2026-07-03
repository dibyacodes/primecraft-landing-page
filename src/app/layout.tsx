import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Primecraft — Launch your SaaS in hours with auth, admin & subscriptions built-in",
  description:
    "Primecraft is the NextJS boilerplate with auth, admin dashboard, owner-managed subscriptions, Razorpay, Neon + Drizzle. One-time $179, lifetime access.",
  openGraph: {
    title: "Primecraft — Launch your SaaS in hours with auth, admin & subscriptions built-in",
    description: "Experience is knowing that auth, subscriptions, and an admin dashboard shouldn't take you 3 weeks to build.",
    images: ["https://primecraftwait.vercel.app"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
