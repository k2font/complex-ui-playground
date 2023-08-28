import React, { useState } from 'react'
import './slider.css';

type SliderProps = {
  backgroundColor: string,
}

export const Slider = ({
  backgroundColor,
  ...props
}: SliderProps) => {
  const [value, setValue] = useState(45)
  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  return (
    <>
      <div className="slider">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="input-range"
        />
      </div>
    </>
  )
}