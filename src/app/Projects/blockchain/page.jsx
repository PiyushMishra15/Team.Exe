"use client";
import React, { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    title: "Harvestberg Solutions",
    description:
      "Harvestberg-Solutions is a blockchain-powered solution designed to bring transparency and efficiency to the agricultural supply chain. By integrating machine learning models and blockchain technology, this solution aims to track agricultural products from farm to retailer, ensuring quality and fair pricing.",
    techStack: ["Next JS", "Typescript", "Blockchain", "Scikit-learn"],
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpZNfgrbG-lCfM_vMJfyuLrXGfG-AqEsGmBIO89NTcQ&s",
  },
  {
    id: 2,
    title: "Certifica Authentify",
    description:
      "Certifica_Authentify aims to create a decentralized system that aims to eradicate the problem of document forging, which involves submitting counterfeit educational and other certificates, by proposing a reliable method to store and authenticate the certificates in real-time to minimize the latency in the current authentication system and at the same time facilitating corrections in the certificates without physically reaching out to the concerned organization.",
    techStack: ["javascript", "mongodb", "solidity", "node.js"],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/iso-9001-certification-checks_23-2148681367.jpg?w=996&t=st=1712548003~exp=1712548603~hmac=ede52500c6cfd189c032387c79242f3204ae983a66693e2b3a88716a04dfe504",
  },
  {
    id: 3,
    title: "UNIQO",
    description:
      "An NFT marketplace for students and faculty members to create and sell NFTs representing college memories, artwork, and moments. Transactions are made using NITH currency tokens.",
    techStack: ["Solidity", "React js", "tailwind.css", "MongoDB"],
    thumbnailUrl:
      "https://tse3.mm.bing.net/th?id=OIP.gSgE19-k6ZQWrCtvor2gKQHaD2&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    title: "Land Registration",
    description:
      "A land registry platform facilitating seamless property transactions among buyers, sellers, and land inspectors. Blockchain ensures transparency, security, and immutability for property specifications and transaction records.",
    techStack: ["Web 3.0", "App Development"],
    thumbnailUrl:
      "https://tse3.mm.bing.net/th?id=OIP.ZQ8WafVtI3AbSwaSBAD7PAHaEU&pid=Api&P=0&h=180",
  },
];

const Projects = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    AOS.init({
      duration: 1000, // Default smooth animations
      offset: 100, // Adjust the trigger point
      easing: "ease-out-quint", // A smoother easing effect
      once: false, // Animation occurs only once
      delay: 100, // Add slight delay for each element for staggered effect
    });}
  }, []);
  if (!isClient) return null;

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
      <div className="container mx-auto py-16 px-6">

      <h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-center mb-16 p-2 fontdiner-swanky-regular bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 animate-gradient animate-title leading-tight"

          data-aos="fade-down"
        >
          Our Projects
        </h1>

        <div className="text-left mb-16 pl-8" data-aos="fade-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 animate-gradient animate-title">
            Blockchain
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-400 mt-2"></span>
          </h2>
        </div>

        {projects.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            className="flex flex-col md:flex-row items-center gap-16 md:gap-28 mb-24 lg:ml-12"
          >
            {/* Left: Image */}
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              className="w-full sm:w-2/3 md:w-1/3 md:mr-12 flex-shrink-0"
            >
              <div className="rounded-xl shadow-lg overflow-hidden spotlight-card">
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg "
                />
              </div>
            </div>

            {/* Right: Text Content */}
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="w-full sm:w-2/3 md:w-2/3 text-left space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl p-2 font-extrabold font-poppins text-blue-300 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 animate-gradient animate-title">
                {project.title}
              </h2>

              {/* Tech Stack */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400">
                <span className="font-semibold text-gray-200">Tech Stack:</span>{" "}
                {project.techStack.join(", ")}
              </p>

              {/* Description */}
              <p className="text-lg sm:text-xl md:text-2xl">{project.description}</p>
            </div>
          </div>
        ))}

        <hr className="border-t-2 border-gray-300 my-12" data-aos="flip-in" />
      </div>
    </div>
  );
};

export default Projects;
