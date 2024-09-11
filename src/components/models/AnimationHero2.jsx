import React from 'react';
import Lottie from 'lottie-react';
import animationData from './Animation-status-web.json'

const LottieAnimation = () => {
  return (
    <div style={{ 
      width: '24rem', 
      height: '25rem',  
      zIndex: -1,
      }}>
      <Lottie 
        animationData={animationData} 
        loop={true} 
        style={{ width: '100%', height: '100%' }} 
      />
    </div>
  );
};

export default LottieAnimation;