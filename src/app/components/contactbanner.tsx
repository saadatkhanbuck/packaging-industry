// components/ContactBanner.tsx
'use client'

import Link from "next/link"

export default function ContactBanner() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-28 px-4"
      style={{ backgroundImage: "url('/img/clientbg3.jpeg')" }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/70 z-0" />


      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Don&apos;t Hesitate To Contact Us Any Time You Need
        </h2>
        <p className="text-lg text-white/90 mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Link href="/contact">
          <button className="px-8 py-3 text-white font-medium rounded-full bg-gradient-to-r from-[#124576] to-[#2E8AE0] transition-all duration-300 hover:from-black hover:to-[#2e3033] hover:text-white">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  )
}
