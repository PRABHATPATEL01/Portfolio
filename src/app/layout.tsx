import type { Metadata } from "next";
import { Hanken_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Starlight Portfolio",
  description: "iOS Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${hankenGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-surface text-on-surface font-body antialiased relative overflow-x-hidden">
        {/* Animated Background Blobs */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#4F46E5]/30 blur-[120px] animate-blob-1 mix-blend-multiply"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full bg-[#D946EF]/20 blur-[150px] animate-blob-2 mix-blend-multiply"></div>
          <div className="absolute top-[30%] right-[-5%] w-[50%] h-[50%] rounded-full bg-[#06B6D4]/15 blur-[130px] animate-blob-3 mix-blend-multiply"></div>
        </div>
        
        {/* Global Noise Texture */}
        <div className="bg-noise"></div>

        <div className="relative z-0">
          {children}
        </div>
      </body>
    </html>
  );
}
