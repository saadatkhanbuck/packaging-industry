// components/OurClientsReview.tsx

"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clients = [
  {
    name: "Dave Beech",
    role: "Manager",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    image: "/img/client.png"
  },
  {
    name: "Sara Khan",
    role: "Blogger",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    image: "/img/client2.jpg"
  },
  {
    name: "Xavier Mcfarla",
    role: "Seo Brand",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    image: "/img/client3.jpg"
  }
];

export default function OurClientsReview() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section
      className="relative w-full bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/img/clientbg5.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Our Clients Reviews
        </h2>

        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center relative h-full flex flex-col justify-between hover:shadow-2xl transition duration-300">
                <div className="flex justify-center mb-4">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="text-gray-600 italic mb-4">"{client.review}"</p>
                <h3 className="font-semibold text-lg text-gray-800">
                  {client.name}
                </h3>
                <p className="text-sm text-gray-500">{client.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
