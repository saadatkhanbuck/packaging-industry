"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogDetail1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false, // animate only once
      easing: "ease-in-out", // smooth easing
    });
  }, []);

  return (
    <div className="container mx-auto mt-20 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Side - Blog Content */}
      <div className="md:col-span-2 space-y-6">
        {/* Blog Image & Content */}
        <div data-aos="fade-up">
          <Image
            src="/img/blog1.jpg"
            alt="Blog"
            width={1200}
            height={600}
            className="rounded-xl w-full h-auto"
          />
          <h1 className="text-3xl font-bold mt-4 text-gray-800" data-aos="fade-up" data-aos-delay="200">
            Creating A Successful Blog For Your eCommerce
          </h1>
          <p className="text-gray-600 mt-2" data-aos="fade-up" data-aos-delay="400">
            High-quality content is not just about grammar and structure — it’s
            about strategy, audience understanding, and value. In this article,
            we explore how to write content that truly connects with your target
            readers and drives engagement.
          </p>
        </div>

        {/* Inside Post */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800" data-aos="fade-right">
            Why Content Writing Matters
          </h2>
          <Image
            src="/img/blog5.jpg"
            alt="Blog Inside Post"
            width={1200}
            height={600}
            className="rounded-xl w-full h-auto"
            data-aos="zoom-in"
          />
          <h2 className="text-3xl font-bold text-gray-800" data-aos="fade-left">
            Writing That Converts: Strategies You Can Use Today
          </h2>
          <p className="text-gray-600" data-aos="fade-up">
            Content writing is essential for SEO, brand voice, and trust
            building. Whether you’re writing a blog post, product description,
            or landing page — words matter. Learn how to structure your message
            and create hooks that keep readers scrolling.
          </p>
          <hr data-aos="fade-up" />
        </div>

        {/* Post Comment Form */}
        <div className="mt-8 p-6 border rounded-xl" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">Post a Comment</h2>
          <p className="text-gray-600 mb-4">
            Your email address will not be published. Required fields are marked *
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                className="w-full p-3 border rounded-lg outline-none focus:border-blue-500"
                placeholder="Your Name*"
                required
              />
              <input
                type="email"
                className="w-full p-3 border rounded-lg outline-none focus:border-blue-500"
                placeholder="Your Email*"
                required
              />
            </div>

            <input
              type="text"
              className="w-full p-3 border rounded-lg outline-none focus:border-blue-500"
              placeholder="Your Website"
            />

            <textarea
              className="w-full p-3 border rounded-lg outline-none focus:border-blue-500 h-32 resize-none"
              placeholder="Your Comment*"
              required
            />

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition"
              >
                Post Comment
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Sidebar */}
      <aside className="space-y-6">
        {/* Search Bar */}
        <div className="p-3 border rounded-xl" data-aos="fade-left">
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="text-blue-600 font-bold mr-2">|</span>Search
          </h1>
          <div className="flex items-center border-2 border-gray-300 rounded-full px-3 py-2 mt-2">
            <CiSearch className="text-gray-500 text-xl mr-2" />
            <input
              type="text"
              className="w-full outline-none bg-transparent"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Categories */}
        <div className="p-4 border rounded-xl" data-aos="fade-left" data-aos-delay="200">
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">
            <span className="text-blue-600 font-bold mr-2">|</span>Categories
          </h3>
          <ul className="space-y-2">
            {["Content Writing", "SEO", "Social Media"].map((cat, i) => (
              <li
                key={i}
                className="text-gray-500 hover:text-blue-600 cursor-pointer"
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="p-4 border rounded-xl" data-aos="fade-left" data-aos-delay="400">
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">
            <span className="text-blue-600 font-bold mr-2">|</span>Recent Posts
          </h3>
          {[
            {
              title: "Creating A Successful Blog For Your eCommerce",
              date: "Aug 1, 2025",
            },
            {
              title: "Creating an Effective Social Media Marketing Campaign",
              date: "Aug 2, 2025",
            },
            {
              title: "How to Optimize Content for SEO : A Quick Guide",
              date: "Aug 3, 2025",
            },
          ].map((post, index) => (
            <div key={index} className="mb-2">
              <h4 className="text-lg text-gray-600 hover:text-blue-600 cursor-pointer font-medium">
                {post.title}
              </h4>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          ))}
        </div>

        {/* Question Box */}
        <div
          className="relative rounded-xl overflow-hidden h-60 text-white"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <Image
            src="/img/project3.jpg"
            alt="Have Any Question"
            fill
            className="object-cover w-full h-full absolute z-0"
          />
          <div className="absolute z-10 bg-black/60 bg-opacity-60 w-full h-full p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold">Have Any Question?</h2>
              <p className="text-sm">
                Reach out to our content specialists anytime.
              </p>
            </div>
            <div className="text-sm space-y-2">
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                123 Main St, Lahore
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" />
                info@packagingwriter.com
              </p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="p-4 border rounded-xl" data-aos="fade-left" data-aos-delay="400">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            <span className="text-blue-600 font-bold mr-2">|</span>Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Content",
              "Writing",
              "SEO",
              "Freelance",
              "Tips",
              "Tools",
              "Planning",
              "Marketing",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm cursor-pointer transition hover:bg-blue-500 hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BlogDetail1;
