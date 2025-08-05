'use client';

import React from 'react';
import Image from 'next/image';

const MeetingTeam = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/img/meeting.jpg" // ✅ Apni image ka path yahan dalen
        alt="Meeting Team"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Meet Our Team</h1>
        <p className="text-white text-lg md:text-xl max-w-2xl">
          Our diverse team collaborates with passion, creativity, and a shared vision.
        </p>
      </div>
    </div>
  );
};

export default MeetingTeam;
