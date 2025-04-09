"use client";
import React, { useEffect, useState } from "react";
import { Orbitron, Playfair_Display, Montserrat, Fontdiner_Swanky } from "next/font/google";

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS




const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});

const fontdiner = Fontdiner_Swanky({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-fontdiner",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const Workshops = () => {
  const [expandedWorkshopId, setExpandedWorkshopId] = useState(null);
  const [isClient, setIsClient] = useState(false); // State to track if it's on the client side

  const workshops = [
    {
      id: 11,
      title: "INTRODUCTION TO BACKEND",
      type: "workshop",
      image_url:
        "https://res.cloudinary.com/dwwajleyo/image/upload/v1711589992/posters_and_assets/backend_workshop_ulo5ql.jpg",
      start_date: "2024-02-14T23:27:20",
      end_date: "2024-02-15T17:00:00Z",
      description:
        "This backend workshop is a training session focused on the development and maintenance of the server-side of software applications. This workshop typically covers topics such as backend technologies like Node.js, databases, API integration, security, and performance optimization.",
    },
    {
      id: 9,
      title: "BUG HUNTING WORKSHOP",
      type: "workshop",
      image_url:
        "https://res.cloudinary.com/dwwajleyo/image/upload/v1711589993/posters_and_assets/bug_hunting_k612tn.jpg",
      start_date: "2023-03-19T10:00:00Z",
      end_date: "2023-03-19T13:00:00Z",
      description:
        "Through this workshop, participants acquired the fundamentals of security vulnerabilities, with a focus on web-specific flaws, and got hands-on practice detecting bugs on real platforms.",
    },
    {
      id: 10,
      title: "NFT CREATION WORKSHOP",
      type: "workshop",
      image_url:
        "https://res.cloudinary.com/dwwajleyo/image/upload/v1711589991/posters_and_assets/Nft_creation_sd6jmf.jpg",
      start_date: "2023-02-05T16:00:00Z",
      end_date: "2023-02-05T18:00:00Z",
      description:
        "The goal of this session was to provide the students with a foundational understanding of blockchain technology and the decentralized technology world, as well as hands-on experience building NFTs on the Polygon network and putting their data on IPFS.",
    },
    
  ];

  // Group workshops by year
  const groupedWorkshops = workshops.reduce((acc, workshop) => {
    const year = new Date(workshop.start_date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(workshop);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedWorkshops).sort((a, b) => b - a); // Sort by year descending

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true); // Mark client-side rendering

      // Initialize AOS for scroll animations
      AOS.init({
        duration: 1000,
        offset: 100,
        easing: "ease-in-out",
        once: false,
      });
    }
  }, []);

  const toggleExpand = (workshopId) => {
    setExpandedWorkshopId(expandedWorkshopId === workshopId ? null : workshopId);
  };

  const isExpanded = (workshopId) => expandedWorkshopId === workshopId;

  return (
    <div className="relative min-h-screen text-white flex flex-col justify-center items-center text-center font-poppins">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/bgVideo.mp4"
        autoPlay
        muted
        loop
        style={{ filter: 'brightness(0.5)' }} // Adjust brightness and scale for quality
        playbackrate={0.75} // Slow down the video
      />
      <div className="container mx-auto py-16 px-4">
      <h1
className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-center mb-16 p-2  bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 animate-gradient animate-title leading-tight"
data-aos="fade-down"
>
          Workshops
        </h1>

        {isClient && sortedYears.map((year, index) => (
          <div key={year} className="mb-24 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center font-playfair text-gray-200 glow animate-pulse">
              {Number(year) - 1} - {year}
            </h2>
            {groupedWorkshops[year].map((workshop, idx) => (
              <div
                key={workshop.id}
                data-aos="fade-up"
                className="flex flex-col md:flex-row-reverse items-center md:items-start gap-12 mb-32 transition-all duration-300 ease-in-out hover:scale-105 opacity-0"
              >
                {/* Right Side: Poster Image */}
                <div className="w-full md:w-1/2 flex justify-center items-center" data-aos="zoom-out-left">
                  <img
                    src={workshop.image_url}
                    alt={workshop.title}
                    className="w-4/5 h-auto object-cover rounded-xl shadow-md spotlight-card"
                  />
                </div>

                {/* Left Side: Title, Description, and Date */}
                <div className="w-full md:w-1/2 lg:w-3/5" data-aos="zoom-out-right">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-poppins mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 animate-gradient animate-title">
                    {workshop.title}
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-4 font-montserrat md:w-2/3">
                    {isExpanded(workshop.id)
                      ? workshop.description
                      : workshop.description.slice(0, 160) + "..." }
                    <button
                      onClick={() => toggleExpand(workshop.id)}
                      className="font-semibold ml-2 focus:outline-none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 animate-gradient animate-title"
                    >
                      {isExpanded(workshop.id) ? "Read Less" : "Read More"}
                    </button>
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-playfair">
                    <span className="font-medium text-gray-400">Date:</span>{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 animate-gradient animate-title ">{new Date(workshop.start_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }).replace(/,/g, " ")}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workshops;




