import type { Metadata } from "next";
import { Fredoka, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CloudsLayer from "@/components/CloudsLayer";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Ark Homeschooling | Sailing Into a World of Wonder and Learning",
  description:
    "Ark Homeschooling is a warm, learner-centered homeschool program for children aged 5-9 in Kenya, blending CBC, Cambridge, IB and British curricula with digital literacy.",
  keywords: [
    "homeschooling Kenya",
    "Ark Homeschooling",
    "CBC curriculum",
    "Cambridge homeschool",
    "IB homeschool",
    "homeschool Nakuru",
    "kids homeschool Kenya",
  ],
  openGraph: {
    title: "Ark Homeschooling",
    description: "Sailing into a world of wonder and learning, for ages 5-9.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${quicksand.variable} font-body antialiased relative overflow-x-hidden`}
      >
        <CloudsLayer />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
