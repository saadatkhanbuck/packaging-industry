// app/components/BlogSection.tsx
"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

const blogPosts = [
  {
    title: "Creating A Successful Blog For Your eCommerce",
    description:
      "Discover our journey building a scalable platform using modern tech.",
    image: "/img/blog1.jpg",
    tag: "Content Writing",
    move: "blogdetail1"
  },
  {
    title: "Creating an Effective Social Media Marketing Campaign",
    description: "Learn the key principles to design products that users love.",
    image: "/img/blog2.jpg",
    tag: "Social Media",
    move: "blogdetail2"
  },
  {
    title: "How to Optimize Content for SEO : A Quick Guide",
    description:
      "Explore new trends that are shaping the future of digital marketing.",
    image: "/img/blog3.jpg",
    tag: "SEO",
    move: "blogdetail3"
  },
  {
    title: "How To Create Retail Copywriting That Gets Results",
    description:
      "See how small details make a big difference in user experience.",
    image: "/img/blog4.jpg",
    tag: "Content Writing",
    move: "blogdetail4"
  }
];

const categories = [
  { label: "Content Writing", path: "/contentwriting" },
  { label: "Social Media", path: "/socialmedia" },
  { label: "SEO", path: "/seo" }
];

export default function BlogPost() {
  const [visiblePosts, setVisiblePosts] = useState(3);

  return (
    <section className="py-20 px-6 bg-[#f8f9fa] text-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Left Side - Blog Posts */}
        <div className="col-span-2">
          <div className="space-y-10">
            {blogPosts.slice(0, visiblePosts).map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md group"
              >
                <div
                  className="h-94 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
                <div className="p-6">
                  <Link
                    href={post.move}
                    className="text-lg font-bold text-[#2E8AE0] group-hover:underline"
                  >
                    {post.title}
                  </Link>
                  <p className="text-sm text-gray-600 mt-2">
                    {post.description}
                  </p>
                </div>
                <div className="px-6 pb-4">
                  <Link
                    href="#"
                    className="text-sm bg-gradient-to-r from-[#124576] to-[#2E8AE0] transition-all duration-300 hover:from-black hover:to-[#2e3033] text-white rounded-full px-3 py-1"
                  >
                    {post.tag}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visiblePosts < blogPosts.length && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setVisiblePosts(visiblePosts + 1)}
                className="px-6 py-2 bg-gradient-to-r from-[#124576] to-[#2E8AE0] transition-all duration-300 hover:from-black hover:to-[#2e3033] text-white rounded-full "
              >
                Load More
              </button>
            </div>
          )}
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Recent Posts */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-[#2E8AE0] mb-4">
              Recent Posts
            </h3>
            {blogPosts.slice(0, 3).map((post, i) => (
              <div key={i} className="mb-4 border-b pb-3">
                <Link
                  href={post.move}
                  className="text-sm font-medium text-gray-800 hover:underline"
                >
                  {post.title}
                </Link>
                <p className="text-xs text-gray-500">
                  {post.description.slice(0, 40)}...
                </p>
              </div>
            ))}
          </div>

          {/* Have a Question */}
          <div
            className="relative bg-cover bg-center rounded-xl text-white p-6 h-64 flex flex-col justify-end"
            style={{ backgroundImage: `url('/img/project3.jpg')` }}
          >
            <div className="absolute inset-0 bg-black/60 rounded-xl"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Have Any Question?</h3>
              <p className="text-sm text-white/80 mb-4">
                We are here to help you with all your inquiries.
              </p>
              <div className="text-sm flex flex-col gap-1">
                <span className="flex items-center gap-2">
                  <MapPin size={14} /> 123 Main St, Lahore
                </span>
                <span className="flex items-center gap-2">
                  <Mail size={14} /> info@packagingwriter.com
                </span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-[#2E8AE0] mb-4">
              Categories
            </h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat, i) => (
                <Link
                  key={i}
                  href={cat.path}
                  className="text-sm text-gray-700 hover:text-[#2E8AE0] hover:underline"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
