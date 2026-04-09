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
  title: "Where is my Paisa - Smart Personal Finance Tracker",
  description:
    "Take control of your finances with Where is my Paisa. Track expenses, set budgets, and gain insights into your spending habits. Free, private, and offline-first.",
  keywords: [
    "expense tracker",
    "personal finance",
    "budget app",
    "money manager",
    "where is my paisa",
    "android app",
  ],
  openGraph: {
    title: "Where is my Paisa - Smart Personal Finance Tracker",
    description:
      "Take control of your finances with smart expense tracking. Know exactly where your money goes.",
    type: "website",
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
