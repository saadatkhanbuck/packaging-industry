"use client";

import {
  ShieldCheck,
  Handshake,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-20">
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#2E8AE0]">Get in Touch</h2>
          <p className="text-gray-600">
            Wed love to hear from you! Reach out with any questions, feedback,
            or just to say hello.
          </p>

          {/* Features */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Clock className="text-[#2E8AE0]" size={20} />
              <span className="text-gray-700">Fast & Efficient Support</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#2E8AE0]" size={20} />
              <span className="text-gray-700">Trust & Security</span>
            </div>
            <div className="flex items-center gap-3">
              <Handshake className="text-[#2E8AE0]" size={20} />
              <span className="text-gray-700">Customer Satisfaction</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="pt-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Follow us:
            </h4>
            <div className="flex items-center gap-4">
              <Facebook className="text-[#2E8AE0] hover:text-blue-600 cursor-pointer" />
              <Instagram className="text-[#2E8AE0] hover:text-pink-500 cursor-pointer" />
              <Twitter className="text-[#2E8AE0] hover:text-sky-500 cursor-pointer" />
              <Linkedin className="text-[#2E8AE0] hover:text-blue-800 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-md">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#2E8AE0]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#2E8AE0]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#2E8AE0]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message here..."
                className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#2E8AE0]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#2E8AE0] text-white px-6 py-3 rounded-md hover:bg-[#1c6dc3] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-20 max-w-7xl mx-auto overflow-hidden rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509284!2d144.95373631550455!3d-37.81627927975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f0ec7b3d%3A0xf5777362f38f3b6a!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1622626825305!5m2!1sen!2sau"
          width="100%"
          height="450"
          allowFullScreen={true}
          loading="lazy"
          className="w-full h-[450px] border-none"
        ></iframe>
      </div>
    </div>
  );
}
