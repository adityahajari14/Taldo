import Image from "next/image";
import Link from "next/link";

const bulletPoints = [
  "Browse from numerous career opportunities and select one that suits you best",
  "Get support from training & paperwork to relocation & settling down in a new country",
  "Expert advice & tips, mock interviews and all round training for cracking the interview process",
];

export default function StartCareer() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-16 px-20">
        {/* Left Content */}
        <div className="flex max-w-[627px] flex-col">
          {/* Title */}
          <h2 className="mb-6 text-[42px] font-bold leading-tight text-[#1a1a1a]">
            Start Your <span className="text-[#3B5BDB]">International</span> Career Today
          </h2>

          {/* Bullet Points */}
          <ul className="mb-8 flex flex-col gap-4">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1a1a1a]" />
                <span className="text-lg leading-relaxed text-[#1a1a1a]">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="/apply"
            className="flex w-fit items-center gap-3 rounded-full bg-[#3B5BDB] px-6 py-4 text-base font-medium text-white transition-all hover:bg-[#2D4BC1] hover:shadow-lg"
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
        <div className="relative h-[462px] w-[616px] shrink-0 overflow-hidden rounded-3xl">
          <Image
            src="/home/career-img.webp"
            alt="Professional handshake"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
