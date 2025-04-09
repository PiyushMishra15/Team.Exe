"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    title: "Type Dash",
    description:
      "A dynamic speed typing website that allows users to create and participate in real-time multiplayer typing matches. Users can challenge their friends in real-time typing competitions. The website provides a user-friendly interface where players can test their typing speed, accuracy, and improve their typing skills.",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    thumbnailUrl:
      "https://res.cloudinary.com/dwwajleyo/image/upload/v1711746296/posters_and_assets/project_thumbnails/Screenshot_2024-03-30_023406_vxpmet.png",
  },
  {
    id: 2,
    title: "Task Gambit",
    description:
      "Teams face a thrilling challenge navigating through hybrid puzzles blending virtual and physical elements. Solve these puzzles to qualify for further rounds, collaborate, and race against time for the ultimate victory!",
    techStack: ["React.js", "Express.js", "Socket.io", "MongoDB", "Firebase"],
    thumbnailUrl:
      "https://tse3.mm.bing.net/th?id=OIP.CBVGzahuk61Z7PlcW05pKAAAAA&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    title: "Thrift",
    description:
      "A platform connecting sellers and buyers for second-hand goods like books, appliances, and art. Features include secure communication, payment options, and a complaint desk to ensure safe transactions.",
    techStack: ["HTML", "CSS", "React", "Node.js"],
    thumbnailUrl:
      "https://tse4.mm.bing.net/th?id=OIP.MuvC0yTwPy0pw0pMElgTRgHaEL&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    title: "Amber",
    description:
      "An online platform for booking ambulances, tackling issues like slow response times and unsanitary vehicles. Amber offers multiple services based on patient needs, ensuring safety and reliability.",
    techStack: ["React", "Node.js", "MongoDB", "Firebase", "Google API"],
    thumbnailUrl:
      "https://tse3.mm.bing.net/th?id=OIP.fgN0hATv_MTZ6sMGWIv4CgHaEW&pid=Api&P=0&h=180",
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
      });
    }
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
        style={{ filter: "brightness(0.5)" }} // Adjust brightness and scale for quality
        playbackrate={0.75} // Slow down the video
      />
      <div className="container mx-auto my-auto py-16 px-6">
        {/* Page Title */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-16 p-2 fontdiner-swanky-regular bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 animate-gradient animate-title leading-tight"
          data-aos="fade-down"
        >
          Our Projects
        </h1>

        <div className="text-left mb-16 pl-8" data-aos="fade-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 font-poppins relative">
            Web Dev
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-400 mt-2"></span>
          </h2>
        </div>

        {projects.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} // Stagger the animations
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
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Right: Text Content */}
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="w-full sm:w-2/3 md:w-2/3 text-left space-y-6"
              style={{ overflowWrap: "break-word" }} // Prevents text from overflowing
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
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-4 font-montserrat md:w-2/3">
                {project.description}
              </p>
            </div>
          </div>
        ))}

        {/* Footer Line */}
        <hr className="border-t-2 border-gray-300 my-12" data-aos="flip-in" />
      </div>
    </div>
  );
};

export default Projects;
