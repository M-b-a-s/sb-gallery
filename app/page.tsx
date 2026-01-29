"use client"

import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import SomeSection from '@/components/SomeSection'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SomePage from '@/components/SomePage'


gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const container= useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const someRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(heroRef.current, {xPercent: -100})
    .from(footerRef.current, {xPercent: 100})
    .from(someRef.current, {yPercent: -100})

    ScrollTrigger.create({
      animation: tl,
      trigger: container.current,
      start: "top top",
      scrub: true,
      pin: true,
      anticipatePin: 1
    })
  })

  return (
    <main>
    <SomePage/>
      <Hero />
      <Footer />
      <SomeSection />
    </main>
  )
}

export default Home