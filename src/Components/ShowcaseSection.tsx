'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function ShowcaseSection() {
    const sectionRef = useRef(null)
    const imageWrapperRef = useRef(null)
    const contentRef = useRef(null)
    const finalCtaRef = useRef(null)

    const [isMobile, setIsMobile] = useState(false)
    const [navbarHeight, setNavbarHeight] = useState(0)

    /* ----------------------------------
       Detect Mobile + Navbar Height
    ---------------------------------- */
    useEffect(() => {
        const updateMeasurements = () => {
            setIsMobile(window.innerWidth <= 768)

            const navbar = document.querySelector('nav')
            if (navbar) {
                setNavbarHeight(navbar.offsetHeight)
            }
        }

        updateMeasurements()

        window.addEventListener('resize', updateMeasurements)

        return () => window.removeEventListener('resize', updateMeasurements)
    }, [])

    /* ----------------------------------
       GSAP Animation
    ---------------------------------- */
    useEffect(() => {
        if (typeof window === 'undefined') return
        if (isMobile) return
        if (!sectionRef.current) return
        if (!imageWrapperRef.current) return
        if (!contentRef.current) return
        if (!finalCtaRef.current) return
        if (!navbarHeight) return

        const section = sectionRef.current
        const imageWrapper = imageWrapperRef.current
        const content = contentRef.current
        const finalCta = finalCtaRef.current

        // Remove old triggers
        ScrollTrigger.getAll().forEach(st => {
            if (st.vars.trigger === section) {
                st.kill()
            }
        })

        const ctx = gsap.context(() => {

            /* Initial State */
            gsap.set(imageWrapper, {
                width: '30vw',
                height: '40vh',
                borderRadius: '24px',
                left: '8vw',
                top: '15vh',
                x: 0
            })

            gsap.set(content, {
                opacity: 1,
                y: 0
            })

            gsap.set(finalCta, {
                opacity: 0,
                y: 50,
                scale: 0.95
            })

            /* Timeline */
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: '+=200%',
                    scrub: 0.5,
                    pin: true,
                    anticipatePin: 1
                }
            })

            /* Organic Morph */
            tl.to(imageWrapper, {
                borderRadius: '30% 20% 25% 35%',
                width: '38vw',
                height: '48vh',
                duration: 0.12
            })

            tl.to(imageWrapper, {
                borderRadius: '55% 35% 45% 55%',
                width: '48vw',
                height: '58vh',
                duration: 0.12
            })

            tl.to(imageWrapper, {
                borderRadius: '70% 30% 60% 40%',
                width: '58vw',
                height: '68vh',
                duration: 0.12
            })

            tl.to(imageWrapper, {
                borderRadius: '30% 30% 30% 30%',
                width: '78vw',
                height: '82vh',
                duration: 0.12
            })

            /* Fullscreen */
            tl.to(imageWrapper, {
                borderRadius: '0px',
                width: '100vw',
                height: '100vh',
                left: 0,
                top: 0,
                duration: 0.15
            })

            /* Fade Side Content */
            tl.to(content, {
                opacity: 0,
                y: '-15vh',
                duration: 0.5
            }, 0)

            /* Final CTA */
            tl.to(finalCta, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.15
            }, '-=0.05')

        }, sectionRef)

        return () => {
            ctx.revert()
        }

    }, [isMobile, navbarHeight])

    /* ----------------------------------
       JSX
    ---------------------------------- */
    return (

        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-indigo-900"
            style={{
                minHeight: '100vh',
                paddingTop: `${navbarHeight}px`
            }}
        >

            {/* MOBILE */}
            {isMobile ? (

                <div className="px-4 py-16 text-center">

                    <div className="relative h-[300px] rounded-2xl overflow-hidden mb-8">

                        {/* Video */}
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source
                                src="https://www.pexels.com/download/video/6563896/"
                                type="video/mp4"
                            />
                        </video>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60" />

                    </div>

                    <h2 className="text-white text-2xl font-bold mb-4">
                        Data-Driven Growth
                    </h2>

                    <p className="text-indigo-200 mb-6">
                        Verified business intelligence for scaling teams
                    </p>

                    <a
                        href="#contact"
                        className="inline-block px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold"
                    >
                        Get Started
                    </a>

                </div>

            ) : (

                /* DESKTOP */
                <div className="relative w-full h-screen">

                    {/* Background */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                                radial-gradient(circle at 20% 30%, rgba(139,92,246,0.15), transparent 50%),
                                radial-gradient(circle at 80% 70%, rgba(99,102,241,0.1), transparent 50%)
                            `
                        }}
                    />

                    {/* VIDEO CONTAINER */}
                    <div
                        ref={imageWrapperRef}
                        className="absolute z-20 overflow-hidden shadow-2xl"
                        style={{
                            width: '30vw',
                            height: '40vh',
                            borderRadius: '24px',
                            left: '8vw',
                            top: '15vh',
                            willChange: 'transform, width, height, left, top'
                        }}
                    >

                        {/* Video */}
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source
                                src="https://www.pexels.com/download/video/6563896/"
                                type="video/mp4"
                            />
                        </video>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 z-10" />

                        <div className="absolute inset-0 bg-indigo-900/30 z-10" />

                        {/* Content */}
                        <div className="absolute bottom-8 left-8 z-20">

                            <h3 className="text-white text-3xl font-bold">
                                IXOLINK
                            </h3>

                            <p className="text-white/80 text-sm mt-1">
                                Reliable Data Solutions
                            </p>

                        </div>

                    </div>


                    {/* SIDE CONTENT */}
                    <div
                        ref={contentRef}
                        className="absolute z-30"
                        style={{
                            right: '8vw',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            maxWidth: 420
                        }}
                    >

                        <h2 className="text-white text-4xl font-bold mb-6 leading-tight">

                            Data-Driven <br />

                            <span className="text-indigo-300">
                                Intelligence
                            </span>

                        </h2>

                        <p className="text-indigo-200 mb-8 leading-relaxed">

                            Verified B2B & B2C data for high-performing sales
                            teams and revenue-focused organizations.

                        </p>

                        <a
                            href="#services"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600 rounded-full text-white font-medium"
                        >
                            Explore Services →
                        </a>

                    </div>


                    {/* FINAL CTA */}
                    <div
                        ref={finalCtaRef}
                        className="absolute inset-0 z-40 flex items-center justify-center"
                        style={{ opacity: 0 }}
                    >

                        <div className="text-center max-w-3xl px-8">

                            <h2 className="text-white text-5xl font-bold mb-8 leading-tight">

                                Grow Faster With
                                Verified Intelligence

                            </h2>

                            <a
                                href="#contact"
                                className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-xl"
                            >
                                Request Consultation
                            </a>

                        </div>

                    </div>

                </div>

            )}

        </section>
    )
}
