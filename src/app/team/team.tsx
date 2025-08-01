'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaGithub, FaArrowRight } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Dan Smith',
    role: 'Manager',
    image: '/img/sir Akhtar2.jpg',
    sideText: 'Future',
  },
  {
    name: 'Brandon Adams',
    role: 'HR Neuro',
    image: '/img/sir Akhtar2.jpg',
    sideText: 'Digital',
  },
  {
    name: 'Alan Begham',
    role: 'CEO Neuro',
    image: '/img/sir Akhtar2.jpg',
    sideText: 'Learning',
  },
  {
    name: 'Sophie Turner',
    role: 'Developer',
    image: '/img/sir Akhtar2.jpg',
    sideText: 'Coding',
  },
  {
    name: 'Mark Wilson',
    role: 'Designer',
    image: '/img/sir Akhtar2.jpg',
    sideText: 'Visuals',
  },
  {
    name: 'Emma Johnson',
    role: 'Marketer',
    image: '/img/sir Akhtar2.jpg',
    sideText: 'Strategy',
  },
];

const Team = () => {
  return (
    <section className="bg-gradient-to-br from-[#f0f8ff] to-[#e6f2ff] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#124576] to-[#2E8AE0]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </motion.h2>
          <motion.div
            className="h-1 w-24 mx-auto bg-gradient-to-r from-[#124576] to-[#2E8AE0] mt-4 mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          ></motion.div>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A team of passionate professionals dedicated to innovation and excellence.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card Container with Hover Lift */}
              <div className="relative rounded-2xl overflow-hidden border bg-white shadow-xl p-4 transform transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.03] group-hover:-translate-y-1">
                
                {/* Hover Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#124576] to-[#2E8AE0] opacity-0 group-hover:opacity-100 transition-all duration-700 z-0"></div>

                {/* Side Vertical Text */}
                <span className="absolute text-6xl font-bold top-1/2 -translate-y-1/2 rotate-90 right-[-4.5rem] opacity-10 text-black select-none z-10">
                  {member.sideText}
                </span>

                {/* Social Icons */}
                <div className="absolute left-4 top-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  {[FaLinkedinIn, FaTwitter, FaGithub].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="p-2 rounded-full bg-white text-[#124576] group-hover:bg-gradient-to-r group-hover:from-[#124576] group-hover:to-[#2E8AE0] group-hover:text-white transition-all duration-300 shadow-md"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>

                {/* Image Box */}
                <div className="relative mb-4 w-full h-52 overflow-hidden rounded-xl shadow-md z-10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name and Role */}
                <div className="text-center z-10 relative">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition duration-300">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 group-hover:text-gray-200 transition duration-300">
                    {member.role}
                  </p>
                </div>

                {/* Arrow Button */}
                <motion.div
                  className="mt-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white mx-auto z-10 relative group-hover:bg-gradient-to-r group-hover:from-[#124576] group-hover:to-[#2E8AE0] transition duration-300"
                  whileHover={{
                    scale: 1.1,
                    rotate: 45,
                    transition: { duration: 0.3 },
                  }}
                >
                  <FaArrowRight className="text-md" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Background Blobs */}
        <div className="absolute top-20 left-0 w-24 h-24 bg-[#2E8AE0] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-32 h-32 bg-[#124576] rounded-full opacity-10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Team;
