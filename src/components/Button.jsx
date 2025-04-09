"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function DomainButtons() {
  const router = useRouter();

  // Example domains
  const domains = [
    { label: "Web Dev", href: "/Projects" },
    { label: "App Dev", href: "/Projects/appD" },
    { label: "AI/ML", href: "/Projects/ai-ml" },
    { label: "Blockchain", href: "/Projects/blockchain" },
    { label: "AR/VR", href: "/Projects/ar-vr" },
  ];

  const handleNavigation = (href) => {
    router.push(href);
  };

  return (
    <div className="fixed bottom-8 w-full px-4 flex justify-center">
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
        {domains.map((domain, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(domain.href)}
            className="px-4 py-2 md:px-6 md:py-3 bg-gray-900 bg-opacity-70 hover:bg-gradient-to-r hover:from-blue-500 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105 text-sm md:text-base max-w-[140px] w-auto"
          >
            {domain.label}
          </button>
        ))}
      </div>
    </div>
  );
}
