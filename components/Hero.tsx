"use client"

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
const Hero = () => {

  const boxRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: 300,
      duration: 3,
    })
  })
  return (
    <section className='hero h-svh bg-[#171616] text-white'>
        <h1 className='text-4xl font-semibold'>Hero</h1>
        <div className="w-30 h-30 box rounded-lg bg-white" ref={boxRef}></div>
    </section>
  )
}

export default Hero