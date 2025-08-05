"use client";

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const teamMembers = [
  {
    name: "Sajid Ali",
    title: "Full Stack Developer",
    image: "/img/sajid.jpg",
  },
  {
    name: "Sara Khan",
    title: "UI/UX Designer",
    image: "/team/member2.jpg",
  },
  {
    name: "Ali Raza",
    title: "Mobile App Developer",
    image: "/team/member3.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-94 object-cover transition-transform duration-500 group-hover:translate-x-2"
                />
              </div>

              {/* Info + Widget */}
              <div className="p-4 bg-white text-center flex items-center justify-between relative">
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.title}</p>
                </div>

                {/* Widget Button */}
                <div className="relative group/widget">
                  <div className="bg-gray-300 rounded-full p-2 cursor-pointer hover:bg-gray-400 transition">
                    <span className="text-sm font-bold text-gray-700">+</span>
                  </div>

                  {/* Social Icons Popup */}
                  <div className="absolute bottom-12 right-0 opacity-0 group-hover/widget:opacity-100 transition-all duration-500 transform group-hover/widget:-translate-y-2 pointer-events-none group-hover/widget:pointer-events-auto z-20">
                    <div className="bg-white p-3 rounded-xl shadow-lg flex flex-col gap-3">
                      <a
                        href="#"
                        className="hover:text-blue-600 transition"
                        title="Facebook"
                      >
                        <Facebook size={18} />
                      </a>
                      <a
                        href="#"
                        className="hover:text-pink-500 transition"
                        title="Instagram"
                      >
                        <Instagram size={18} />
                      </a>
                      <a
                        href="#"
                        className="hover:text-blue-800 transition"
                        title="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href="#"
                        className="hover:text-red-600 transition"
                        title="YouTube"
                      >
                        <Youtube size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
