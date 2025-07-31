'use client';

import React, { useEffect } from 'react';
import {
  FaLaptopCode,
  FaPenNib,
  FaShareAlt,
  FaBlog,
  FaTags,
  FaClipboardList,
} from 'react-icons/fa';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: <FaLaptopCode size={35} className="text-blue-500" />,
    title: 'Website Content',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    icon: <FaPenNib size={35} className="text-white" />,
    title: 'SEO Content',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    icon: <FaShareAlt size={35} className="text-blue-500" />,
    title: 'Social Media Post',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    icon: <FaBlog size={35} className="text-blue-500" />,
    title: 'Blog Content',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    icon: <FaTags size={35} className="text-blue-500" />,
    title: 'Slogans & Phrases',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    icon: <FaClipboardList size={35} className="text-blue-500" />,
    title: 'Product Description',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
];

const ServicesPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-14 px-4 md:px-20 bg-white overflow-x-hidden">
      <div
        data-aos="fade-right"
        className="mb-8"
      >
        <p
          data-aos="fade-right"
          data-aos-delay="100"
          className="text-blue-500 font-semibold text-xs mb-1"
        >
          Our Services
        </p>

        <div
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h2 className="text-zinc-700 text-lg font-bold mb-2">
            What Service We Offer
          </h2>
          <p className="text-zinc-700 text-xs max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <Link
            href="#"
            className="inline-block mt-3 bg-blue-500 text-white hover:bg-blue-800 px-4 py-2 text-xs font-medium transition-colors duration-300"
          >
            All Services
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {services.map((service, idx) => {
          const isMiddleCard = idx === 1;

          return (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={`${idx * 150}`}
              className={`relative h-52 p-5 text-sm shadow-md border border-zinc-200 transition-all duration-300 group bg-opacity-100 overflow-hidden ${
                isMiddleCard
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-zinc-700 hover:bg-blue-500 hover:text-white'
              }`}
              style={{ borderRadius: 0 }}
            >
              <div className="w-full h-full">
                <div className="mb-2">{service.icon}</div>

                <h3 className="font-semibold text-base mb-1">{service.title}</h3>
                <p className="leading-relaxed mb-2 text-sm transition-colors duration-300">
                  {service.description}
                </p>

                {isMiddleCard ? (
                  <div className="inline-flex items-center gap-2">
                    <Link
                      href="#"
                      className="font-semibold flex items-center gap-2 text-sm transition-colors duration-300 text-white hover:text-white"
                    >
                      Read More <span>&rarr;</span>
                    </Link>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href="#"
                      className="font-semibold flex items-center gap-2 text-sm transition-colors duration-300 text-blue-600 group-hover:text-white"
                    >
                      Read More <span>&rarr;</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
