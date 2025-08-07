"use client";

import { Instagram, Linkedin, Facebook, Youtube, Users } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Sajid Ali",
    position: "Content Writer",
    image: "/img/sajid.jpg"
  },
  {
    name: "M. Shafiq",
    position: "Content Writer",
    image: "/img/team.jpg"
  },
  {
    name: "Basit Ali",
    position: "Content Writer",
    image: "/img/team2.jpg"
  }
];

export default function TeamSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section className="py-24 px-6 bg-transparent text-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Center Heading */}
        <div className="flex items-center justify-center mb-4 gap-4" data-aos="fade-up">
          <Users className="text-[#2E8AE0] w-5 h-5" />
          <h2 className="text-xl font-bold text-[#2E8AE0]">Our Team</h2>
          <div className="h-[2px] w-24 bg-[#2E8AE0] rounded-full"></div>
        </div>

        {/* Centered Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-black mb-3"
          data-aos="fade-up"
        >
          Meet With Professional
        </h2>

        <p
          className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Meet the passionate individuals who are the backbone of our company.
        </p>

        {/* Team Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative w-[300px] h-[420px] overflow-hidden rounded-xl group shadow-2xl"
              data-aos="zoom-in-up"
              data-aos-delay={200 + index * 100}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-end">
                {/* Social Icons just above name */}
                <div className="flex justify-center gap-3 mb-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                    <span
                      key={i}
                      className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-black to-[#2E8AE0] hover:from-black hover:to-[#2e3033] transform hover:-translate-y-1 transition-all duration-300 rounded-full"
                    >
                      <Icon size={16} className="text-white" />
                    </span>
                  ))}
                </div>

                {/* Gradient Content Box */}
                <div className="px-5 py-2 bg-gradient-to-t from-[#124576]/80 via-[#2E8AE0]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-300">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
