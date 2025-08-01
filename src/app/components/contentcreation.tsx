'use client';

import { PenLine } from 'lucide-react';
import Image from 'next/image';

export default function ContentCreation() {
  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      {/* Heading Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="flex justify-center items-center gap-3 mb-2">
          <PenLine className="text-[#2E8AE0] w-5 h-5" />
          <h3 className="text-xl font-semibold text-[#2E8AE0]">
            Content Creation
          </h3>
          <div className="w-20 h-[2px] bg-[#2E8AE0] rounded-full"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-2">
          Join 4,000+ Businesses That Have Outsourced Their Content Creation To Writica
        </h2>
        <p className="text-gray-600 text-md md:text-lg">
          Discover how Writca crafts engaging content that connects, informs, and inspires.
        </p>
      </div>

      {/* Background Image Section */}
      <div className="relative w-full max-w-6xl mx-auto h-[600px] md:h-[580px] lg:h-[540px] rounded-lg overflow-hidden">
        <Image
          src="/img/back.png"
          alt="Content Creation Background"
          fill
          className="object-center"
        />

        {/* Avatar Frames - with fixed size & crisp image */}
        <div className="absolute top-[10%] left-[12%] w-12 h-12 rounded-full overflow-hidden border-2 border-[#2E8AE0]">
          <Image
            src="/img/saadat1 (1).jpg"
            alt="Avatar"
            width={48}
            height={48}
            placeholder="empty"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="absolute top-[20%] right-[10%] w-12 h-12 rounded-full overflow-hidden border-2 border-[#2E8AE0]">
          <Image
            src="/img/saadat1 (2).jpg"
            alt="Avatar"
            width={48}
            height={48}
            placeholder="empty"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="absolute bottom-[18%] left-[18%] w-14 h-14 rounded-full overflow-hidden border-2 border-[#2E8AE0]">
          <Image
            src="/img/saadat1 (3).jpg"
            alt="Avatar"
            width={56}
            height={56}
            placeholder="empty"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="absolute bottom-[12%] right-[22%] w-12 h-12 rounded-full overflow-hidden border-2 border-[#2E8AE0]">
          <Image
            src="/img/saadat1 (4).jpg"
            alt="Avatar"
            width={48}
            height={48}
            placeholder="empty"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="absolute top-[42%] left-[44%] w-16 h-16 rounded-full overflow-hidden border-2 border-[#2E8AE0]">
          <Image
            src="/img/saadat1 (2).jpg"
            alt="Avatar Center"
            width={64}
            height={64}
            placeholder="empty"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="absolute bottom-[6%] left-[6%] w-10 h-10 rounded-full overflow-hidden border-2 border-[#2E8AE0]">
          <Image
            src="/img/saadat1 (2).jpg"
            alt="Avatar"
            width={40}
            height={40}
            placeholder="empty"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
