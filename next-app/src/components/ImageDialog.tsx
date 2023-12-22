import React, { useState, useEffect } from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';

interface ImageDialogProps extends DialogProps {
  onEnd?: () => void;
  interval?: number;
  urls: string[];
}

export default function ImageDialog(
  { onEnd, urls, interval, ...props }: ImageDialogProps
) {
  const [curImgIndex, setCurImgIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isPlaying && urls.length) {
      // タイマーを設定して画像を周期的に更新
      timer = setInterval(() => {
        const nextIndex = curImgIndex + 1;
        if (nextIndex < urls.length) {
          console.log(`increment: ${curImgIndex} -> ${nextIndex}`);
          setCurImgIndex(nextIndex);
        } else {
          // リストの最後に到達したらタイマーを停止
          setIsPlaying(false);
          clearInterval(timer);
          console.log('clearInterval: ' + timer);
        }
      }, interval);
      console.log('setInterval: ' + timer);
    }
    // コンポーネントがアンマウントされる時、またはインデックスが変更される時にタイマーをクリア
    return () => timer && clearInterval(timer);
  }, [curImgIndex, isPlaying, urls.length, interval]);

  useEffect(() => {
    setCurImgIndex(0);
    setIsPlaying(true);
    console.log('updated urls: ' + urls);
  }, [urls]);

  return (
    <Dialog {...props}>
      <img
        src={urls[curImgIndex]}
        alt="slideshow"
        style={{
          width: '100%', height: '100%',
          objectFit: 'contain', backgroundColor: 'black'
        }}
      />
    </Dialog>
  );
};
