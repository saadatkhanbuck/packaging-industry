"use client";

import { DollarSign } from "lucide-react";

export default function OurPricing() {
  const plans = [
    {
      title: "Website Content",
      price: "$59",
      description:
        "Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt",
      features: [
        "2000 Words/article",
        "Five Keyword Monitors",
        "Free Platform Access",
        "24/7 Customer Support",
      ],
    },
    {
      title: "SEO Content",
      price: "$59",
      description:
        "Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt",
      features: [
        "2000 Words/article",
        "Five Keyword Monitors",
        "Free Platform Access",
        "24/7 Customer Support",
      ],
    },
    {
      title: "Social Media Post",
      price: "$59",
      description:
        "Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt",
      features: [
        "2000 Words/article",
        "Five Keyword Monitors",
        "Free Platform Access",
        "24/7 Customer Support",
      ],
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* ✅ Section Title */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <DollarSign className="text-[#2E8AE0] w-6 h-6" />
          <h3 className="text-xl font-semibold text-[#2E8AE0]">Our Pricing</h3>
          <div className="h-[2px] w-16 bg-[#2E8AE0] rounded-full"></div>
        </div>

        {/* ✅ Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-2">
          Flexible Pricing Plans
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>

        {/* ✅ Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg p-6 text-left"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{plan.description}</p>

              <div className="text-3xl font-bold text-[#2E8AE0] mb-1">
                {plan.price}
                <span className="text-sm text-gray-500 font-normal">
                  {" "}
                  /content
                </span>
              </div>

              <hr className="my-4" />

              <ul className="space-y-3 mb-6 text-sm text-gray-700">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 hover:text-[#2E8AE0] cursor-pointer transition-colors"
                  >
                    <span className="text-[#2E8AE0]">✔</span> {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 text-white font-medium rounded bg-gradient-to-r from-[#124576] to-[#2E8AE0] transition-all duration-300 hover:from-black hover:to-[#2e3033] transform hover:-translate-y-1">
                Purchase Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
