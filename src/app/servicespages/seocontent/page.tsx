"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PenTool, BarChart3, Search, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SEOContentPage() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: false, offset: 50 });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* ✅ Hero Section (same style as About Page) */}
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
              alt="SEO Content Illustration"
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
              SEO Content Writing
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
                SEO Content
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#124576] to-[#2E8AE0] text-white py-20 px-6 md:px-16 text-center">
        <div data-aos="fade-up" className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <PenTool size={40} />
            <h1 className="text-4xl md:text-5xl font-bold">
              SEO Content Writing Services
            </h1>
          </div>
          <p className="text-lg text-gray-100 leading-relaxed">
            Drive traffic, build authority, and boost conversions with expertly
            optimized SEO content that ranks on Google and resonates with your
            audience.
          </p>
        </div>
      </section>


      {/* ✅ Main Content Starts Here */}
      {/* About Section */}
      <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto text-center">
        <p
          data-aos="fade-up"
          className="text-gray-600 text-lg leading-relaxed mb-10"
        >
          At <span className="text-[#2E8AE0] font-semibold">Traviazo</span>, we
          create SEO-driven content strategies that help businesses improve
          search rankings and attract quality traffic. Our writers combine
          creativity with keyword precision, ensuring that every article, blog
          post, and web page reflects your brand voice while enhancing
          discoverability.
        </p>

        <div
          className="grid md:grid-cols-3 gap-8 mt-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <Search
              size={35}
              className="text-[#2E8AE0] mx-auto mb-4"
              strokeWidth={1.6}
            />
            <h3 className="font-semibold text-xl mb-3 text-[#124576]">
              Keyword Optimization
            </h3>
            <p className="text-gray-600 text-sm">
              We use advanced keyword research tools to target high-intent
              phrases that boost visibility and clicks.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <BarChart3
              size={35}
              className="text-[#2E8AE0] mx-auto mb-4"
              strokeWidth={1.6}
            />
            <h3 className="font-semibold text-xl mb-3 text-[#124576]">
              Content That Converts
            </h3>
            <p className="text-gray-600 text-sm">
              Our copywriters craft persuasive, user-focused content that builds
              trust and drives conversions.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <Globe
              size={35}
              className="text-[#2E8AE0] mx-auto mb-4"
              strokeWidth={1.6}
            />
            <h3 className="font-semibold text-xl mb-3 text-[#124576]">
              Global SEO Strategy
            </h3>
            <p className="text-gray-600 text-sm">
              Reach your audience worldwide with multilingual SEO content
              optimized for international rankings.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-100 py-20 px-6 md:px-20 text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold text-[#124576] mb-10"
        >
          Our SEO Content Process
        </h2>

        <div
          className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {[ 
            { step: "01", title: "Keyword Research" },
            { step: "02", title: "Outline & Strategy" },
            { step: "03", title: "Content Writing" },
            { step: "04", title: "Optimization & Review" },
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

      {/* CTA Section */}
      <section className="py-16 text-center px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-[#124576] mb-6">
          Ready to Rank Higher on Google?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Let our SEO content experts craft keyword-rich, audience-focused copy
          that drives measurable growth.
        </p>
        <Link
          href="/contact"
          className="bg-[#2E8AE0] hover:bg-[#124576] text-white px-8 py-3 rounded-full font-semibold transition-all"
        >
          Get Started Today
        </Link>
      </section>

      {/* Back Link */}
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
