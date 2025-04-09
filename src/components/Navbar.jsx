"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar({
  leftLogo = "/nimbus.png", // Default left logo
  rightLogo = "/exe 1.png", // Default right logo
  navLinks = [
    { href: "/", label: "Home", icon: "/icons/home.png" },
    { href: "/AboutUs", label: "About", icon: "/icons/about.png" },
    { href: "/Projects", label: "Projects", icon: "/icons/projects.png" },
    { href: "/Workshops", label: "Workshops", icon: "/icons/workshop.png" },
    { href: "/Events", label: "Events", icon: "/icons/event.png" },
    { href: "/Team", label: "Our Team", icon: "/icons/team.png" },
    { href: "/ContactUs", label: "Contact Us", icon: "/icons/contact.png" },
    { href: "/Faqs", label: "FAQs", icon: "/icons/faq.png" },
  ],
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleNavigation = (path) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <div className="relative">
      {/* Transparent Header */}
      <div className="fixed top-0 left-0 w-full z-40 flex justify-between items-center p-4 bg-transparent">
        {/* Left Side: Drawer Icon and Logo */}
        <div className="flex items-center space-x-4">
          {/* Drawer Icon Button */}
          <button
            onClick={toggleDrawer}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            className="text-white bg-transparent hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 rounded-full p-3 transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Left Logo */}
          <img src={leftLogo} alt="Left Logo" className="h-12 w-auto" />
        </div>

        {/* Right Logo */}
        <div className="flex items-center">
        <button onClick={() => router.push("/")}>
          <img src={rightLogo} alt="Right Logo" className="h-12 w-auto" />
          </button>        
        </div>

      </div>

      {/* Sidebar Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar */}
          <div
            className={`w-60 bg-black bg-opacity-80 backdrop-blur-md p-6 relative transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            {/* Close Button */}
            {/* Close Button */}
            <button
              onClick={toggleDrawer}
              aria-label="Close menu"
              className="absolute top-4 right-4 bg-white text-black rounded-full p-2 shadow-lg transition-transform duration-300 ease-in-out hover:rotate-180 hover:scale-110 hover:bg-gray-200"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <nav className="mt-16">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="flex items-center px-4 py-3 rounded-2xl text-lg text-white space-x-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_10px_#60a5fa,0_0_20px_#3b82f6,0_0_30px_#2563eb,0_0_40px_#1d4ed8,0_0_50px_#1e40af] focus:shadow-[0_0_10px_#60a5fa,0_0_20px_#3b82f6,0_0_30px_#2563eb,0_0_40px_#1d4ed8,0_0_50px_#1e40af]"
                    >
                      {/* Icon */}
                      <img
                        src={link.icon}
                        alt={`${link.label} icon`}
                        className="w-8 h-8"
                      />
                      {/* Label */}
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* Transparent Overlay */}
          <div
            className="flex-1 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
            onClick={toggleDrawer}
          />
        </div>
      )}
    </div>
  );
}
