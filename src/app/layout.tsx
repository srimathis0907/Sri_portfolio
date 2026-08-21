import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Srimathi S | Software Engineer",
  description: "Portfolio of Srimathi S, Full-Stack Android Developer and Software Engineer.",
  openGraph: {
    title: "Srimathi S | Software Engineer",
    description: "Portfolio of Srimathi S, Full-Stack Android Developer and Software Engineer.",
    url: "https://srimathis0907.github.io",
    siteName: "Srimathi S Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable} ${outfit.variable}`}>
      <body className={`${manrope.variable} ${outfit.variable} antialiased selection:bg-orchid-glow/30 selection:text-stone-900 relative`}>
        <div className="noise-overlay" />
        <div className="mesh-bg" />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
