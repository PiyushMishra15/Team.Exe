"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen text-white flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-24 font-sans">
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

      {/* Overlay for better readability */}
      <div className="absolute inset-0  "></div>

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black/20"></div>

      {/* FAQ Container */}
      <div className="relative z-10 max-w-4xl w-full bg-gradient-to-b from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] p-8 md:p-12 mt-16 border border-gray-700/50">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-400 p-1 rounded-full shadow-lg shadow-blue-500/30">
          <div className="bg-gray-900 rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4 md:mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-300 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Have questions? We've got answers! Click to expand and explore.
        </p>

        {/* FAQ Items */}
        <div className="space-y-4 md:space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-gray-800/80 to-gray-700/80 rounded-xl shadow-lg transition-all duration-300 hover:shadow-blue-500/10 border border-gray-700/50 overflow-hidden"
            >
              <button
                onClick={() => toggleCollapse(index)}
                className="w-full text-left flex justify-between items-center p-5 text-lg md:text-xl font-medium text-gray-100 focus:outline-none group-hover:text-blue-300 transition-colors duration-300"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-blue-400 transition-transform duration-300 ease-out ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 pt-0 border-t border-gray-700/50">
                  <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 flex justify-center">
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

// FAQ Data
const faqData = [
  {
    question: "Who can participate in our events?",
    answer:
      "Our events are open to everyone, regardless of their branch or college. We welcome participants from all backgrounds with open arms.",
  },
  {
    question: "What contributions does Team .EXE make in Nimbus?",
    answer:
      "Team .EXE is deeply involved in organizing technical events, workshops, competitions, and various fun-filled activities during Nimbus.",
  },
  {
    question: "Are Team .EXE workshops free?",
    answer:
      "Yes, absolutely! All workshops conducted by Team .EXE are free of charge and open to everyone interested.",
  },
  {
    question: "Who can join our club?",
    answer:
      "Our club is open to enthusiastic individuals from all branches. We conduct interviews every year to welcome new members from the First and Second year.",
  },
  {
    question: "How can I stay updated about club activities?",
    answer:
      "You can stay connected and updated about our events through our social media handles on Instagram, LinkedIn, and our official website.",
  },
];
