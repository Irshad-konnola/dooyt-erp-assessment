import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dooyt ERP - Accuracy. Productivity.",
  description: "Simplify your business management with real-time dashboards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-zinc-50 antialiased text-zinc-900`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}