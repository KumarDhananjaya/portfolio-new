import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kumar Dhananjaya | Full-Stack & Mobile Developer",
  description: "Associate Software Engineer specializing in Full-Stack and Mobile App Development. Expert in MERN Stack, React Native, and DevOps.",
  keywords: ["Kumar Dhananjaya", "Full-Stack Developer", "Mobile Developer", "React", "Next.js", "React Native", "MERN Stack", "DevOps"],
  authors: [{ name: "Kumar Dhananjaya" }],
  creator: "Kumar Dhananjaya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kumardhananjaya.com",
    title: "Kumar Dhananjaya | Full-Stack & Mobile Developer",
    description: "Associate Software Engineer specializing in Full-Stack and Mobile App Development",
    siteName: "Kumar Dhananjaya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar Dhananjaya | Full-Stack & Mobile Developer",
    description: "Associate Software Engineer specializing in Full-Stack and Mobile App Development",
    creator: "@SKumarDhananjay",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-[100px]">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
