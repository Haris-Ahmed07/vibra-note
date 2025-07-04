"use client";

import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'
import { WavyBackground } from './ui/wavy-background'

function HeroSection() {
    return (
        <div className='min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-black'>
            <WavyBackground className="w-full h-full absolute inset-0">
                <Spotlight
                    className="-top-40 left-0 md:-top-10 md:left-60"
                    fill="white"
                />
            </WavyBackground>
            <div className='relative z-10 w-full max-w-6xl px-4 text-center text-white'>
                <div className='flex flex-col items-center justify-center h-full'>
                    <h1 className='text-4xl md:text-7xl font-bold mb-6'>Master The Art Of Music</h1>
                    <p className='text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto mb-8 leading-relaxed'>
                        Dive into the world of music and learn how to play the guitar, piano, violin, and drums.
                        Join our community of music enthusiasts and start your journey today!
                    </p>
                    <div className='mt-5'>
                        <Button className='bg-black font-semibold px-8 py-3 text-lg '>
                            <Link href="/courses" >Explore Courses</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HeroSection
