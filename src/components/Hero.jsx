// Hero.jsx — Video background hero with small preview trigger
import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // Video state
  const [currentIdx, setCurrentIdx] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  // Switch to next video when the small preview is clicked
  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIdx((prevIdx) => (prevIdx % totalVideos) + 1);
  }

  // Track when videos have loaded to hide the loader
  const handleVideoLoad = () => {
    setLoadedVideos((prevLoadedVideos) => prevLoadedVideos + 1);
  }

  useEffect(() => {
    if(loadedVideos === totalVideos - 1){
      setIsLoading(false);
    }
  }, [loadedVideos])

  const getVideoSrc = (idx) => `videos/hero-${idx}.mp4`;

  // Expand the next video into view when clicked
  useGSAP(() => {
    if(hasClicked){
      gsap.set("#next-video", { visibility: "visible" });

      gsap.to("#next-video", {
        transformOrigin: "center center",
        scale: 1,
        width: "100%",
        height: "100%",
        duration: 1,
        ease: "power1.inOut",
        onStart: () => nextVideoRef.current.play(),
      });

      gsap.from("#current-video", {
        transformOrigin: "center center",
        scale: 0,
        duration: 1.5,
        ease: "power1.inOut"
      })
    }
  }, {dependencies: [currentIdx], revertOnUpdate: true});

  // Simple clip-path intro animation
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%"
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      }
    })
  })

  return (
    <div className="relative w-screen overflow-x-hidden h-dvh">
      {/* Lightweight loader while videos buffer */}
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      {/* Main masked video area */}
      <div id="video-frame" className="relative z-10 w-screen overflow-hidden rounded-lg h-dvh bg-blue-75">
        <div>
          {/* Small preview in the center */}
          <div className="absolute z-50 overflow-hidden rounded-lg cursor-pointer mask-clip-path absolute-center size-64">
            <div onClick={handleMiniVideoClick} className="transition-all duration-500 ease-in origin-center scale-50 opacity-0 hover:scale-100 hover:opacity-100">
              <video
                ref={nextVideoRef}
                src={getVideoSrc((currentIdx % totalVideos) + 1)}
                loop
                muted
                id="current-video"
                className="object-cover object-center origin-center scale-150 size-64"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          {/* Next video expands to fullscreen */}
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIdx)}
            loop
            muted
            id="next-video"
            className="absolute z-20 invisible object-cover object-center absolute-center size-64"
            onLoadedData={handleVideoLoad}
          />

          {/* Background video */}
          <video
            src={getVideoSrc(currentIdx === totalVideos - 1 ? 1 : currentIdx)}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 object-cover size-full"
            onLoadedData={handleVideoLoad}
          />
        </div>

        {/* Titles and CTA */}
        <h1 className="absolute z-40 special-font hero-heading bottom-5 right-5 text-blue-75">
          G<b>a</b>ming
        </h1>

        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="px-5 mt-24 sm:10">
            <h1 className="text-blue-100 special-font hero-heading">
              redefi<b>n</b>E
            </h1>

            <p className="mb-5 text-blue-100 max-w-64 font-robert-regular">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>

            <Button 
              id="watch-trailer" 
              title="Watch Trailer" 
              leftIcon={<TiLocationArrow />} 
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>

      {/* Outline text */}
      <h1 className="absolute text-black special-font hero-heading bottom-5 right-5">
        G<b>a</b>ming
      </h1>
    </div>
  )
}

export default Hero