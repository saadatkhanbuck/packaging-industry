"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do You Offer Edits/Revisions?",
    answer:
      "Writica offers AI-powered content writing tools for blog posts, ads, emails, and SEO-optimized content generation."
  },
  {
    question: "Is Writica free to use?",
    answer:
      "Writica offers a free plan with limited features. Premium plans are available for advanced tools and higher usage limits."
  },
  {
    question: "Why Do I Need Fresh Content on My Site?",
    answer:
      "Yes, you can export your generated content to text, PDF, or directly copy it to your clipboard."
  },
  {
    question: "How secure is my data?",
    answer:
      "We use industry-standard encryption and never store your generated content without your permission."
  },
  {
    question: "Does it support multiple languages?",
    answer:
      "Absolutely! Writica supports over 20 global languages including Spanish, French, and German."
  },
  {
    question: "Can I integrate Writica with other tools?",
    answer:
      "Yes, Writica offers API access and integrations with popular platforms like Notion, Google Docs, and WordPress."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Title Row */}
        <div className="flex items-center justify-center mb-4">
          <HelpCircle className="w-6 h-6 text-[#2E8AE0]" />
          <h2 className="text-3xl font-bold text-[#2E8AE0] mx-3">FAQ</h2>
          <div className="h-px w-20 bg-[#2E8AE0]"></div>
        </div>

        {/* Subheading */}
        <h3 className="text-4xl font-semibold text-gray-800 mb-2">
          Popular Question
        </h3>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm
          tempor incididunt ut labore et dolore magna aliqua
        </p>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-4 text-left">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-lg shadow-sm transition-all duration-300 ${
                openIndex === i ? "bg-gray-50 " : "bg-white border-gray-200"
              }`}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between"
                onClick={() => toggle(i)}
              >
                <span
                  className={`text-lg font-semibold ${
                    openIndex === i ? "text-[#2E8AE0]" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === i
                      ? "rotate-180 text-[#2E8AE0]"
                      : "text-gray-400"
                  }`}
                />
              </button>
              <div
                className={`px-6 pt-0 pb-4 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
