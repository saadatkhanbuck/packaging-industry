"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    {
      name: "Projects",
      dropdown: [
        { name: "Projects", href: "/projects" },
        { name: "Project Details", href: "/projects/details" },
      ],
    },
    {
      name: "Pages",
      dropdown: [
        { name: "Pricing", href: "/pricing" },
        { name: "Our Team", href: "/team" },
        { name: "FAQ", href: "/faq" },
      ],
    },
    {
      name: "Blog",
      dropdown: [
        { name: "Blog", href: "/blog" },
        { name: "Single Blog", href: "/blog/single" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`w-full z-50 fixed top-0 left-0 transition-transform duration-500 ${
        showNavbar ? "translate-y-0 bg-transparent shadow" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/img/logo2.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center space-x-2 text-sm font-medium text-gray-900">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.dropdown ? item.name : "")}
              onMouseLeave={() => setOpenDropdown("")}
            >
              <Link
                href={item.href || "#"}
                className={`font-semibold group/navitem relative px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-1
                  ${item.href === pathname
                    ? "bg-gradient-to-r from-[#124576] to-[#2E8AE0] text-white"
                    : "bg-transparent text-black hover:bg-[#000000] hover:text-white"
                  }`}
              >
                <span className="relative flex flex-col items-center justify-center h-full">
                  <span
                    className={`transition-all duration-200 ${
                      item.href === pathname
                        ? "opacity-0 -translate-y-full"
                        : "group-hover/navitem:-translate-y-full group-hover/navitem:opacity-0"
                    }`}
                  >
                    {item.name} {item.dropdown && <span className="text-[10px]">▾</span>}
                  </span>
                  <span
                    className={`absolute transition-all duration-300 ${
                      item.href === pathname
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0 group-hover/navitem:translate-y-0 group-hover/navitem:opacity-100"
                    }`}
                  >
                    {item.name} {item.dropdown && <span className="text-[10px]">▾</span>}
                  </span>
                </span>
              </Link>

              {item.dropdown && openDropdown === item.name && (
                <div className="absolute left-0 mt-0 w-40 bg-white shadow-lg rounded-md py-2 z-50">
                  {item.dropdown.map((subItem, subIdx) => (
                    <Link
                      key={subIdx}
                      href={subItem.href}
                      className={`block px-4 py-2 font-semibold text-sm ${
                        subItem.href === pathname ? "text-white bg-[#2E8AE0]" : "text-[#2E8AE0] hover:bg-gray-100"
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Contact + Button */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center space-x-2 text-sm">
            <svg className="w-10 h-10 text-[#2E8AE0]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6" />
            </svg>
            <div>
              <p className="text-xs text-zinc-700">Free Consultation</p>
              <p className="text-md font-semibold text-gray-900">(+92) 3201757153</p>
            </div>
          </div>

          <button className="group relative overflow-hidden bg-gradient-to-r from-[#124576] to-[#2E8AE0] text-white font-semibold text-sm px-4 py-2 rounded-full border border-[#124576] hover:bg-[#545454] hover:text-white transition-all duration-300 whitespace-nowrap">
            <span className="relative flex flex-col items-center">
              <span className="group-hover:translate-y-full group-hover:opacity-0 transition duration-300">
                Get Started <span className="text-[10px]">▾</span>
              </span>
              <span className="absolute opacity-0 -translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                Get Started <span className="text-[10px]">▾</span>
              </span>
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#124576]" /> : <Menu className="w-6 h-6 text-[#124576]" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f8f6f3] text-[#2E8AE0] font-semibold px-4 pb-4 space-y-2">
          {navItems.map((item, idx) => (
            <div key={idx}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() =>
                      setMobileDropdownOpen(
                        mobileDropdownOpen === item.name ? null : item.name
                      )
                    }
                    className={`w-full text-left rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 flex justify-between items-center
                      ${item.href === pathname
                        ? "bg-gradient-to-r from-[#124576] to-[#2E8AE0] text-white"
                        : "bg-transparent text-black hover:bg-[#000000] hover:text-white"
                      }`}
                  >
                    {item.name} <span className="text-xs">▾</span>
                  </button>

                  {mobileDropdownOpen === item.name && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((subItem, subIdx) => (
                        <Link
                          key={subIdx}
                          href={subItem.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileDropdownOpen(null);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className={`block text-sm px-4 py-1 rounded ${
                            subItem.href === pathname ? "bg-[#2E8AE0] text-white" : "hover:bg-gray-100"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`block rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200
                    ${item.href === pathname
                      ? "bg-gradient-to-r from-[#124576] to-[#2E8AE0] text-white"
                      : "bg-transparent text-black hover:bg-[#000000] hover:text-white"
                    }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile Contact + CTA */}
          <div className="mt-4 border-t pt-4 space-y-1">
            <div className="text-sm text-gray-700">
              <p className="text-xs text-gray-600">Free Consultation</p>
              <p className="font-semibold">(+92) 3201757153</p>
            </div>
            <button className="group bg-gradient-to-r from-[#124576] to-[#2E8AE0] border border-[#124576] w-full text-white font-semibold text-xs sm:text-sm sm:px-4 px-3 sm:py-2 py-1.5 rounded-full transition-all duration-300 hover:bg-[#545454] hover:text-white">
              <span className="relative flex flex-col items-center">
                <span className="group-hover:translate-y-full group-hover:opacity-0 transition duration-300">
                  Get Started <span className="text-[10px]">▾</span>
                </span>
                <span className="absolute opacity-0 -translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
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
