import type { Metadata } from "next";
import { Instrument_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
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
    <html lang="en" className={`scroll-smooth ${instrument.variable} ${jakarta.variable}`}>
      <body className={`${instrument.variable} ${jakarta.variable} antialiased selection:bg-orchid/20 selection:text-orchid`}>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
