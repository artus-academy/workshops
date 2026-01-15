import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ArtUs Academy - Workshops",
  description: "Resources for the workshops conducted by ArtUs Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="w-full py-6 px-8 border-b border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="ArtUs Academy Logo"
                className="h-10 w-auto saturate-0 invert-100"
              />
              <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                ArtUs Academy
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="/"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                Home
              </a>
              <a
                href="https://artusacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                Website
              </a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="w-full py-8 px-8 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="max-w-7xl mx-auto text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} ArtUs Academy. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
