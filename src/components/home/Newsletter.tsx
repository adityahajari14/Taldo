"use client";

import Image from "next/image";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-16 px-20">
        {/* Left Content */}
        <div className="flex max-w-[591px] flex-col">
          {/* Title */}
          <h2 className="mb-8 text-[48px] font-bold leading-tight text-black">
            Discover Articles
            <br />
            & Blogs daily
          </h2>

          {/* Subtitle */}
          <p className="mb-6 text-lg text-[#1a1a1a]">
            Subscribe and get weekly email with{" "}
            <span className="font-semibold">latest articles</span>
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex gap-6">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-16 w-[400px] rounded-md border border-[#979797] bg-white px-6 text-base text-[#1a1a1a] placeholder:text-[#979797] focus:border-[#3B5BDB] focus:outline-none"
              required
            />
            <button
              type="submit"
              className="h-16 rounded-full bg-[#233CC5] px-10 text-base font-medium text-white transition-all hover:bg-[#2D4BC1]"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="relative h-[362px] w-[510px] shrink-0 overflow-hidden rounded-3xl">
          <Image
            src="/home/newsletter.webp"
            alt="People studying"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
