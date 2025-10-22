"use client";

import { ArrowRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import ServicesPage from "../components/ourservice";
import { MarqueeDemo } from "../components/marqueedemo";
import OurProjects from "../components/ourprojects";
import ContentCreation from "../components/contentcreation";
import BlogSection from "../components/blogsection";
import WhoWeAreSection from "../components/whoweare";
import ChooseUs from "../components/chooseus";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Hero image URL defined at the top
const heroImage = "/img/hero.jpg";
const backgroundImage = "/img/bg.webp";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }} // ✅ using top variable
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Side Image */}
          {/* <div
            className="w-full lg:w-1/2 flex justify-center"
            data-aos="fade-right"
          >
            <Image
              src={heroImage} // ✅ using the variable defined at top
              alt="Product Mockup"
              width={640}
              height={640}
              className="rounded-3xl shadow-xl mt-6 sm:mt-10 mx-auto max-w-full sm:max-w-md lg:max-w-lg"
              priority
            />
          </div> */}

          {/* Right Side Content */}
          <div
            className="w-full lg:w-1/2 text-black text-center lg:text-left"
            data-aos="fade-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Quality <span className="text-[#2E8AE0]"> Content</span> For Your
              Business In A Few <span className="text-[#2E8AE0]">Clicks</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 max-w-xl mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {/* Buttons */}
            <div
              className="flex justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <button className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#124576] to-[#2E8AE0] hover:opacity-90 transition-all duration-300 shadow-md">
                <ShoppingCart className="w-5 h-5" />
                Order Now
              </button>
              <button className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full border border-black text-black font-semibold hover:bg-gradient-to-r from-black to-[#2e3033] hover:text-white transition-all duration-300 shadow-md">
                <ArrowRight className="w-5 h-5" />
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Below */}
      <MarqueeDemo />
      <WhoWeAreSection />
      <ServicesPage />
      <OurProjects />
      <ContentCreation />
      <BlogSection />
      <ChooseUs />
    </>
  );
}
