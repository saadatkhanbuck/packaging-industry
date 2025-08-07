'use client';

import Link from "next/link";
import { Webhook  } from "lucide-react";

export default function SocialMedia() {
  return (
    <div className="min-h-screen mt-20 bg-white px-4 sm:px-6 lg:px-8 py-12">
      {/* Top Title with Icon and Right Line */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center gap-2">
          <Webhook  className="text-[#2E8AE0]" size={28} />
          <h1 className="text-2xl font-bold text-[#2E8AE0]">Social Media</h1>
        </div>
        <div className="ml-4 h-[2px] w-24 bg-[#2E8AE0]" />
      </div>

      {/* Heading */}
      <Link
        href="/blogdetail2"
        className="mt-6 inline-block text-xl font-semibold text-gray-800 hover:underline transition-all"
      >
        Creating an Effective Social Media Marketing Campaign
      </Link>

      {/* Full-width Image */}
      <div className="mt-6">
        <img
          src="/img/blog2.jpg"
          alt="Banner"
          className="w-full h-[820px] object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Paragraph */}
      <p className="mt-6 text-gray-700 leading-relaxed text-sm sm:text-base max-w-3xl">
        We believe in delivering more than just designs – we deliver results. Our team works closely with you to understand your vision, and then turns it into reality with creative, functional, and responsive solutions tailored for your business.
      </p>
    </div>
  );
}
