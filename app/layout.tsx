import type { Metadata } from "next";
import { Figtree, Unbounded } from "next/font/google";
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

// Unbounded - Used for key headlines (similar to Monumental)
const monumental = Unbounded({
  variable: "--font-monumental",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
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
      <body className={`${figtree.variable} ${monumental.variable}`}>
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
