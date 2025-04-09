'use client'
// src/components/VideoEditingAnimation.jsx
import React from 'react';
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });
import animationData from './videoEditing.json'; // Correct path to the JSON file

const VideoEditingAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="video-editing-animation">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default VideoEditingAnimation;