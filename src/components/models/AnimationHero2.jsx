import React from 'react';
import Lottie from 'lottie-react';
import { Box } from '@mui/material'

import animationData from './Animation-status-web.json'

const LottieAnimation = () => {
  return (
    <Box sx={{ 
      width: {xs: '10rem', sm: '10rem', md: '23rem'}, 
      height: 'auto',  
      zIndex: -1,
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