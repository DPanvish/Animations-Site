// App.jsx — Renders all site sections and wraps the component with Sentry profiling
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
    // Page wrapper (full width/height, prevent horizontal scroll)
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      {/* Top navigation */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* About section */}
      <About />

      {/* Features grid */}
      <Features />

      {/* Story showcase */}
      <Story />

      {/* Contact section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  )
}

// Export with Sentry profiler for simple performance traces
export default Sentry.withProfiler(App)
