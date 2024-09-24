import React from 'react';
import Lottie from 'lottie-react';
import { Box } from '@mui/material';

import animationData from './Animation-send-email-airplane.json'

const LottieAnimation = () => {
  return (
    <Box sx={{ 
      width: 'auto', 
      height: {xs: '60%', sm: '100%'}, 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      borderRadius: "50%"
      }}>
      <Lottie 
        animationData={animationData} 
        loop={true} 
        style={{ width: '100%', height: '100%' }} 
      />
    </Box>
  );
};

export default LottieAnimation;