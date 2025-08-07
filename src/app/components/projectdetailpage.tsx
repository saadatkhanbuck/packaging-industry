"use client";

import { User, Folder, Calendar, MapPin, Bubbles } from "lucide-react";
import Image from "next/image";

export default function ProjectDetailsPage() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Layout: Image + Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Image */}
          <div>
            <Image
              src="/img/project1.jpg"
              alt="Social Media Project"
              width={600}
              height={300} // height reduced
              className="rounded-lg object-cover w-full h-[450px]"
            />
          </div>

          {/* Right Side: Heading + Details */}
          <div className="space-y-6">
            {/* Moved Heading here */}
            <div className="flex items-center gap-4 mb-4">
              <Bubbles className="text-[#2E8AE0] w-6 h-6" />
              <h2 className="text-2xl font-bold text-black">Social Media Content</h2>
              <div className="w-24 h-[2px] bg-[#2E8AE0] rounded-full"></div>
            </div>

            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-2 text-[#2E8AE0]">
                  <User size={16} /> <span className="text-black">Client</span>
                </div>
                <span className="text-gray-700">Xarris Company</span>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-2 text-[#2E8AE0]">
                  <Folder size={16} /> <span className="text-black">Category</span>
                </div>
                <span className="text-gray-700">SEO</span>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-2 text-[#2E8AE0]">
                  <Calendar size={16} /> <span className="text-black">Date</span>
                </div>
                <span className="text-gray-700">16 March, 2021</span>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-2 text-[#2E8AE0]">
                  <MapPin size={16} /> <span className="text-black">Location</span>
                </div>
                <span className="text-gray-700">Seminyak, Bali</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Overview Projects</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <p className="text-gray-600">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Right Bullets */}
          <div>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#2E8AE0] mt-1">✔</span>
                Duis aute irure dolor in reprehenderit in voluptate
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2E8AE0] mt-1">✔</span>
                Excepteur sint occaecat cupidatat non proident
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2E8AE0] mt-1">✔</span>
                Eiusmod tempor incididunt ut labore et dolore magna aliqua
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2E8AE0] mt-1">✔</span>
                Suspendisse tempus felis a libero mollis ultrices
              </li>
            </ul>
          </div>
           <h3 className="text-xl font-semibold mb-4">Our Working Process</h3>
        </div>
      </div>
    </section>
  );
}
