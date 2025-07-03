"use client";

import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'
import { WavyBackground } from './ui/wavy-background'

function HeroSection() {
    return (
        <div className='h-screen md:h-[44rem] w-full rounded-md flex justify-center items-center flex-col relative overflow-hidden mx-auto py-10 md:py-0'>
            <WavyBackground className="max-w-4xl mx-auto pb-40">
                <Spotlight
                    className="-top-40 left-0 md:-top-10 md:left-60"
                    fill="white"
                />
                <div className='p-4 relative z-10 w-full text-center'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>Master The Art Of Music</h1>
                    <p className='mt-4 font-normal text-base md:text-lg text-neutral-3 max-w-lg mx-auto'>Dive into the world of music and learn how to play the guitar, piano, violin, and drums.
                        Join our community of music enthusiasts and start your journey today! </p>
                    <div className='mt-5 flex justify-center items-center'>
                        <Button className='bg-black font-bold'>
                            <Link href="/courses">Explore Courses</Link>
                        </Button>
                    </div>
                </div>
            </WavyBackground>
        </div >
    )
}

export default HeroSection
