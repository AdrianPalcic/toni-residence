import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Svibje Residence | Novogradnja",
  description:
    "Svibje Residence — novoizgrađena rezidencijalna zgrada s pažljivo dizajniranim stanovima, modernom arhitekturom i vrhunskom kvalitetom izvedbe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
