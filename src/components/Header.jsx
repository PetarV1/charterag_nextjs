import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
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
  );
};

export default Header;