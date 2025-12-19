import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-20">
        {/* Hero Container with rounded corners */}
        <div className="relative flex items-center justify-between overflow-hidden rounded-3xl bg-[#7C8AE4] px-10">
          {/* Left Content */}
          <div className="flex max-w-[648px] flex-col gap-6 py-16">
            {/* Heading */}
            <div className="flex flex-col gap-2">
              <h1 className="text-[48px] font-bold leading-[1.15] text-white">
                Build Your Nursing Career in Germany with Taldo
              </h1>
              <p className="text-lg leading-relaxed text-white/90">
                Your trusted pathway to work, live, and grow in Germany&apos;s healthcare system.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="/apply"
              className="flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-base font-medium text-[#1a1a1a] transition-all hover:bg-white/90 hover:shadow-lg"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
              Apply now
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative h-[496px] w-[485px] shrink-0 -mb-10">
            <Image
              src="/home/hero-img.webp"
              alt="Nurse with clipboard"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
