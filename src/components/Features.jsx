import React from 'react'
import BentoCard from './BentoCard'

const Features = () => {
  return (
    <section className="bg-black pb-52">
        <div className="container px-3 mx-auto md:px-10">
            <div className="px-5 py-32">
                <p className="text-lg font-circular-web text-blue-50">
                    Into the Metagame Layer
                </p>
            </div>

            <p className="max-w-md text-lg opacity-50 font-circular-web text-blue-50">
                    Immerse yourself in a rich and ever-expanding universe where 
                    a vibrant array of products converge into an interconnected overlay 
                    experience on your world.
            </p>
        </div>

        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
            <BentoCard />
        </div>
    </section>
  )
}

export default Features
