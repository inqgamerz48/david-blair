import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "David & Blair | Professional English Tutoring Korea",
  description: "World-class one-on-one and group English tutoring tailored to every learner. Build real English confidence with expert native tutors in South Korea.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-pageBg text-textPrimary selection:bg-accent/10 selection:text-primary">
        <Navbar />
        <PageTransition>
          <main className="flex-grow pt-24">
            {children}
          </main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
