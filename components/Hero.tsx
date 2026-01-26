"use client"

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
const Hero = () => {

  const scroll = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(boxRef.current, {
      duration: 3,
      rotation: 360,
      scale: 1.5,
      yoyo: true,
      repeat: -1,
    })
  });

  useGSAP(() => {
    gsap.fromTo(scroll.current, {
      scrollTrigger: scroll.current,
      x: -500,
      ease: "elastic"

    }, 
  {
    x: 0
  })
  })
  return (
    <section className='hero h-svh bg-[#171616] text-white grid place-items-center' ref={scroll}>
        <div className="w-20 h-20 rounded-lg bg-white" ref={boxRef} ></div>
    </section>
  )
}

export default Hero