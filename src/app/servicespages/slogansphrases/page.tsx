"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Type, Sparkles, PenTool, Lightbulb } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SloganPhrasesPage() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: false, offset: 50 });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* ✅ Hero Section */}
      <section
        className="relative h-[100vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/img/bg.webp')" }}
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 px-4 w-full max-w-6xl">
          {/* Left Image */}
          <div
            className="w-full md:w-1/2 flex justify-end pr-6"
            data-aos="fade-right"
          >
            <Image
              src="/img/bg4.jpg"
              alt="Slogan Writing Illustration"
              width={880}
              height={880}
              className="object-contain"
            />
          </div>

          {/* Right Text */}
          <div
            className="w-full md:w-1/2 flex flex-col items-start text-left space-y-6 pl-4"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Slogan & Phrases Writing
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
                Slogan & Phrases
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Intro Section */}
      <section className="bg-gradient-to-r from-[#124576] to-[#2E8AE0] text-white py-20 px-6 md:px-16 text-center">
        <div data-aos="fade-up" className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Type size={40} />
            <h1 className="text-4xl md:text-5xl font-bold">
              Slogan & Phrases Writing Services
            </h1>
          </div>
          <p className="text-lg text-gray-100 leading-relaxed">
            Turn your brand identity into powerful words. Our creative writers
            craft slogans and taglines that stick, inspire, and connect instantly
            with your audience.
          </p>
        </div>
      </section>

      {/* ✅ About Section */}
      <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto text-center">
        <p
          data-aos="fade-up"
          className="text-gray-600 text-lg leading-relaxed mb-10"
        >
          At <span className="text-[#2E8AE0] font-semibold">Traviazo</span>, we
          believe every great brand starts with a few powerful words. Whether
          it’s a catchy slogan, a memorable tagline, or a brand phrase that
          evokes emotion, our creative team delivers phrases that resonate,
          inspire, and last.
        </p>

        <div
          className="grid md:grid-cols-3 gap-8 mt-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <Sparkles
              size={35}
              className="text-[#2E8AE0] mx-auto mb-4"
              strokeWidth={1.6}
            />
            <h3 className="font-semibold text-xl mb-3 text-[#124576]">
              Catchy & Memorable
            </h3>
            <p className="text-gray-600 text-sm">
              We create short, striking slogans that your audience instantly
              remembers and associates with your brand.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <PenTool
              size={35}
              className="text-[#2E8AE0] mx-auto mb-4"
              strokeWidth={1.6}
            />
            <h3 className="font-semibold text-xl mb-3 text-[#124576]">
              Brand-Focused Writing
            </h3>
            <p className="text-gray-600 text-sm">
              Every slogan is customized to reflect your brand’s tone, values,
              and unique personality.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <Lightbulb
              size={35}
              className="text-[#2E8AE0] mx-auto mb-4"
              strokeWidth={1.6}
            />
            <h3 className="font-semibold text-xl mb-3 text-[#124576]">
              Emotionally Impactful
            </h3>
            <p className="text-gray-600 text-sm">
              We tap into emotions and human connection to craft phrases that
              spark loyalty and action.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Process Section */}
      <section className="bg-gray-100 py-20 px-6 md:px-20 text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold text-[#124576] mb-10"
        >
          Our Slogan Creation Process
        </h2>

        <div
          className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {[
            { step: "01", title: "Brand Discovery" },
            { step: "02", title: "Creative Brainstorming" },
            { step: "03", title: "Concept Refinement" },
            { step: "04", title: "Final Selection & Delivery" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-[#2E8AE0] text-3xl font-bold mb-2">
                {item.step}
              </div>
              <h3 className="font-semibold text-lg text-[#124576]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ CTA Section */}
      <section className="py-16 text-center px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-[#124576] mb-6">
          Need a Catchy Slogan That Defines Your Brand?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Let’s craft a memorable slogan that captures your brand’s essence and
          connects emotionally with your audience — short, simple, and
          unforgettable.
        </p>
        <Link
          href="/contact"
          className="bg-[#2E8AE0] hover:bg-[#124576] text-white px-8 py-3 rounded-full font-semibold transition-all"
        >
          Create My Slogan
        </Link>
      </section>

      {/* ✅ Back Link */}
      <div className="text-center py-8" data-aos="fade-up">
        <Link
          href="/services"
          className="text-[#2E8AE0] font-semibold hover:underline"
        >
          ← Back to Services
        </Link>
      </div>
    </div>
  );
}
