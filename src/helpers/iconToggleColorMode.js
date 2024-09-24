import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';

function ToggleColorMode({ mode, toggleColorMode }) {
  return (
    <Box sx={{ 
          maxWidth: '32px', 
          borderRadius: "50%",
          border: "1px solid transparent",
          transition: "border400ms ease-out",
          '&:hover': {
              transition: "border 400ms ease-out",
              border: "1px solid #0099ff",
          },
       }}>
      <Button
        variant="text"
        onClick={toggleColorMode}
        size="small"
        aria-label="button to toggle theme"
        sx={{ minWidth: '32px', height: '32px', p: '4px', borderRadius: "50%" }}
      >
        {mode === 'dark' ? (
          <WbSunnyRoundedIcon fontSize="small" sx={{ color: "ligth" ? "#ffea00" : ""}}/>
        ) : (
          <ModeNightRoundedIcon fontSize="small" sx={{ color: "ligth" ? "#0099ff" : ""}}/>
        )}
      </Button>
    </Box>
  );
}

ToggleColorMode.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default ToggleColorMode;