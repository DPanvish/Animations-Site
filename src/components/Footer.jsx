import React from 'react'
import { FaDiscord, FaTwitch, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'

const links = [
  {href: "https://discord.com", icon: <FaDiscord/>},
  {href: "https://twitter.com", icon: <FaTwitter/>},
  {href: "https://github.com", icon: <FaGithub/>},
  {href: "https://instagram.com", icon: <FaInstagram/>},
  {href: "https://twitch.com", icon: <FaTwitch/>},
]

const Footer = () => {
  return (
    <footer className="w-screen py-4 text-black bg-violet-300">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 mx-auto md:flex-row">
            <p className="text-sm text-center md:text-left">
              ©Nova 2025. All rights reserved
            </p>

            <div className="flex justify-center gap-4 md:justify-start">
              {links.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href}
                  target="_black"
                  rel="noopener noreferrer"
                  className="text-black transition-colors duration-500 ease-in-out hover:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <a href="#privacy-policy" className="text-sm text-center hover:underline md:text-right">
              Privacy Policy
            </a>
        </div>
    </footer>
  )
}

export default Footer
