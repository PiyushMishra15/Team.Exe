"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationComponent = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch("/animations/animations.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      {animationData && (
        <Lottie animationData={animationData} className="w-full h-full" />
      )}
    </div>
  );
};

export default AnimationComponent;