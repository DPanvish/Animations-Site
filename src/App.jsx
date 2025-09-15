import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'
import * as Sentry from '@sentry/react'

const App = () => {
  return (
    <button
      onClick={() => {
        throw new Error('This is your first error!');
      }}
    >
      Break the world
    </button>
  );
  // return (
  //   <main className="relative w-screen min-h-screen overflow-x-hidden">
  //     <Navbar />
  //     <Hero />
  //     <About />
  //     <Features />
  //     <Story />
  //     <Contact />
  //     <Footer />
  //   </main>
  // )
}

export default Sentry.withProfiler(App);
