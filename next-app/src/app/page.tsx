"use client";
import * as React from 'react';
import Dialog from '@mui/material/Dialog';

import ImageMenu from '../components/ImageMenu';
import { Box } from '@mui/material';

export default function FullScreenDialog() {
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={true}
        sx={{ zIndex: -1000 }}
      >
        <img
          alt="Random image"
          src="https://source.unsplash.com/random"
          style={{
            width: '100%', height: '100%', 
            objectFit: 'contain', backgroundColor: 'black'
          }}
        />
      </Dialog>
      <Box>
        <ImageMenu />
      </Box>
      </React.Fragment>
  );
}
