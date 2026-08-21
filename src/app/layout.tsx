import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jakarta.variable}`}>
      <body className={`${inter.variable} ${jakarta.variable} antialiased selection:bg-[#0F172A] selection:text-white relative bg-[#FCFCFA]`}>
        <div className="noise-overlay" />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
