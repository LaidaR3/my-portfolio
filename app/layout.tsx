
import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
} from "next/font/google";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Laida Rusinovci | Software Development & Cybersecurity",

  description:
    "Portfolio of Laida Rusinovci, a Computer Science & Engineering graduate based in Prishtina, Kosovo. Explore projects, experience, and skills in software development and cybersecurity.",

  applicationName: "Laida Rusinovci Portfolio",

  keywords: [
    "Laida Rusinovci",
    "Software Developer",
    "Cybersecurity",
    "Computer Science",
    "Next.js",
    "React",
    ".NET",
    "Cybersecurity Analyst",
    "Prishtina",
    "Kosovo",
  ],

  authors: [
    {
      name: "Laida Rusinovci",
    },
  ],

  creator: "Laida Rusinovci",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Laida Rusinovci | Software Development & Cybersecurity",
    description:
      "Explore my work, experience, and projects in software development and cybersecurity.",
    siteName: "Laida Rusinovci Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Laida Rusinovci — Software Development & Cybersecurity",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Laida Rusinovci | Portfolio",
    description:
      "Software Development & Cybersecurity portfolio.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/icon.svg",
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
        className={`${cormorant.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
