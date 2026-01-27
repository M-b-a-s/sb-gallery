"use client"

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
      gsap.to(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          toggleActions: "restart pause reverse none",
          scrub: 2,
          markers: true
        },
        x: 500,
        rotation: 360,
        duration: 3,
        ease: "none"
      })
  });
  return (
    <footer className='h-svh bg-[#361f03] flex justify-start'>
        <div className=''>
            <div className='w-15 h-15 bg-white rounded-lg' ref={cardRef}></div>
        </div>
    </footer>
  )
}

export default Footer