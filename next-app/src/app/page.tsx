"use client";
import * as React from 'react';
import { useState } from 'react';

import ImageDialog from '../components/ImageDialog';
import GooglePicker from '../components/GooglePicker';
import { Box } from '@mui/material';
import getDocs from '../utils/drive-list';

export default function FullScreenDialog() {
  const [targets, setTargets] = useState(['https://source.unsplash.com/random']);

  async function onSelectFolder(folderId: string) {
    const result = await getDocs(folderId);
    console.log(result);
    const files = result.files?.map(file => `https://drive.google.com/uc?export=view&id=${file.id}`);
    console.log(files);
    files && setTargets(files);
  };

  return (
    <React.Fragment>
      <ImageDialog
        open={true}
        sx={{ zIndex: -1000 }}
        urls={targets}
        interval={5000}
      />
      <Box>
        {/* <ImageMenu /> */}
        <GooglePicker onSelect={onSelectFolder} />
      </Box>
    </React.Fragment>
  );
}
