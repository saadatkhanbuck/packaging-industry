"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ServicesPage from "../components/ourservice";
import WorkingProcess from "../components/workingprocess";
import ContactBanner from "../components/contactbanner";
import FaqSection from "../components/faqsection";

export default function ServicesHeader() {
  useEffect(() => {
    AOS.init({
      duration: 800, // smooth speed
      easing: "ease-out-cubic", // soft easing
      once: true, // animate only once
      offset: 100, // start earlier
    });
  }, []);

  return (
    <>
      <section
        className="relative h-[100vh] w-full bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/img/bg.webp')" }}
      >
        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 px-4 w-full max-w-6xl">
          {/* Left Side Image */}
          <div
            className="w-full md:w-1/2 flex justify-end pr-6"
            data-aos="fade-right"
          >
            <Image
              src="/img/bg4.jpg"
              alt="Service Icon"
              width={880}
              height={880}
              className="object-contain"
            />
          </div>

          {/* Right Side Text */}
          <div
            className="w-full md:w-1/2 flex flex-col items-start text-left space-y-6 pl-4"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Our Services
            </h1>

            {/* Breadcrumb */}
            <div className="bg-white/80 backdrop-blur-sm px-2 py-2 rounded-full shadow-md flex items-center gap-2">
              <Link
                href="/"
                className="px-5 py-1 text-sm bg-white text-[#2E8AE0] rounded-full hover:bg-gray-100 transition-all font-medium"
              >
                Home
              </Link>
              <span className="text-black font-bold">≫</span>
              <span className="px-4 py-1 text-sm text-[#2E8AE0] font-medium">
                Services
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Sections */}
      <div data-aos="fade-up" data-aos-delay="100">
        <ServicesPage />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <WorkingProcess />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <ContactBanner />
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <FaqSection />
      </div>
    </>
  );
}
