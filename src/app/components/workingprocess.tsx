'use client';

import { Zap } from 'lucide-react'; // Lucide Icon

export default function WorkingProcess() {
  return (
    <section className="py-20 bg-white text-center">
      {/* Top Text */}
      <div className="max-w-3xl mx-auto mb-16 px-4">
        {/* Line + Icon + Text Row */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <Zap className="text-[#2E8AE0] w-5 h-5" /> {/* Lucide Icon */}
          <p className="text-[#2E8AE0] font-medium">How It Works</p>
          <div className="h-[2px] w-16 bg-[#2E8AE0] rounded-full"></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Working Process</h2>
        <p className="text-gray-500 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      {/* Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 max-w-6xl mx-auto">
        <Step
          number="01"
          title="Submit A Request"
          description="Lorem ipsum dolor sit amet, consecte adipiscing elit, sed eiusmod tempor incididunt labore et dolore magna aliqua minim"
        />
        <Step
          number="02"
          title="We Get It Written"
          description="Lorem ipsum dolor sit amet, consecte adipiscing elit, sed eiusmod tempor incididunt labore et dolore magna aliqua minim"
        />
        <Step
          number="03"
          title="Receive Content"
          description="Lorem ipsum dolor sit amet, consecte adipiscing elit, sed eiusmod tempor incididunt labore et dolore magna aliqua minim"
        />
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Number circle with border + shadow */}
      <span className="text-lg font-bold text-[#2E8AE0] border border-gray-300 shadow-md w-12 h-12 flex items-center justify-center rounded-full mb-6">
        {number}
      </span>

      <div className="h-px w-16 bg-gray-200 my-2"></div>

      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}
