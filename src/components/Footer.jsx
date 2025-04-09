"use client";

import { Footer } from "flowbite-react";
import Link from "next/link";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsX,
} from "react-icons/bs";

export default function CompletePage() {
  return (
    <div className="bg-black text-white flex flex-col ">
      <footer className="bg-black text-white w-full mt-auto">
        <div className="max-w-screen-xl mx-auto px-6 py-10">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Logo Section */}
            <div className="flex flex-col items-center sm:items-start">
  <Footer.Brand
    src="/exe 1.png" // Ensure the logo path is correct
    alt="Team.Exe Logo"
    name="LOGO"
    className="text-white"
    style={{ height: "80px", width: "180px", objectFit: "contain" }}
  />
  <p className="text-gray-400 lg:pl-10 text-lg mt-4 text-center sm:text-left">
    TEAM .EXE
  </p>
</div>

            {/* Quick Links Section */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-lg font-semibold mb-4 text-gray-300">Quick Links</h3>
              <ul className="space-y-2 text-center sm:text-left">
                <li>
                  <Link href="/" className="hover:underline text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#Domain" className="hover:underline text-gray-400 hover:text-white">
                    Domains
                  </Link>
                </li>
                <li>
                  <Link href="/Team" className="hover:underline text-gray-400 hover:text-white">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Us Section */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-lg font-semibold mb-4 text-gray-300">About Us</h3>
              <ul className="space-y-2 text-center sm:text-left">
                <li>
                  <Link href="/AboutUs" className="hover:underline text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/Faqs" className="hover:underline text-gray-400 hover:text-white">
                    Faqs
                  </Link>
                </li>
                <li>
                  <Link href="/ContactUs" className="hover:underline text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Explore Section */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-lg font-semibold mb-4 text-gray-300">Explore</h3>
              <ul className="space-y-2 text-center sm:text-left">
                <li>
                  <Link href="/Projects" className="hover:underline text-gray-400 hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/Workshops" className="hover:underline text-gray-400 hover:text-white">
                    Workshops
                  </Link>
                </li>
                <li>
                  <Link href="/Events" className="hover:underline text-gray-400 hover:text-white">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Team.Exe. All rights reserved.
            </p>

            <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
      
              <Link
                href="https://www.instagram.com/teamexenith/?igsh=emd0ZWpvaHJnZWM0"
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <BsInstagram size={20} />
              </Link>
              <Link
                href="https://x.com/nimbusteameXe"
                className="text-gray-400 hover:text-white"
                aria-label="Twitter"
              >
                <BsX size={20} />
              </Link>
              <Link
                href="https://github.com/Teamexe"
                className="text-gray-400 hover:text-white"
                aria-label="GitHub"
              >
                <BsGithub size={20} />
              </Link>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
