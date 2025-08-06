"use client";

import { PhoneCall, Lightbulb, Globe, Gem, LineChart,Radiation } from "lucide-react";
import Image from "next/image";

export default function ChooseUs() {
  return (
    <section className="px-4 py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Text Content */}
        <div>
          <div className="flex items-center space-x-3 mb-2">
            {/* Left icon */}
            <Radiation className="w-6 h-6 text-[#2E8AE0]" />
            {/* Title */}
            <h2 className="text-xl md:text-xl font-semibold text-[#2E8AE0] whitespace-nowrap">
              Why choose us
            </h2>
            {/* Right line */}
            <div className="w-30 h-px bg-gradient-to-r from-blue-400 to-blue-600" />
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-black leading-snug mb-4">
            Helping businesses succeed is what we do.
          </h3>
          <p className="text-gray-500 text-md leading-relaxed mb-6">
            Praesent lacinia penatibus ac vitae parturient consectetur maecenas
            natoque torquent. Aptent pretium sollicitudin mus mollis risus
            integer magna pulvinar. Egestas malesuada platea mus aenean morbi
            tristique sit auctor pulvinar.
          </p>
          <hr className="border-gray-300 mb-6" />

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Feature
              icon={<Lightbulb className="text-white w-5 h-5" />}
              title="Smart & Creative Solutions"
              description="Blandit duis sollicitudin lobortis est phasellus tempor consequat taciti facilisis"
            />
            <Feature
              icon={<Globe className="text-white w-5 h-5" />}
              title="SEO Optimized Content"
              description="Blandit duis sollicitudin lobortis est phasellus tempor consequat taciti facilisis"
            />
            <Feature
              icon={<Gem className="text-white w-5 h-5" />}
              title="High-Quality Content"
              description="Blandit duis sollicitudin lobortis est phasellus tempor consequat taciti facilisis"
            />
            <Feature
              icon={<LineChart className="text-white w-5 h-5" />}
              title="Proven Track Record"
              description="Blandit duis sollicitudin lobortis est phasellus tempor consequat taciti facilisis"
            />
          </div>
        </div>

        {/* Right Image & Contact Card */}
        <div className="relative">
          <Image
            src="/img/who3.jpg"
            alt="Support"
            width={600}
            height={700}
            className="rounded-2xl object-cover w-full h-auto"
          />

          {/* Floating Contact Card */}
          <div className="absolute bottom-5 left-5 bg-[#2E8AE0] text-white rounded-lg px-5 py-5 flex items-center gap-3 shadow-lg">
            <PhoneCall className="w-6 h-6" />
            <div>
              <p className="text-xs opacity-80 font-medium">Sajid More Help</p>
              <p className="text-lg font-semibold">(+92) 3201757153</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Feature Component
function Feature({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-20 h-10 rounded-full bg-[#2E8AE0] flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="text-md font-semibold text-black">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
