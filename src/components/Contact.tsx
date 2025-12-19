"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="w-full bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-20">
        {/* Title */}
        <h2 className="mb-10 text-[32px] font-bold text-[#1a1a1a]">
          Get in Touch
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Row 1: Name, Email, Phone */}
          <div className="grid grid-cols-3 gap-12">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#1a1a1a]">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Rachel Joe"
                value={formData.name}
                onChange={handleChange}
                className="h-12 rounded-md border border-[#CBCBCB] bg-white px-5 text-base text-[#1a1a1a] placeholder:text-[#4E4E4E] focus:border-[#3B5BDB] focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#1a1a1a]">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Rachel@domain.com"
                value={formData.email}
                onChange={handleChange}
                className="h-12 rounded-md border border-[#CBCBCB] bg-white px-5 text-base text-[#1a1a1a] placeholder:text-[#4E4E4E] focus:border-[#3B5BDB] focus:outline-none"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#1a1a1a]">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+971...."
                value={formData.phone}
                onChange={handleChange}
                className="h-12 rounded-md border border-[#CBCBCB] bg-white px-5 text-base text-[#1a1a1a] placeholder:text-[#4E4E4E] focus:border-[#3B5BDB] focus:outline-none"
              />
            </div>
          </div>

          {/* Row 2: Subject, Message */}
          <div className="grid grid-cols-[1fr_2fr] gap-12">
            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#1a1a1a]">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="h-12 rounded-md border border-[#CBCBCB] bg-white px-5 text-base text-[#1a1a1a] placeholder:text-[#4E4E4E] focus:border-[#3B5BDB] focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#1a1a1a]">
                Message
              </label>
              <input
                type="text"
                name="message"
                placeholder="Enter Query"
                value={formData.message}
                onChange={handleChange}
                className="h-12 rounded-md border border-[#CBCBCB] bg-white px-5 text-base text-[#1a1a1a] placeholder:text-[#4E4E4E] focus:border-[#3B5BDB] focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 w-fit rounded-full bg-[#2B3656] px-8 py-3 text-base font-medium text-white transition-all hover:bg-[#3B5BDB]"
          >
            Send my message
          </button>
        </form>
      </div>
    </section>
  );
}
