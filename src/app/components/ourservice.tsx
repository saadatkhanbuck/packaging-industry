"use client";

import React from "react";
import {
  FaLaptopCode,
  FaPenNib,
  FaShareAlt,
  FaBlog,
  FaTags,
  FaClipboardList
} from "react-icons/fa";
import {  BringToFront } from "lucide-react";

import Link from "next/link";
import { motion } from "framer-motion";

// Service item interface
interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}


// Services data array
const services: ServiceItem[] = [
  {
    icon: <FaLaptopCode size={35} />,
    title: "Website Content",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    icon: <FaPenNib size={35} />,
    title: "SEO Content",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    icon: <FaShareAlt size={35} />,
    title: "Social Media Post",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    icon: <FaBlog size={35} />,
    title: "Blog Content",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    icon: <FaTags size={35} />,
    title: "Slogans & Phrases",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    icon: <FaClipboardList size={35} />,
    title: "Product Description",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="py-14 px-4 md:px-20 bg-white overflow-x-hidden">
      <div className="flex flex-col items-center text-center mb-12">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <BringToFront className="text-[#2E8AE0] w-5 h-5" />
          <h3 className="text-xl font-semibold text-[#2E8AE0]">Our Services</h3>
          <div className="h-[2px] w-16 bg-[#2E8AE0] rounded-full"></div>
        </div>

        {/* Heading and Paragraph */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-2">
          What Service We Offer
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {services.map((service, idx) => {
          const isMiddleCard = idx === 1;

          return (
            <motion.div
              key={idx}
              whileHover="hover"
              className={`relative h-56 p-5 text-sm shadow-md border border-zinc-200 group overflow-hidden transition-all duration-300 ${
                isMiddleCard
                  ? "bg-gradient-to-r from-[#124576] to-[#2E8AE0] text-white"
                  : "bg-white text-zinc-700 hover:bg-gradient-to-r hover:from-[#124576] hover:to-[#2E8AE0] hover:text-white"
              }`}
              style={{ borderRadius: 0 }}
            >
              {/* Card content animates upward on hover */}
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  {/* Icon fades out on card hover */}
                  <motion.div
                    className="mb-2"
                    variants={{
                      hover: { opacity: 0, transition: { duration: 0.5 } },
                      initial: { opacity: 1 }
                    }}
                    initial="initial"
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="font-semibold text-base mb-1">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed mb-3 text-sm transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Read More Button */}
                {isMiddleCard ? (
                  <Link
                    href="#"
                    className="font-semibold flex items-center gap-2 text-sm transition-colors duration-300 text-white"
                  >
                    Read More{" "}
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      &rarr;
                    </motion.span>
                  </Link>
                ) : (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href="#"
                      className="font-semibold flex items-center gap-2 text-sm transition-colors duration-300 text-blue-600 group-hover:text-white"
                    >
                      Read More{" "}
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                      >
                        &rarr;
                      </motion.span>
                    </Link>
                  </div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
