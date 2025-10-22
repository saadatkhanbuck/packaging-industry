"use client";

import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  SendHorizontal
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = () => {
    if (email.trim() === "") return;
    console.log("Submitted email:", email);
    setEmail(""); // clear input after submit
  };

  const socialIcons = [
    { icon: <Facebook size={18} />, link: "https://facebook.com" },
    { icon: <Instagram size={18} />, link: "https://instagram.com" },
    { icon: <Linkedin size={18} />, link: "https://linkedin.com" },
    { icon: <Twitter size={18} />, link: "https://twitter.com" }
  ];

  return (
    <footer className="bg-[#f8f6f3] text-zinc-700 px-6 pt-16 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <Image
            src="/img/logo2.png"
            alt="Logo"
            width={180}
            height={80}
            className="mb-4"
          />
          <p className="text-sm mb-6">
            We provide creative solutions to help you grow your business. Let’s
            work together to create something amazing.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#2E8AE0]" /> Johar Town Lahore,
              Pakistan
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#2E8AE0]" /> (+92) 3201757153
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#2E8AE0]" />{" "}
              info@packagingwriter.com
            </li>
          </ul>
        </div>

        {/* Middle Links Section */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg text-[#2E8AE0] font-bold mb-2">
              Quick Links
            </h3>
            <div className="h-0.5 w-20 bg-[#2E8AE0] mb-4"></div>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="flex items-center font-semibold gap-1.5 group transition-transform duration-300"
                  >
                    <span className="text-transparent group-hover:text-[#2E8AE0]">
                      /
                    </span>
                    <span className="group-hover:translate-x-1 group-hover:px-1 group-hover:bg-clip-text group-hover:text-[#2E8AE0] transition-all duration-500">
                      {link}
                    </span>
                    <span className="text-transparent group-hover:text-[#2E8AE0]">
                      /
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-[#2E8AE0] font-semibold mb-2">
              Useful Links
            </h3>
            <div className="h-0.5 w-20 bg-[#2E8AE0] mb-4"></div>
            <ul className="space-y-2">
              {["Privacy", "Terms", "Help", "FAQ"].map((link, i) => (
                <li key={i}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="flex items-center font-semibold gap-1.5 group transition-transform duration-300"
                  >
                    <span className="text-transparent group-hover:text-[#2E8AE0]">
                      /
                    </span>
                    <span className="group-hover:translate-x-1 group-hover:px-1 group-hover:bg-clip-text group-hover:text-[#2E8AE0] transition-all duration-500">
                      {link}
                    </span>
                    <span className="text-transparent group-hover:text-[#2E8AE0]">
                      /
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg text-[#2E8AE0] font-semibold mb-2">
            Newsletter
          </h3>
          <div className="h-0.5 w-20 bg-[#2E8AE0] mb-4"></div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Submitted:", email);
              setEmail("");
            }}
            className="flex items-center gap-2 mb-6"
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email"
              className="px-4 py-2 rounded-full border border-zinc-300 transition duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:scale-95 w-full"
            />
            <button
              type="submit"
              className="p-2 rounded-full bg-gradient-to-r from-[#124576] to-[#2E8AE0] text-white hover:opacity-90 transition"
            >
              <SendHorizontal className="w-4 h-4" />
            </button>
          </form>

          <div className="flex gap-3">
            {socialIcons.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white text-[#124576] border border-[#124576] hover:bg-[#124576] hover:text-white hover:border-[#2E8AE0] transition-all duration-300"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 pt-6 border-t text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 mr-10">
          Content Writing Services Template Kit by{" "}
          <span className="text-[#2E8AE0]">Jegtheme</span>
        </p>
        <p className="text-zinc-500">Copyright © 2025. All rights reserved.</p>
      </div>
    </footer>
  );
}
