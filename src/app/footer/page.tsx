'use client';

import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  SendHorizontal,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const socialIcons = [
    { icon: <Facebook size={18} />, link: "https://facebook.com" },
    { icon: <Instagram size={18} />, link: "https://instagram.com" },
    { icon: <Linkedin size={18} />, link: "https://linkedin.com" },
    { icon: <Twitter size={18} />, link: "https://twitter.com" }
  ];
  return (
    <footer className="bg-[#f8f6f3] text-zinc-700 px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <Image
            src="/img/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="mb-4"
          />
          <p className="text-sm mb-6">
            We provide creative solutions to help you grow your business. Let’s work together to create something amazing.
          </p>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#2E8AE0]" /> New York, USA
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#2E8AE0]" /> +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#2E8AE0]" /> contact@yourbrand.com
            </li>
          </ul>
        </div>

        {/* Middle Links Section */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-1x font-bold mb-4"> Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((link, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="flex items-center font-semibold gap-1.5 group transition-transform duration-300"
                  >
                    <span className="text-transparent group-hover:text-[#2E8AE0] transition duration-200">
                      /
                    </span>
                    <span className="group-hover:translate-x-1 group-hover:px-1 group-hover:bg-clip-text group-hover:text-[#2E8AE0] transition-all duration-500">
                      {link}
                    </span>
                    <span className="text-transparent group-hover:text-[#2E8AE0] transition duration-200">
                      /
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-1x font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {['Privacy', 'Terms', 'Help', 'FAQs'].map((link, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="flex items-center font-semibold gap-1.5 group transition-transform duration-300"
                  >
                    <span className="text-transparent group-hover:text-[#2E8AE0] transition duration-200">
                      /
                    </span>
                    <span className="group-hover:translate-x-1 group-hover:px-1 group-hover:bg-clip-text group-hover:text-[#2E8AE0] transition-all duration-500">
                      {link}
                    </span>
                    <span className="text-transparent group-hover:text-[#2E8AE0] transition duration-200">
                      /
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter & Social Icons */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Join Our Newsletter</h3>
          <div className="flex items-center gap-2 mb-6">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-full border border-zinc-300 transition duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:scale-95 w-full"
            />
            <button className="p-2 rounded-full bg-gradient-to-r from-[#124576] to-[#2E8AE0] text-white hover:opacity-90 transition">
              <SendHorizontal className="w-4 h-4" />
            </button>
          </div>

         <div className="flex gap-3">
  {socialIcons.map((item, i) => (
    <Link
      key={i}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-gradient-to-r from-[#124576] to-[#2E8AE0] rounded-full text-white border border-transparent hover:border-white transition-all duration-300"
    >
      {item.icon}
    </Link>
  ))}
</div>

        </div>
      </div>
    </footer>
  );
}