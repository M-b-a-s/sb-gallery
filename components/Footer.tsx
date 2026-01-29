"use client"

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          toggleActions: "restart pause reverse none",
          start: "top center",
          pin: true,
          scrub: 2,
        }
      })
      tl.to(cardRef.current, {
        x: 500,
        rotation: 360,
        duration: 3,
        ease: "none"
      })
      .to(cardRef.current, {
        backgroundColor: "black",
        duration: 1
      })
      .to(cardRef.current, {
        X: 0,
        duration: 3
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