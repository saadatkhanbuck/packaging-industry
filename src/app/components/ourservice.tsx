'use client';
import React from 'react';
import { FaLaptopCode, FaPenNib, FaShareAlt, FaBlog, FaTags, FaClipboardList } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: <FaLaptopCode size={35} className="text-blue-500" />, // smaller icon size
    title: 'Website Content',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    icon: <FaPenNib size={35} className="text-white" />,
    title: 'SEO Content',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    icon: <FaShareAlt size={35} className="text-blue-500" />,
    title: 'Social Media Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    icon: <FaBlog size={35} className="text-blue-500" />,
    title: 'Blog Content',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    icon: <FaTags size={35} className="text-blue-500" />,
    title: 'Slogans & Phrases',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    icon: <FaClipboardList size={35} className="text-blue-500" />,
    title: 'Product Description',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="py-14 px-4 md:px-20 bg-white overflow-x-hidden">
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-8"
      >
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-blue-500 font-semibold text-[10px] mb-1"
        >
          Our Services
        </motion.p>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-zinc-700 text-base font-bold mb-2">What Service We Offer</h2>
          <p className="text-zinc-700 text-[10px] max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <Link
            href="#"
            className="inline-block mt-3 bg-blue-500 text-white hover:bg-blue-800 px-4 py-2 text-[10px] font-medium transition-colors duration-300"
          >
            All Services
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10"
      >
        {services.map((service, idx) => {
          const isMiddleCard = idx === 1;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className={`h-50 p-4 text-[10px] shadow-md transition-all duration-300 group bg-opacity-100 ${
                isMiddleCard ? 'bg-blue-500 text-white' : 'bg-white text-zinc-700 hover:bg-blue-500 hover:text-white'
              }`}
            >
              <motion.div
                initial={{ y: 0, opacity: 1 }}
                whileHover={isMiddleCard ? {} : { y: -10, opacity: 0 }}
                animate={isMiddleCard ? {} : { y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="mb-2"
              >
                {service.icon}
              </motion.div>
              <h3 className="font-semibold text-[10px] mb-1">{service.title}</h3>
              <p className="leading-relaxed mb-2 text-[10px] transition-colors duration-300">
                {service.description}
              </p>
              <motion.div
                whileTap={{ x: 5 }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="inline-flex items-center gap-2"
              >
                <Link
                  href="#"
                  className={`font-semibold flex items-center gap-2 text-[10px] transition-colors duration-300 group ${
                    isMiddleCard ? 'text-white hover:text-white' : 'text-blue-600 group-hover:text-white'
                  }`}
                >
                  Read More <motion.span animate={{ x: [0, 5] }} transition={{ duration: 0.4 }}>&rarr;</motion.span>
                </Link>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ServicesPage;
