"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout, FileText, Globe, BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WebsiteContentPage() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: false, offset: 50 });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* ✅ Hero Section (same as About Page) */}
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
              alt="Website Content Illustration"
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
              Website Content Writing
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
                Website Content
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-gradient-to-r from-[#124576] to-[#2E8AE0] text-white py-20 px-6 md:px-16 text-center">
        <div data-aos="fade-up" className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Layout size={40} />
            <h1 className="text-4xl md:text-5xl font-bold">
              Website Content Writing Services
            </h1>
          </div>
          <p className="text-lg text-gray-100 leading-relaxed">
            Create a powerful online presence with website content that speaks
            directly to your audience, reflects your brand voice, and drives
            conversions with clarity and confidence.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto text-center">
        <p
          data-aos="fade-up"
          className="text-gray-600 text-lg leading-relaxed mb-10"
        >
          Your website is the first impression of your business. At{" "}
          <span className="text-[#2E8AE0] font-semibold">Traviazo</span>, we
          craft compelling, SEO-friendly web copy that captures your brand
          essence while guiding visitors toward action. Each word is
          strategically placed to inform, inspire, and convert.
        </p>

        <div
          className="grid md:grid-cols-3 gap-8 mt-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <FileText
              size={35}
              className="text-[#2E8AE0] mx-auto mb-4"
              strokeWidth={1.6}
            />
            <h3 className="font-semibold text-xl mb-3 text-[#124576]">
              Engaging Copy
            </h3>
            <p className="text-gray-600 text-sm">
              Clear, creative, and audience-focused content that keeps visitors
              reading and inspires action.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <BarChart3
              size={35}
              className="text-[#2E8AE0] mx-auto mb-4"
              strokeWidth={1.6}
            />
            <h3 className="font-semibold text-xl mb-3 text-[#124576]">
              SEO Optimization
            </h3>
            <p className="text-gray-600 text-sm">
              Every page is written with researched keywords and structured for
              search engine visibility and user flow.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <Globe
              size={35}
              className="text-[#2E8AE0] mx-auto mb-4"
              strokeWidth={1.6}
            />
            <h3 className="font-semibold text-xl mb-3 text-[#124576]">
              Brand Alignment
            </h3>
            <p className="text-gray-600 text-sm">
              Consistent tone and messaging that perfectly match your brand’s
              voice across every web page.
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
          Our Website Content Process
        </h2>

        <div
          className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {[
            { step: "01", title: "Understanding Your Brand" },
            { step: "02", title: "Keyword & Competitor Research" },
            { step: "03", title: "Writing & Review" },
            { step: "04", title: "Final Optimization & Delivery" },
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
          Want Your Website to Stand Out?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Let our expert writers build engaging, SEO-friendly website content
          that connects with your audience and strengthens your brand identity.
        </p>
        <Link
          href="/contact"
          className="bg-[#2E8AE0] hover:bg-[#124576] text-white px-8 py-3 rounded-full font-semibold transition-all"
        >
          Let’s Get Started
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
