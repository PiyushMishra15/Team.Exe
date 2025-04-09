'use client';
// src/components/DomainCard.jsx
import React from 'react';
import WebDevAnimation from './WebDevAnimation';
import MachineLearningAnimation from './MachineLearningAnimation';
import ArVrAnimation from './ArVrAnimation';
import VideoEditingAnimation from './VideoEditingAnimation';
import GraphicDesignAnimation from './GraphicDesignAnimation';
import CompetitiveProgrammingAnimation from './CompetitiveProgrammingAnimation';

const DomainCard = ({ title, description, image, isWebDev, isMachineLearning, isArVr, isVideoEditing, isGraphicDesign, isCompetitiveProgramming }) => {
  return (
    <div className="domain-card group bg-transparent backdrop-blur-lg rounded-lg shadow-lg p-6 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-purple-500">
      {isWebDev ? (
        <WebDevAnimation />
      ) : isMachineLearning ? (
        <MachineLearningAnimation />
      ) : isArVr ? (
        <ArVrAnimation />
      ) : isVideoEditing ? (
        <VideoEditingAnimation />
      ) : isGraphicDesign ? (
        <GraphicDesignAnimation />
      ) : isCompetitiveProgramming ? (
        <CompetitiveProgrammingAnimation />
      ) : (
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      )}
      <h3 className="text-2xl font-bold text-white mt-4 font-serif group-hover:text-purple-400">{title}</h3>
      <p className="text-gray-300 mt-2 ">{description}</p>
    </div>
  );
};

export default DomainCard;