"use client";

import { ArrowRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import ServicesPage from "../components/ourservice";

export default function Hero() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-screen"
        style={{ backgroundImage: "url('/img/bg.webp')" }}
      >
        {/* Removed dark overlay */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left Side Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/img/hero.jpg"
              alt="Product Mockup"
              width={640} // increased from 500
              height={640}
              className="rounded-3xl shadow-xl mx-auto lg:max-w-md xl:max-w-lg"
              priority
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-1/2 text-black text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Quality <span className="text-[#2E8AE0]"> Content</span> For Your
              Business In A Few <span className="text-[#2E8AE0]">Clicks</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {/* Buttons */}
            <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#124576] to-[#2E8AE0] hover:bg-[#2E8AE0] transition-all duration-300 shadow-md">
                <ShoppingCart className="w-5 h-5" />
                Order Now
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black text-black font-semibold hover:bg-black hover:text-white transition-all duration-300 shadow-md">
                <ArrowRight className="w-5 h-5" />
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Below */}
      <ServicesPage />
    </>
  );
}
