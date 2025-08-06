// components/WhoWeAreSection.tsx
"use client";

import Image from "next/image";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import {Group} from "lucide-react";

const features = [
  {
    title: "Experienced & Certified",
    description: "Hac magnis finibus pretium ac nunc nulla curabitur quisque pede bibendum sagittis conubia praesent",
  },
  {
    title: "We Focus on Well Organize Content.",
    description: "Hac magnis finibus pretium ac nunc nulla curabitur quisque pede bibendum sagittis conubia praesent",
  },
  {
    title: "Always Deliver On Time.",
    description: "Hac magnis finibus pretium ac nunc nulla curabitur quisque pede bibendum sagittis conubia praesent",
  },
];

export default function WhoWeAreSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative">
        {/* Left - Images */}
        <div className="grid grid-cols-2 gap-4 relative">
          <div className="rounded-lg overflow-hidden">
            <Image src="/img/who1.jpg" alt="avatar1" width={500} height={500} className="object-cover rounded-lg w-full h-full" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image src="/img/who2.jpg" alt="avatar2" width={500} height={500} className="object-cover rounded-lg w-full h-full" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image src="/img/who3.jpg" alt="avatar3" width={500} height={500} className="object-cover rounded-lg w-full h-full" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image src="/img/who4.jpg" alt="avatar4" width={500} height={500} className="object-cover rounded-lg w-full h-full" />
          </div>

          {/* Experience Badge */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full border-4 border-white shadow-lg w-40 h-40 flex flex-col items-center justify-center text-center z-10">
            <p className="text-3xl font-bold text-[#2E8AE0]">15+</p>
            <p className="text-sm text-gray-700 font-medium mt-1">YEARS EXPERIENCE</p>
          </div>
        </div>

        {/* Right - Text */}
        <div>
         <div className="flex items-center space-x-3 mb-2">
            {/* Left icon */}
            <Group className="w-6 h-6 text-[#2E8AE0]" />
            {/* Title */}
            <h2 className="text-xl md:text-xl font-semibold text-[#2E8AE0] whitespace-nowrap">
             Who We Are
            </h2>
            {/* Right line */}
            <div className="w-50 h-px bg-gradient-to-r from-blue-400 to-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-4 text-gray-900">
            Elevate your business with <br />
            effective copy that engages.
          </h2>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="space-y-4">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="bg-[#2E8AE0] text-white p-2 rounded-full">
                  <CheckBadgeIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-md font-bold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
