import React from 'react';
import './clip.css';

type ClipProps = {
  name: string,
  video: string,
}

export const Clip = ({
  name,
  video,
  ...props
}: ClipProps) => {
  return (
    <div className='clip'>
      <div className='clip_body'>{video}</div>
      <div className='clip_footer'>{name}</div>
    </div>
  )
}