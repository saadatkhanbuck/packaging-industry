"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Megaphone, PenTool, Share2, BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SocialMediaContentPage() {
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
              alt="Social Media Content Illustration"
              width={880}
              height={880}
              className="object-contain rounded-2xl"
            />
          </div>

          {/* Right Text */}
          <div
            className="w-full md:w-1/2 flex flex-col items-start text-left space-y-6 pl-4"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Social Media Content Writing
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
                Social Media Content
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-gradient-to-r from-[#124576] to-[#2E8AE0] text-white py-20 px-6 md:px-16 text-center">
        <div data-aos="fade-up" className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Megaphone size={40} />
            <h1 className="text-4xl md:text-5xl font-bold">
              Social Media Content Services
            </h1>
          </div>
          <p className="text-lg text-gray-100 leading-relaxed">
            Engage, inspire, and grow your audience with high-quality social
            media content designed to boost your brand presence across all
            platforms.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto text-center">
        <p
          data-aos="fade-up"
          className="text-gray-600 text-lg leading-relaxed mb-10"
        >
          At <span className="text-[#2E8AE0] font-semibold">Traviazo</span>, we
          create scroll-stopping social media posts that blend creativity with
          marketing strategy. From captions to carousels, every piece is crafted
          to spark engagement, build trust, and increase conversions — whether
          you’re on Instagram, Facebook, LinkedIn, or X (Twitter).
        </p>

        <div
          className="grid md:grid-cols-3 gap-8 mt-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <Share2
              size={35}
              className="text-[#2E8AE0] mx-auto mb-4"
              strokeWidth={1.6}
            />
            <h3 className="font-semibold text-xl mb-3 text-[#124576]">
              Platform-Specific Content
            </h3>
            <p className="text-gray-600 text-sm">
              We tailor posts for each platform to maximize engagement and match
              the tone your audience loves.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <PenTool
              size={35}
              className="text-[#2E8AE0] mx-auto mb-4"
              strokeWidth={1.6}
            />
            <h3 className="font-semibold text-xl mb-3 text-[#124576]">
              Creative Captions & Hashtags
            </h3>
            <p className="text-gray-600 text-sm">
              Catchy captions, keyword-rich hashtags, and storytelling that
              boost visibility and engagement.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <BarChart3
              size={35}
              className="text-[#2E8AE0] mx-auto mb-4"
              strokeWidth={1.6}
            />
            <h3 className="font-semibold text-xl mb-3 text-[#124576]">
              Results-Driven Strategy
            </h3>
            <p className="text-gray-600 text-sm">
              Every post is backed by insights and analytics to improve reach,
              drive traffic, and grow your following.
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
          Our Social Media Content Process
        </h2>

        <div
          className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {[
            { step: "01", title: "Brand Voice & Audience Analysis" },
            { step: "02", title: "Content Planning & Strategy" },
            { step: "03", title: "Post Creation & Copywriting" },
            { step: "04", title: "Review, Optimize & Publish" },
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
          Let’s Turn Your Social Media Into a Growth Machine
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          From daily posts to full social media campaigns — we’ll help your
          brand connect, engage, and grow across every platform.
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
