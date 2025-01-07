import "./globals.css";
import Link from "next/link";
import Image from "next/image";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Carterag",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header className="flex items-center justify-between p-4">
          <Link href="/">
            <Image src="/Logo.svg" alt="Logo" width={126} height={29.18} />
          </Link>
          <nav className="space-x-4">
            <Link href="/destinations">Destinations</Link>
            <Link href="/howitworks">How it works</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">FAQ</Link>
          </nav>
          <button className="header-button">BOOK NOW</button>
        </header>
        {children}
      </body>
    </html>
  );
}
