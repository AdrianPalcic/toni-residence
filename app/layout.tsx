import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Toni Residence | Novogradnja",
  description:
    "Toni Residence — novoizgrađena rezidencijalna zgrada s pažljivo dizajniranim stanovima, modernom arhitekturom i vrhunskom kvalitetom izvedbe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body className={`${fraunces.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
