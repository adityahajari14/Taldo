import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    sections: [
      {
        title: "SELL A HOME",
        links: [
          { name: "Request an offer", href: "/request-offer" },
          { name: "Pricing", href: "/pricing" },
          { name: "Reviews", href: "/reviews" },
          { name: "Stories", href: "/stories" },
        ],
      },
      {
        title: "BUY A HOME",
        links: [
          { name: "Buy", href: "/buy" },
          { name: "Finance", href: "/finance" },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "BUY, RENT AND SELL",
        links: [
          { name: "Buy and sell properties", href: "/buy-sell" },
          { name: "Rent home", href: "/rent" },
          { name: "Builder trade-up", href: "/builder-trade-up" },
        ],
      },
      {
        title: "TERMS & PRIVACY",
        links: [
          { name: "Trust & Safety", href: "/trust-safety" },
          { name: "Terms of Service", href: "/terms" },
          { name: "Privacy Policy", href: "/privacy" },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "ABOUT",
        links: [
          { name: "Company", href: "/company" },
          { name: "How it works", href: "/how-it-works" },
          { name: "Contact", href: "/contact" },
          { name: "Investors", href: "/investors" },
        ],
      },
      {
        title: "RESOURCES",
        links: [
          { name: "Blog", href: "/blog" },
          { name: "Guides", href: "/guides" },
          { name: "FAQ", href: "/faq" },
          { name: "Help Center", href: "/help" },
        ],
      },
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-[1440px] px-20 pb-8 pt-20">
        {/* Main Footer Content */}
        <div className="flex justify-between pr-30">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="Taldo"
                width={104}
                height={38}
              />
            </Link>
          </div>

          {/* Navigation Columns */}
          {footerColumns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-12">
              {column.sections.map((section) => (
                <div key={section.title} className="flex flex-col">
                  <h4 className="mb-4 text-sm font-semibold tracking-wide text-[#1a1a1a]">
                    {section.title}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-[#6c727f] transition-colors hover:text-[#2d3a6d]"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-[#e0e0e0]" />

        {/* Bottom Section */}
        <div className="flex items-center justify-between">
          {/* Copyright */}
          <p className="text-sm text-[#6c727f]">
            ©2021 Estatery. All rights reserved
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-10">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6c727f] transition-colors hover:text-[#2d3a6d]"
                aria-label={social.name}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
