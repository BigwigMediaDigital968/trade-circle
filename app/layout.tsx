import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trade Circle - Your Ultimate Trading Companion",
  description: "Trade Circle provides real-time trading signals, smart strategies, and powerful tools to help you turn market moves into profitable trades. Join now and get a 20% bonus on your first deposit!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--brand-dark)] text-white font-sans relative">
        <Navbar />
        <main className="w-full md:w-[70%] mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
