import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${sora.variable}`}>
      <body className={`${inter.variable} ${sora.variable} antialiased selection:bg-indigo-500/30 selection:text-indigo-900`}>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
