// Navbar.jsx — Hides on scroll down, shows on scroll up; simple audio indicator
import React, { use, useEffect, useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti';
import Button from './Button';
import gsap from 'gsap';
import { useWindowScroll } from 'react-use';

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
  // UI state
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIndicatorActive] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const {y: currScrollY} = useWindowScroll();

  // Toggle nav bar visibility based on scroll direction
  useEffect(() => {
    if(currScrollY === 0){
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    }else if(currScrollY > prevScrollY){
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    }else if(currScrollY < prevScrollY){
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setPrevScrollY(currScrollY);
  }, [currScrollY, prevScrollY]);

  // Animate nav show/hide
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    })
  }, [isNavVisible])
  
  // Toggle audio playback + visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIndicatorActive((prev) => !prev);
  }

  useEffect(() => {
    if(isAudioPlaying){
      audioElementRef.current.play();
    }else{
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div ref={navContainerRef} className="fixed inset-x-0 z-50 h-16 transition-all duration-700 border-none top-4 sm:inset-x-6">
      <header className="absolute w-full -translate-y-1/2 top-1/2">
        <nav className="flex items-center justify-between p-4 size-full">
          {/* Brand + products button */}
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />

            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          {/* Links + audio */}
          <div className="flex items-center h-full">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="nav-hover-btn">
                  {item}
                </a>
              ))}
            </div>

            {/* Audio + bars indicator */}
            <button className="ml-10 flex items-center space-x-0.5" onClick={toggleAudioIndicator}>
              <audio ref={audioElementRef} className="hidden" src="/audio/loop.mp3" loop />

              {/* Animation lines */}
              {[1, 2, 3, 4].map((bar) => (
                <div 
                  key={bar} 
                  className={`indicator-line ${isIndicatorActive ? "active" : ""}`} 
                  style={{animationDelay: `${bar * 0.1}s`}}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar