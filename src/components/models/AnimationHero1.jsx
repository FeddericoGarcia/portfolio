import React from 'react';
import Lottie from 'lottie-react';
import { Box } from '@mui/material'

import animationData from './Animation-monitor-with-bug-rocket.json'

const LottieAnimation = () => {
  return (
    <Box sx={{ 
      width: {xs: '8rem', sm: '8rem', md: '21rem'}, 
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