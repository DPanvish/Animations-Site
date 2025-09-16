// BentoCard.jsx — Simple video background card with text overlay
import React from 'react'

const BentoCard = ({src, title, description}) => {
  return (
    <div className="relative size-full">
      {/* Background video */}
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute top-0 left-0 object-cover object-center size-full"
      />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col justify-between p-5 size-full text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>

          {description && (
            <p className="mt-3 text-xs max-w-64 mb:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default BentoCard