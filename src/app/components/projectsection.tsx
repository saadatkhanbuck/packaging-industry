"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Eye, Blocks } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    header: "SEO",
    title: "Social Media Content",
    description: "We write scroll-stopping content that resonates and converts.",
    image: "/img/project1.jpg",
  },
  {
    header: "Blog",
    title: "Travel Blog Content",
    description: "Inspire and engage readers with compelling travel stories.",
    image: "/img/project2.jpg",
  },
  {
    header: "Slogans",
    title: "Slogan for Startup",
    description: "Catchy and creative slogans that spark brand recognition.",
    image: "/img/project3.jpg",
  },
  {
    header: "Product",
    title: "E-commerce Descriptions",
    description: "Persuasive product descriptions that drive sales.",
    image: "/img/project4.jpg",
  },
  {
    header: "Marketing",
    title: "Email Campaigns",
    description: "Engaging emails with strong CTAs to boost conversions.",
    image: "/img/project5.jpg",
  },
  {
    header: "Copywriting",
    title: "Landing Page Content",
    description: "High-converting copy for your product or service landing pages.",
    image: "/img/project6.jpg",
  },
];

export default function ProjectSection() {
  useEffect(() => {
    AOS.init({
      duration: 800, // smooth animation speed
      easing: "ease-in-out",
      once: false, // animate only once
      offset: 50, // trigger slightly before element enters view
    });
  }, []);

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Title */}
        <div
          className="flex items-center justify-center gap-4 mb-4"
          data-aos="fade-down"
        >
          <Blocks className="text-[#2E8AE0] w-5 h-5" />
          <h3 className="text-xl font-semibold text-[#2E8AE0]">
            Our Projects
          </h3>
          <div className="h-[2px] w-16 bg-[#2E8AE0] rounded-full"></div>
        </div>

        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-[#000000] mb-2"
          data-aos="fade-up"
        >
          Content Writing Projects
        </h2>

        <p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Discover how we’ve helped clients create impact through meaningful
          content and creative strategy.
        </p>

        {/* Projects Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="relative group h-72 rounded-xl overflow-hidden shadow-md cursor-pointer bg-white"
              data-aos="zoom-in"
              data-aos-delay={i * 100} // stagger animation
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 bg-gradient-to-t from-[#124576] via-[#2E8AE0] to-transparent" />

              {/* Text */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h6 className="text-sm font-medium flex items-center gap-2 mb-1">
                  <Eye size={16} className="text-white" />
                  {project.header}
                </h6>
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
