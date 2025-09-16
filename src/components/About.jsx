// About.jsx — Simple clip-path reveal section with title animation
import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

import ScrollTrigger from 'gsap/all'
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // Run animations when the component mounts
  useGSAP(() => {
    // Scroll-based clip animation
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true
      }
    })

    // Expand masked image to full screen
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0
    })
  })

  return (
    <div id="about" className="w-screen min-h-screen">
      {/* Title area */}
      <div className="relative flex flex-col items-center gap-5 mb-8 mt-36">
        <h2 className="font-general text-sm uppercase md:text-[20px]">Welcome to Zentry</h2>

        <AnimatedTitle 
          title="Disc<b>o</b>ver the world's <br/> l<b>a</b>rgest shared adventure"
          containerClass="mt-5 !text-black text-center"
        />

        {/* Small caption text */}
        <div className="about-subtext">
          <p>The Game of Games begins-your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>

      {/* Scroll pinned image area */}
      <div className="w-screen h-dvh" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp" 
            alt="Background"
            className="absolute top-0 left-0 object-cover size-full"
          />
        </div>
      </div>
    </div>
  )
}

export default About