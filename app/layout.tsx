import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fonts = Inter({
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Piumini  Tishani",
  description: "Piumini's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.className} antialiased bg-[#0d0d1f]`}>
        <ResponsiveNav/>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
