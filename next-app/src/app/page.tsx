"use client";
import * as React from 'react';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';

import ImageMenu from '../components/ImageMenu';
import GooglePicker from '../components/GooglePicker';
import { Box } from '@mui/material';

export default function FullScreenDialog() {
  const [target, setTarget] = useState('https://source.unsplash.com/random');

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={true}
        sx={{ zIndex: -1000 }}
      >
        <img
          alt="Random image"
          src={target}
          style={{
            width: '100%', height: '100%', 
            objectFit: 'contain', backgroundColor: 'black'
          }}
        />
      </Dialog>
      <Box>
        {/* <ImageMenu /> */}
        <GooglePicker onSelect={setTarget}/>
      </Box>
      </React.Fragment>
  );
}
