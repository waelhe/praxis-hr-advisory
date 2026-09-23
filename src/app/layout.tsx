import type { Metadata } from "next";
import {
  Sora,
  Inter,
  Source_Serif_4,
  IBM_Plex_Sans_Arabic,
  Noto_Kufi_Arabic,
} from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-sourceserif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-ar",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const kufiArabic = Noto_Kufi_Arabic({
  variable: "--font-kufi-ar",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Praxis — HR Advisory & Organizational Diagnostics",
  description:
    "Diagnose workforce and organizational problems using evidence-based HR thinking, then turn the diagnosis into practical action. Led by an expert-level HR professor and practitioner.",
  keywords: [
    "HR advisory",
    "organizational diagnostics",
    "human resources",
    "organizational behavior",
    "talent management",
    "HR analytics",
    "turnover analysis",
    "performance management",
  ],
  authors: [{ name: "Praxis People Advisory" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Praxis — HR Advisory & Organizational Diagnostics",
    description:
      "Evidence-based diagnosis of people and organization problems. Understand the people system behind the organization.",
    siteName: "Praxis People Advisory",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${inter.variable} ${sourceSerif.variable} ${plexArabic.variable} ${kufiArabic.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
