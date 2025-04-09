"use client";
import DomainCard from "../../src/components/DomainCard";
import Gallery from "../../src/components/Gallery";
import { useState } from "react";
const domains = [
  {
    title: "Web Development",
    description: "Building responsive and dynamic websites.",
    image: "/web-development.jpg",
    isWebDev: true,
  },
  {
    title: "Machine Learning",
    description: "Creating intelligent systems that learn and adapt.",
    image: "/machine-learning.jpg",
    isMachineLearning: true,
  },
  {
    title: "AR/VR",
    description: "Exploring augmented and virtual reality technologies.",
    image: "/ar-vr.jpg",
    isArVr: true,
  },
  {
    title: "Video Editing",
    description:
      "Crafting compelling video content with professional editing techniques.",
    image: "/video-editing.jpg",
    isVideoEditing: true,
  },
  {
    title: "Graphic Design",
    description: "Creating visually appealing designs for various media.",
    image: "/graphic-design.jpg",
    isGraphicDesign: true,
  },
  {
    title: "Competitive Programming",
    description:
      "Solving challenging problems and competing in programming contests.",
    image: "/competitive-programming.jpg",
    isCompetitiveProgramming: true,
  },
];

const faculty = [
  {
    name: "TP Sharma",
    role: "Faculty Incharge",
    image: "/tpsharma.png",
    linkedin:
      "https://www.linkedin.com/in/tp-sharma-253a0039/?originalSubdomain=in",
  },
];

const coordinators = [
  {
    name: "Somendra Aggarwal",
    role: "Club Coordinator",
    image:
      "https://res.cloudinary.com/dwwajleyo/image/upload/v1709371192/membersexe%402024/somendra_anjalj_p6zxyq.jpg",
    linkedin: "https://www.linkedin.com/in/somendraaggarwal11",
  },
  {
    name: "Mansi Joshi",
    role: "Club Coordinator",
    image:
      "https://res.cloudinary.com/dwwajleyo/image/upload/v1711644927/membersexe%402024/mansi_ikkv2u.jpg",
    linkedin: "https://www.linkedin.com/in/mansi-joshi-68b709269/",
  },
];

const FacultyCard = ({ name, role, image, linkedin }) => (
  <a
    href={linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full md:w-4/5 mb-8 mx-auto flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left"
  >
    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 bg-transparent hover:bg-gray-800/30 p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover flex-shrink-0"
      />
      {/* Text Content */}
      <div className="text-content text-white">
        <h3 className="text-2xl font-sans text-purple-500">{name}</h3>
        <p className="text-lg text-gray-300">{role}</p>
      </div>
    </div>
  </a>
);

const CoordinatorCard = ({ name, role, image, linkedin }) => (
  <a
    href={linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full md:w-4/5 mb-8 mx-auto flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left"
  >
    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 bg-transparent hover:bg-gray-800/30 p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover flex-shrink-0"
      />
      {/* Text Content */}
      <div className="text-content text-white">
        <h3 className="text-2xl font-sans text-purple-500">{name}</h3>
        <p className="text-lg text-gray-300">{role}</p>
      </div>
    </div>
  </a>
);

export default function Page() {
  const [hasError, setHasError] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  return (
    <>
      <div className="relative min-h-screen bg-gray-900 text-gray-200 font-sans">
        {/* Video Section */}
        <div className="relative z-10">
          <div className="flex items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-black to-black">
            {/* Fallback Image */}
            {(!isVideoReady || hasError) && (
              <img
                src="/tem.exe.png" // replace with your fallback image path
                alt="Fallback"
                className="absolute object-contain w-full h-auto max-w-none sm:max-w-[90%] md:max-w-[70%] lg:max-w-full"
              />
            )}

            {/* Video */}
            <video
              className="absolute object-contain w-full h-auto max-w-none sm:max-w-[90%] md:max-w-[70%] lg:max-w-full"
              src="/0124(1).mov"
              autoPlay
              playsInline
              muted
              title="Your Video Title"
              onCanPlay={() => setIsVideoReady(true)}
              onError={() => setHasError(true)}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-6xl font-bold text-white font-sans"></h1>
            </div>
          </div>
        </div>

        {/* Domains Section */}
        <div id="Domain" className="relative z-10 text-white bg-dark-blue">
          <div className="flex flex-col items-center text-center text-purple-500 font-extrabold text-4xl px-4 pt-20">
            OUR DOMAINS
          </div>
          <div className="flex flex-wrap justify-center font-semibold">
            {domains.map((domain, index) => (
              <DomainCard
                key={index}
                title={domain.title}
                description={domain.description}
                image={domain.image}
                isWebDev={domain.isWebDev}
                isMachineLearning={domain.isMachineLearning}
                isArVr={domain.isArVr}
                isVideoEditing={domain.isVideoEditing}
                isGraphicDesign={domain.isGraphicDesign}
                isCompetitiveProgramming={domain.isCompetitiveProgramming}
              />
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="relative z-10 text-white pt-20 bg-dark-blue">
          <Gallery />
        </div>

        {/* Faculty Section */}
        <div className="relative z-10 text-white pt-20 pb-10 bg-dark-blue">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-4xl font-extrabold text-purple-500">FACULTY</h2>
          </div>
          <div className="max-w-6xl mx-auto px-4">
            {faculty.map((faculty, index) => (
              <FacultyCard
                key={index}
                name={faculty.name}
                role={faculty.role}
                image={faculty.image}
                linkedin={faculty.linkedin}
              />
            ))}
          </div>
        </div>

        {/* Coordinators Section */}
        <div className="relative z-10 text-white pt-20 pb-10 bg-dark-blue">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-4xl font-extrabold text-purple-500">
              CLUB CO-ORDINATORS
            </h2>
          </div>
          <div className="max-w-6xl mx-auto px-4">
            {coordinators.map((coordinator, index) => (
              <CoordinatorCard
                key={index}
                name={coordinator.name}
                role={coordinator.role}
                image={coordinator.image}
                linkedin={coordinator.linkedin}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
