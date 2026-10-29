import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { profileData } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${profileData.name} | ${profileData.designation}`,
  description: `${profileData.name} - ${profileData.shortBio}`,
  authors: [{ name: profileData.name }],
  keywords: [
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Software Engineer",
    "CSE Undergraduate",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#101820] text-[#F5F2EA] flex flex-col font-sans selection:bg-[#D7FF64] selection:text-[#101820]">
        {children}
      </body>
    </html>
  );
}
