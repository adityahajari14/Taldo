"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Recruiters", href: "/recruiters" },
  { name: "Nurses to Germany", href: "/nurses-to-germany" },
];

export default function Header() {
  const pathname = usePathname();

  // Function to check if a nav item is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full font-sans">
      <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.webp"
            alt="Taldo"
            width={104}
            height={38}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-[52px]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base font-medium text-[#1a1a1a] transition-colors hover:text-[#3b4b8c] ${isActive(item.href)
                ? "underline underline-offset-4 decoration-2 decoration-[#1a1a1a]"
                : ""
                }`}
            >
              {item.name}
            </Link>
          ))}

          {/* CTA Button */}
          <Link
            href="/#contact"
            className="flex h-[38px] items-center justify-center rounded-full bg-[#2d3a6d] px-[30px] text-sm font-medium text-white transition-colors hover:bg-[#3b4b8c]"
          >
            Enquire Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
