'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

interface Blog {
    id: string;
    title: string;
    date: string;
    image: string;
}

interface OtherBlogsProps {
    blogs: Blog[];
    currentBlogId?: string;
    heading: string;
    limit?: number;
}

export default function OtherBlogs({ blogs, currentBlogId, heading, limit }: OtherBlogsProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    // Filter out current blog if on individual blog page
    let displayBlogs = currentBlogId
        ? blogs.filter(blog => blog.id !== currentBlogId)
        : blogs;

    // Apply limit if provided
    if (limit) {
        displayBlogs = displayBlogs.slice(0, limit);
    }

    // Check scroll position to show/hide navigation buttons
    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px threshold
        }
    };

    useEffect(() => {
        checkScrollPosition();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollPosition);
            return () => container.removeEventListener('scroll', checkScrollPosition);
        }
    }, [displayBlogs]);

    // Scroll left/right by one card width + gap
    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 380 + 28; // card width (md) + gap
            const newScrollLeft = direction === 'left'
                ? scrollContainerRef.current.scrollLeft - scrollAmount
                : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="w-full bg-background py-12 md:py-16 lg:py-20">
            {/* Section Title and Navigation Buttons */}
            <div className="w-full max-w-[1440px] mx-auto px-20 mb-6 lg:mb-6">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium text-[28px] md:text-[36px] leading-[1.2] text-black">
                        {heading}
                    </h2>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-black transition-all hover:bg-black hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-black"
                            aria-label="Scroll left"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-black transition-all hover:bg-black hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-black"
                            aria-label="Scroll right"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Scrollable Blog Container */}
            <div
                ref={scrollContainerRef}
                className="w-full overflow-x-auto scrollbar-hide"
            >
                <div className="flex gap-6 md:gap-7 pl-20">
                    {displayBlogs.map((blog) => (
                        <Link
                            key={blog.id}
                            href={`/blog/${blog.id}`}
                            className="group flex flex-col flex-shrink-0 w-[320px] md:w-[380px]"
                        >
                            {/* Blog Image */}
                            <div className="relative w-full aspect-[400/310] rounded-[10px] overflow-hidden bg-gray-200 mb-6">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Blog Info */}
                            <div className="flex flex-col gap-3">
                                {/* Date */}
                                <p className="font-normal text-base md:text-lg leading-[1.25] text-black">
                                    {blog.date}
                                </p>

                                {/* Title */}
                                <h3 className="font-bold text-xl md:text-xl leading-[1.4] text-black group-hover:opacity-70 transition-opacity">
                                    {blog.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                    {/* Spacer to create equal padding on the right */}
                    <div className="flex-shrink-0 w-20" aria-hidden="true" />
                </div>
            </div>
        </section>
    );
}
