import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import PageTransition from "@/components/shared/PageTransition";
import CustomCursor from "@/components/shared/CustomCursor";
import ScrollAnimations from "@/components/shared/ScrollAnimations";
import PageLoader from "@/components/shared/PageLoader";
import ScrollToTop from "@/components/shared/ScrollToTop";

// Figtree - Used for body text
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Monument Extended - Local Font
const monumental = localFont({
  src: [
    {
      path: "../public/fonts/MonumentExtended-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/MonumentExtended-Ultrabold.woff",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-monumental",
});

// Stretch Pro - Local Font
const stretch = localFont({
  src: "../public/fonts/StretchPro.otf",
  variable: "--font-stretch",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEX101 - Future-Focused Creative Hub",
  description: "Africa's leading creative hub for branding, design, and digital solutions. We push brands beyond the expected level.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${monumental.variable} ${stretch.variable}`}>
        <PageLoader />
        <CustomCursor />
        <ScrollAnimations />
        <ScrollToTop />
        <Navigation />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
