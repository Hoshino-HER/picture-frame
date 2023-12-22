"use client";
import * as React from 'react';
import { useState } from 'react';

import ImageDialog from '../components/ImageDialog';
import GooglePicker from '../components/GooglePicker';
import { Box } from '@mui/material';

export default function FullScreenDialog() {
  const [target, setTarget] = useState('https://source.unsplash.com/random');

  return (
    <React.Fragment>
      <ImageDialog
        open={true}
        sx={{ zIndex: -1000 }}
        urls={[target, target, target]}
        interval={5000}
      />
      <Box>
        {/* <ImageMenu /> */}
        <GooglePicker onSelect={setTarget} />
      </Box>
    </React.Fragment>
  );
}
