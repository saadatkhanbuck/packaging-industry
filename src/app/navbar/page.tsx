"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  const navItems = [
    { name: "Home" },
    { name: "About Us" },
    { name: "Services" },
    {
      name: "Projects",
      dropdown: ["Projects ", "Project details"]
    },
    {
      name: "Pages",
      dropdown: ["Pricing", "Our Team", "FAQ"]
    },
    {
      name: "Blog",
      dropdown: ["Blog ", "Single Blog"]
    },
    { name: "Contact" }
  ];

  const activeItem = "Home";

  return (
    <header className="bg-[#f8f6f3] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/img/logo2.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-2 text-sm font-medium text-gray-900">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() =>
                setOpenDropdown(item.dropdown ? item.name : "")
              }
              onMouseLeave={() => setOpenDropdown("")}
            >
              <a
                href="#"
                className={`
  group/navitem relative px-4 py-2 rounded-full 
  font-semibold transition-all duration-300 flex items-center space-x-1
  ${
    item.name === activeItem
      ? "bg-gradient-to-r from-[#124576] to-[#2E8AE0] text-white"
      : "bg-transparent text-black hover:bg-[#545454] hover:text-white"
  }
`}
              >
                <span className="relative flex flex-col items-center justify-center h-full">
                  <span
                    className={`transition-all duration-200 ${
                      item.name === activeItem
                        ? "opacity-0 -translate-y-full"
                        : "group-hover/navitem:-translate-y-full group-hover/navitem:opacity-0"
                    }`}
                  >
                    {item.name} <span className="text-[10px]">▾</span>
                  </span>
                  <span
                    className={`absolute transition-all duration-300 ${
                      item.name === activeItem
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0 group-hover/navitem:translate-y-0 group-hover/navitem:opacity-100"
                    }`}
                  >
                    {item.name} <span className="text-[10px]">▾</span>
                  </span>
                </span>
              </a>
              {item.dropdown && openDropdown === item.name && (
                <div className="absolute left-0 mt-0 w-40 bg-white shadow-lg rounded-md py-2 z-50 transition-all duration-300">
                  {item.dropdown.map((subItem, subIdx) => (
                    <a
                      key={subIdx}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right - Contact + Button */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm">
            <svg
              className="w-10 h-10 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"
              />
            </svg>
            <div>
              <p className="text-xs text-gray-500">Free Consultation</p>
              <p className="text-md font-semibold text-gray-900">
                (021) 231 - 2870
              </p>
            </div>
          </div>
          <button
            className="group relative overflow-hidden bg-gradient-to-r from-[#124576] to-[#2E8AE0] text-white font-semibold
            sm:text-sm text-xs sm:px-5 px-3 sm:py-2 py-1.5 rounded-full border border-[#124576]
             hover:bg-[#545454] hover:text-white transition-all duration-300"
          >
            <span className="relative flex flex-col items-center">
              <span className="group-hover:translate-y-full group-hover:opacity-0 transition duration-300">
                Get Started <span className="text-[10px]">▾</span>
              </span>
              <span className="absolute opacity-0 translate-y-[-100%] group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                Get Started <span className="text-[10px]">▾</span>
              </span>
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-black">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#f8f6f3]">
          {navItems.map((item, idx) => (
            <div key={idx}>
              <a
                href="#"
                className={`block rounded-full px-4 py-2 text-sm font-semibold
  transition-all duration-200 flex justify-between items-center
  ${
    item.name === activeItem
      ? "bg-gradient-to-r from-[#124576] to-[#2E8AE0] text-white"
      : "bg-transparent text-black hover:bg-[#545454] hover:text-white"
  }
`}
              >
                {item.name} <span className="text-xs">▾</span>
              </a>
              {item.dropdown && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.dropdown.map((subItem, subIdx) => (
                    <a
                      key={subIdx}
                      href="#"
                      className="block text-sm px-4 py-1 rounded hover:bg-gray-100"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-4 border-t pt-4 space-y-2">
            <div className="text-sm text-gray-700">
              <p className="text-xs text-gray-500">Free Consultation</p>
              <p className="font-semibold">(021) 231 - 2870</p>
            </div>
            <button
              className="group bg-gradient-to-r from-[#124576] to-[#2E8AE0] border border-[#124576]
  w-full text-white font-semibold sm:text-sm text-xs sm:px-4 px-3 sm:py-2 py-1.5 rounded-full 
  transition-all duration-300 hover:bg-[#545454] hover:text-white"
            >
              <span className="relative flex flex-col items-center">
                <span className="group-hover:translate-y-full group-hover:opacity-0 transition duration-300">
                  Get Started <span className="text-[10px]">▾</span>
                </span>
                <span className="absolute opacity-0 translate-y-[-100%] group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                  Get Started <span className="text-[10px]">▾</span>
                </span>
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
