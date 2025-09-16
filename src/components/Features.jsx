// Features.jsx — Bento grid with videos and simple cards
import React from 'react'
import BentoCard from './BentoCard'
import BentoTilt from './BentoTilt'
import { TiLocationArrow } from 'react-icons/ti'

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container px-3 mx-auto md:px-10">
        {/* Header text */}
        <div className="px-5 py-32">
          <p className="text-lg font-circular-web text-blue-50">
            Into the Metagame Layer
          </p>

          <p className="max-w-md text-lg opacity-50 font-circular-web text-blue-50">
            Immerse yourself in a rich and ever-expanding universe where 
            a vibrant array of products converge into an interconnected overlay 
            experience on your world.
          </p>
        </div>

        {/* Main wide card */}
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={<>radia<b>n</b>t</>} 
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </BentoTilt>

        {/* Grid of smaller cards */}
        <div className="grid h-[185vh] w-full grid-cols-2 grids-rows-3 gap-7">
          <BentoTilt className="row-span-1 bento-tilt_1 md:col-span-1 md:row-span-2">
            <BentoCard 
              src="videos/feature-2.mp4"
              title={<>zig<b>m</b>a</>}
              description="An anime and gaming-inspired NFT collection - the TP primed for expansion."
            />
          </BentoTilt>

          <BentoTilt className="row-span-1 bento-tilt_1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={<>n<b>e</b>xus</>}
              description="A gamified social hub, sdding a new dimension of play to social interaction for Web3 communities."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4" 
              title={<>az<b>u</b>l</>}
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex flex-col justify-between p-5 size-full bg-violet-300">
              <h1 className="text-black bento-title special-font max-w-64">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>oon!
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="object-cover object-center size-full" 
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  )
}

export default Features