'use client'
import React from 'react';
import Image from 'next/image';

const images = [
  '/1.png',  // First row
  '/2.png',  // First row
  '/3.png',  // First row
  '/4.png',  // Second row
  '/5.png',  // Second row
  '/6.png',  // Second row
  '/7.png',  // Third row
  '/8.png',  // Third row
  '/9.png',  // Third row
  '/10.png', // Fourth row
  '/11.png', // Fourth row
  '/12.png', // Fourth row
];

const Gallery = () => {
  return (
    <div className="gallery-container py-20 bg-[#1E1E1E] text-white">
      <h2 className="text-4xl font-extrabold text-center text-purple-500 mb-10">Gallery</h2>

      {/* First Row */}
  

      {/* Second Row */}
      <div className="flex justify-center gap-6 mb-6">
        {[3, 4, 5].map((index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-lg shadow-lg w-[300px] h-[200px] ${[3, 5].includes(index) ? 'border-4 border-purple-500' : ''}`}
          >
            <Image
              src={images[index]}
              alt={`Gallery Image ${index + 1}`}
              width={300}
              height={200}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Third Row */}
      <div className="flex justify-center gap-6 mb-6">
        {[6, 7, 8].map((index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-lg shadow-lg w-[350px] h-[230px] ${[6, 8].includes(index) ? 'border-4 border-purple-500' : ''}`}
          >
            <Image
              src={images[index]}
              alt={`Gallery Image ${index + 1}`}
              width={350}
              height={230}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Fourth Row */}
      <div className="flex justify-center gap-6">
        {[9, 10, 11].map((index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-lg shadow-lg w-[300px] h-[200px] ${[10].includes(index) ? 'border-4 border-purple-500' : ''}`}
          >
            <Image
              src={images[index]}
              alt={`Gallery Image ${index + 1}`}
              width={300}
              height={200}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
