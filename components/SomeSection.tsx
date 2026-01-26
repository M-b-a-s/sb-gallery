"use client"

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

import truckImage from "@/components/truck.svg"
import Image from "next/image"

const SomeSection = () => {
    const truckRef = useRef<HTMLImageElement>(null);
    useGSAP(() => {
    gsap.to(truckRef.current, {
      x: 100,  
      duration: 3,
      yoyo: true,
      repeat: -1,
      lazy: true
    })
  });
    
  return (
    <section className='h-svh bg-[#041608] text-white grid place-items-center'>
        <Image src={truckImage} alt="truck image" ref={truckRef}/>
    </section>
  )
}

export default SomeSection