"use client";
import people_data from "@/data/people_data.json";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

export default function Instructors() {
    return (
        <div className="relative h-[44rem] overflow-hidden flex justify-center items-center text-white">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
                <h1 className="text-7xl font-bold mb-5 text-center">Meet Our Instructors</h1>
                <p className="text-center">Learn from the best instructors in the world and start your journey today!</p>
                <div className="mt-10 flex-row flex" >
                    <AnimatedTooltip items={people_data.people} />
                </div>
            </WavyBackground>
        </div>

    )
}
