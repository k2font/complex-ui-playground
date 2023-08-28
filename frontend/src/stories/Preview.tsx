import React from 'react';
import './preview.css';

export const Preview = () => {
  return (
    <>
      <div className="preview">
        <video
          loop
          muted
          autoPlay
          playsInline
          style={{ width: "100%" }}
        >
          <source
            src="./test6.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};
