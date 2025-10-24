"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShoppingBag, PenTool, Target, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProductDescriptionPage() {
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
              alt="Product Description Illustration"
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
              Product Description Writing
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
                Product Description
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Intro Section */}
      <section className="bg-gradient-to-r from-[#124576] to-[#2E8AE0] text-white py-20 px-6 md:px-16 text-center">
        <div data-aos="fade-up" className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <ShoppingBag size={40} />
            <h1 className="text-4xl md:text-5xl font-bold">
              Product Description Writing Services
            </h1>
          </div>
          <p className="text-lg text-gray-100 leading-relaxed">
            Boost your sales with compelling, SEO-optimized product descriptions
            that highlight features, benefits, and emotions — all while converting
            browsers into buyers.
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
          understand that every product tells a story. Our professional writers
          craft descriptions that do more than list features — they sell
          emotions, value, and trust. We turn simple product info into persuasive
          narratives that drive clicks and conversions.
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
              Attention-Grabbing Copy
            </h3>
            <p className="text-gray-600 text-sm">
              We craft product descriptions that instantly attract readers with
              engaging and benefit-driven language.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <Target
              size={35}
              className="text-[#2E8AE0] mx-auto mb-4"
              strokeWidth={1.6}
            />
            <h3 className="font-semibold text-xl mb-3 text-[#124576]">
              SEO & Conversion Optimized
            </h3>
            <p className="text-gray-600 text-sm">
              Every description is optimized with relevant keywords and structured
              to boost your online store’s visibility and sales.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <PenTool
              size={35}
              className="text-[#2E8AE0] mx-auto mb-4"
              strokeWidth={1.6}
            />
            <h3 className="font-semibold text-xl mb-3 text-[#124576]">
              Tailored for Every Platform
            </h3>
            <p className="text-gray-600 text-sm">
              Whether you sell on Amazon, Shopify, or your website, we tailor tone,
              format, and keywords to each platform’s audience.
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
          Our Product Description Process
        </h2>

        <div
          className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {[
            { step: "01", title: "Product Analysis" },
            { step: "02", title: "Keyword & Audience Research" },
            { step: "03", title: "Creative Copywriting" },
            { step: "04", title: "Review & Optimization" },
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
          Turn Browsers into Buyers with Powerful Descriptions
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Let us craft product descriptions that speak to your audience’s needs
          and desires, highlight your product’s value, and boost your conversions.
        </p>
        <Link
          href="/contact"
          className="bg-[#2E8AE0] hover:bg-[#124576] text-white px-8 py-3 rounded-full font-semibold transition-all"
        >
          Get My Product Descriptions
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
