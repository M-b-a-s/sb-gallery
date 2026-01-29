"use client"

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import musicIcon from '@/public/music-icon.svg'

gsap.registerPlugin(ScrollTrigger)

const SomePage = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    gsap.to(imageRef.current, {
      y: 80,
      duration: 1,
      scale: 1.2,
      yoyo: true,
      repeat: -1,
    })
  })
  return (
    <section className='h-svh text-white bg-slate-600 flex items-center justify-center'>
        <Image src={musicIcon} alt='music icon' className='size-23' ref={imageRef}/>
    </section>
  )
}

export default SomePage