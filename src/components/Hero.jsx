import React, { useRef, useState } from 'react'
import Button from './Button';

const Hero = () => {

  const [currentIdx, setCurrentIdx] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const nextVideoRef = useRef(null);

  const handleMiniVideoClick = () => {
    setHasClicked(true);

    setCurrentIdx((prevIdx) => (prevIdx % totalVideos) + 1);
  }

  const handleVideoLoad = () => {
    setLoadedVideos((prevLoadedVideos) => prevLoadedVideos + 1);
  }

  const getVideoSrc = (idx) => `videos/hero-${idx}.mp4`;

  return (
    <div className="relative w-screen overflow-x-hidden h-dvh">
      <div id="video-frame" className="relative z-10 w-screen overflow-hidden rounded-lg h-dvh bg-blue-75">
        <div>
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

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIdx)}
            loop
            muted
            id="next-video"
            className="absolute z-20 invisible object-cover object-center absolute-center size-64"
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVideoSrc(currentIdx === totalVideos - 1 ? 1 : currentIdx)}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 object-contain object-cover size-full"
            onLoadedData={handleVideoLoad}
          />
        </div>

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

            <Button id="watch-trailer" title="Watch Trailer"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
