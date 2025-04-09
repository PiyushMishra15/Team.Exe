"use client";
import React, { useEffect, useRef, useState } from "react";

const AboutUs = () => {
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsClient(true);

    // Set playback rate for the video if ref is available
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down the video
    }
  }, []);

  if (!isClient) return null; // Prevent SSR-related issues

  return (
    <div className="relative min-h-screen bg-black flex flex-col justify-center items-center text-center font-poppins">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/bgVideo.mp4"
        autoPlay
        muted
        loop
        style={{ filter: "brightness(0.5)" }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-10"></div>

      {/* Header */}
      <h2 className="text-[45px] mt-24 leading-tight font-aldrich font-semibold mb-6 md:mb-8 text-white relative z-10">
        TEAM <span className="text-[#D29DFF]">.EXE</span>
      </h2>
      <hr className="w-16 border-b-2 border-[#D29DFF] mb-8 animate-pulse mx-auto relative z-10" />

      {/* Content Section */}
      <div className="w-[90%] sm:w-[80%] mb-8 px-4 sm:px-8 text-white relative z-10">
        <p className="text-gray-300 shadow-lg mb-8 leading-relaxed">
          We are a team of passionate and hardworking engineers dedicated to
          adding value to every aspect of tech and development. Not only do we
          adhere to a strong commitment to technology, but we also love to add
          value to society and the world as a whole. We strive to innovate,
          collaborate, and create solutions that push the boundaries of what's
          possible.
          <br />
          <br />
          Join us and experience the wonders that the tech world has to offer.
          Together, we embark on a journey of continuous learning, growth, and
          impact. With Team .EXE, the possibilities are endless. Let's shape the
          world together, one line of code at a time.
        </p>

        <p className="text-2xl text-[#d7b7f3] shadow-md font-medium mb-8">
          Where Ideas Meet Innovation
        </p>
        <hr className="w-16 border-b-2 border-[#d0adee] mb-8 mx-auto" />
      </div>

      {/* Video Section */}
      <div className="relative mx-auto w-full sm:w-[70%] md:w-[60%] lg:w-[50%] mb-12 z-10">
        <iframe
          className="w-full h-[315px] sm:h-[380px] lg:h-[450px] rounded-lg shadow-xl"
          src="https://www.youtube.com/embed/AfGBmu1eRYs"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
