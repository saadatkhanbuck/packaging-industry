'use client';

import React from 'react';
import Image from 'next/image';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Dan Smith',
    role: 'Manager',
    image: '/img/sir Akhtar2.jpg',
    sideText: 'Future',
    gradient: false,
  },
  {
    name: 'Brandon Adams',
    role: 'HR Neuro',
    image: '/img/sir Akhtar2.jpg',
    sideText: 'Digital',
    gradient: true,
  },
  {
    name: 'Alan Begham',
    role: 'CEO Neuro',
    image: '/img/sir Akhtar2.jpg',
    sideText: 'Learning',
    gradient: false,
  },
];

const Team = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-16">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-2xl p-6 text-center shadow-xl group ${
              member.gradient
                ? 'bg-gradient-to-r from-[#124576] to-[#2E8AE0] text-white'
                : 'bg-white text-black border'
            }`}
          >
            {/* Side Vertical Text */}
            <span
              className={`absolute text-6xl font-bold top-1/2 -translate-y-1/2 rotate-90 right-[-4rem] opacity-10 ${
                member.gradient ? 'text-white' : 'text-black'
              }`}
            >
              {member.sideText}
            </span>

            {/* Social Icons (only visible on hover) */}
            <div className="absolute left-6 top-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
              {[FaLinkedinIn, FaTwitter, FaGithub].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className={`p-2 rounded-full text-lg ${
                    member.gradient
                      ? 'bg-white text-[#124576] hover:bg-gray-200'
                      : 'bg-black text-white hover:bg-gray-800'
                  } transition-all duration-300`}
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Image */}
            <div className="flex justify-center mb-6 relative z-10">
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full w-36 h-36 object-cover border-4 border-white shadow-md"
              />
            </div>

            {/* Name + Role */}
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="mt-1 text-sm">{member.role}</p>

            {/* Circle Button */}
            <div
              className={`mt-6 inline-flex items-center justify-center w-10 h-10 rounded-full ${
                member.gradient
                  ? 'bg-white text-[#124576]'
                  : 'bg-black text-white'
              }`}
            >
              <span className="text-xl">&gt;</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
