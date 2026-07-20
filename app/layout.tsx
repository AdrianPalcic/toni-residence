import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://svibje-residence.com";
const ogImage = "/images/vanjski-1.jpeg";
const description =
  "Svibje Residence — novoizgrađena rezidencijalna zgrada u Rugvici s pažljivo dizajniranim stanovima, modernom arhitekturom i vrhunskom kvalitetom izvedbe. Stanovi za prodaju u Rugvici i okolici Zagreba.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Svibje Residence | Novogradnja stanova Rugvica",
    template: "%s | Svibje Residence",
  },
  description,
  keywords: [
    "stanovi Rugvica",
    "novogradnja Rugvica",
    "stanovi za prodaju Rugvica",
    "nekretnine Rugvica",
    "stanovi Trstenik Nartski",
    "prodaja stanova Zagrebačka županija",
    "novogradnja Zagreb okolica",
    "Svibje Residence",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Svibje Residence | Novogradnja stanova Rugvica",
    description,
    url: siteUrl,
    siteName: "Svibje Residence",
    images: [
      { url: ogImage, width: 1200, height: 800, alt: "Svibje Residence — vanjski izgled zgrade" },
    ],
    locale: "hr_HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Svibje Residence | Novogradnja stanova Rugvica",
    description,
    images: [ogImage],
  },
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
