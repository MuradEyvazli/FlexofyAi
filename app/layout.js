'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home-components/Navbar";
import { usePathname } from "next/navigation";
import Footer from "@/components/home-components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const GeneralHiddenRoutes = ["/login", "/register"];

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {!GeneralHiddenRoutes.includes(pathname) && <Navbar />}
        {children}
        {!GeneralHiddenRoutes.includes(pathname) && <Footer/>}
      </body>
    </html>
  );
}
