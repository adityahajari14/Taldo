"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Who is eligible?",
    answer: "Indian nurses with a valid nursing degree (GNM, B.Sc Nursing, or equivalent) and relevant work experience are eligible to apply.",
  },
  {
    question: "What salary can I expect?",
    answer: "€2,300–€2,800 (pre-recognition) and €2,800–€3,500 (post-recognition).",
  },
  {
    question: "Do I need German skills before joining?",
    answer: "No prior German knowledge is required. We provide comprehensive German language training from A1 to B2 level as part of the program.",
  },
  {
    question: "How long does the process take?",
    answer: "The entire process typically takes 12-18 months, including language training, documentation, and visa processing.",
  },
  {
    question: "Is there a job guarantee?",
    answer: "Yes, we guarantee employer interviews and job placement assistance for all candidates who successfully complete the program.",
  },
  {
    question: "Can I take my family later?",
    answer: "Yes, once you are settled in Germany, you can apply for family reunification to bring your spouse and children.",
  },
  {
    question: "Is the training online or offline?",
    answer: "We offer both online and offline training options to suit your convenience and learning preferences.",
  },
  {
    question: "What if I fail an exam?",
    answer: "We provide additional support and re-training if needed. Our goal is to ensure your success throughout the program.",
  },
  {
    question: "Are there hidden charges?",
    answer: "No, we maintain complete transparency. All costs are communicated upfront with no hidden fees.",
  },
];

export default function FAQ() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-[1440px] px-20">
        {/* Title */}
        <h2 className="mb-10 text-[42px] font-bold leading-tight text-[#1a1a1a]">
          Frequently Asked Questions
        </h2>

        {/* FAQ Content */}
        <div className="flex gap-3">
          {/* Questions List */}
          <div className="flex w-[640px] flex-col bg-white rounded-xl">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                className={`flex h-[72px] items-center justify-between px-4 cursor-pointer transition-all rounded-xl ${selectedIndex === index
                  ? "bg-[#E8EBFA]"
                  : "bg-white hover:bg-[#F0F1F5]"
                  }`}
              >
                <div className="flex items-center gap-4">
                  {/* Circle bullet */}
                  <div
                    className={`h-3 w-3 rounded-full ${selectedIndex === index
                      ? "bg-[#3B5BDB]"
                      : "bg-[#B8C0E8]"
                      }`}
                  />
                  {/* Question text */}
                  <span
                    className={`text-left text-base ${selectedIndex === index
                      ? "font-medium text-[#1a1a1a]"
                      : "text-[#1a1a1a]"
                      }`}
                  >
                    {faq.question}
                  </span>
                </div>
                {/* Arrow */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={selectedIndex === index ? "#3B5BDB" : "#B8C0E8"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            ))}
          </div>

          {/* Answer Panel */}
          {selectedIndex !== null && (
            <div className="h-fit w-[630px] rounded-2xl bg-[#FAFBFF] p-10 shadow-sm">
              <h3 className="mb-5 text-xl font-semibold text-black">
                {faqs[selectedIndex].question}
              </h3>
              <p className="text-base leading-relaxed text-black">
                {faqs[selectedIndex].answer}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
