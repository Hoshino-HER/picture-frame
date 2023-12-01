import * as React from 'react';
import Dialog from '@mui/material/Dialog';

export default function FullScreenDialog() {

  return (
    <Dialog
      fullScreen
      open={true}
      sx={{ zIndex: 3000 }}
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
  );
}