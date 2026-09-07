import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mathias Echioda | Frontend Developer & Computer Engineer",
  description:
    "Personal portfolio of Mathias Echioda — Frontend Developer and Computer Engineer specializing in React, Next.js, TypeScript, and modern interactive web applications.",
  keywords: [
    "Mathias Echioda",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Computer Engineer",
    "FUT Minna",
    "HNG Finalist",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Mathias Echioda", url: "https://github.com/Kimathii" }],
  creator: "Mathias Echioda",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mathias Echioda | Frontend Developer & Computer Engineer",
    description:
      "Crafting engaging, modern, high-performance web applications with React, Next.js, and TypeScript.",
    siteName: "Mathias Echioda Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathias Echioda | Frontend Developer & Computer Engineer",
    description:
      "Frontend Developer & Computer Engineer specializing in React, Next.js, and modern UI engineering.",
    creator: "@_Mathias_Jr_",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}