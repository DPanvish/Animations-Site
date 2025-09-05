import React, { useRef, useState } from 'react'

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
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div onClick={handleMiniVideoClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
              <video
                ref={nextVideoRef}
                src={getVideoSrc((currentIdx % totalVideos) + 1)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
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
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVideoSrc(currentIdx === totalVideos - 1 ? 1 : currentIdx)}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-contain"
            onLoadedData={handleVideoLoad}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
