import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute flex items-center justify-between p-4">
      <Link href="/">
        <Image src="/Logo.svg" alt="Logo" width={126} height={29.18} />
      </Link>
      <nav className="space-x-4 leading-[130%]">
        <Link href="/destinations">
          <span className="relative group">
            Destinations
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>
        <Link href="/howitworks">
          <span className="relative group">
            How it works
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>
        <Link href="/about">
          <span className="relative group">
            About
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>
        <Link href="/blog">
          <span className="relative group">
            Blog
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>
        <Link href="/faq">
          <span className="relative group">
            FAQ
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>
      </nav>
      <button className="py-[10px] px-[16px] text-greenVogue950 bg-yellow rounded-[10px] font-medium">
        BOOK NOW
      </button>
    </header>
  );
};

export default Header;
