"use client";

import { useState, useRef } from "react";

const stories = [
  {
    id: 1,
    // Replace with actual YouTube Shorts embed URL
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
    title: "Success Story 1",
  },
  {
    id: 2,
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
    title: "Success Story 2",
  },
  {
    id: 3,
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    title: "Success Story 3",
  },
  {
    id: 4,
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_4",
    title: "Success Story 4",
  },
  {
    id: 5,
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_5",
    title: "Success Story 5",
  },
  {
    id: 6,
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_5",
    title: "Success Story 5",
  },
  {
    id: 7,
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_5",
    title: "Success Story 5",
  },
];

export default function SuccessStories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 283; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <section className="w-full overflow-hidden bg-white py-16">
      {/* Header - contained */}
      <div className="mx-auto mb-8 flex max-w-[1440px] items-center justify-between px-20">
        <h2 className="text-[42px] font-bold leading-tight text-[#1a1a1a]">
          Success <span className="text-[#3B5BDB]">Stories</span>
        </h2>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-3">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 transition-all ${
              canScrollLeft
                ? "border-[#3B5BDB] text-[#3B5BDB] hover:bg-[#3B5BDB] hover:text-white"
                : "border-[#d1d5db] text-[#d1d5db] cursor-not-allowed"
            }`}
            aria-label="Scroll left"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`flex h-[50px] w-[50px] items-center justify-center rounded-full transition-all ${
              canScrollRight
                ? "bg-[#3B5BDB] text-white hover:bg-[#2D4BC1]"
                : "bg-[#d1d5db] text-white cursor-not-allowed"
            }`}
            aria-label="Scroll right"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Stories Carousel - extends to right edge */}
      <div
        ref={scrollRef}
        onScroll={checkScrollability}
        className="flex gap-[25px] overflow-x-auto pl-20 pr-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {stories.map((story) => (
          <div
            key={story.id}
            className="relative h-[462px] w-[258px] shrink-0 overflow-hidden rounded-2xl bg-[#f5f6fa]"
          >
            {/* YouTube Embed Placeholder */}
            <iframe
              src={story.embedUrl}
              title={story.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
        {/* Right spacer to match left padding (80px - 25px gap = 55px) */}
        <div className="w-[55px] shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}
