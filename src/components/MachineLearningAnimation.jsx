'use cleint';
import React from 'react';
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });
import animationData from './MachineLearning.json';

const MachineLearningAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="machine-learning-animation">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default MachineLearningAnimation;
