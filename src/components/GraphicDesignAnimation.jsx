'use client'
import React from 'react';
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });
import animationData from './GraphicDesign.json'; // Correct path to the JSON file

const GraphicDesignAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="graphic-design-animation">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default GraphicDesignAnimation;