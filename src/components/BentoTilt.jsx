// BentoTilt.jsx — Adds a slight 3D tilt effect to its children
import React, { useRef, useState } from 'react'

const BentoTilt = ({children, className=""}) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  // Update transform based on mouse position
  const handleMouseMove = (e) => {
    if(!itemRef.current){
      return;
    }

    const {left, top, width, height} = itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeX - 0.5) * 8;
    const tiltY = (relativeY - 0.5) * -8;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform);
  }

  // Reset on leave
  const handleMouseLeave = () => {
    setTransformStyle("");
  }

  return (
    <div 
      className={className} 
      ref={itemRef} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      style={{transform: transformStyle}}
    >
      {children}
    </div>
  )
}

export default BentoTilt