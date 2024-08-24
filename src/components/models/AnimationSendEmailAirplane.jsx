import React from 'react';
import Lottie from 'lottie-react';
import animationData from './Animation-send-email-airplane.json'

const LottieAnimation = () => {
  return (
    <div style={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: "50%"}}>
      <Lottie 
        animationData={animationData} 
        loop={true} 
        style={{ width: '100%', height: '100%' }} 
      />
    </div>
  );
};

export default LottieAnimation;