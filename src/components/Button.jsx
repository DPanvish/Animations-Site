// Button.jsx — Reusable button with optional icons and extra classes
import React from 'react'

const Button = ({title, id, rightIcon, leftIcon, containerClass}) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit bg-violet-50 cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}
    >
      {/* Left icon */}
      {leftIcon}

      {/* Label */}
      <span className="relative overflow-hidden text-xs uppercase incline-flex font-general">
        <div>
          {title}
        </div>
      </span>

      {/* Right icon */}
      {rightIcon}
    </button>
  )
}

export default Button