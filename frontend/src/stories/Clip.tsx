import React, {useEffect, useRef} from 'react';
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
      <div className='clip_body'>
        <video
          muted
          autoPlay
          playsInline
          style={{width: "100%"}}
        >
          <source
            src={video}
            type="video/mp4"
          />
        </video>
      </div>
      <div className='clip_footer'>{name}</div>
    </div>
  )
}