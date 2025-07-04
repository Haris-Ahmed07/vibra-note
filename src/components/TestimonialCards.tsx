"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/cn";
import testimonialsData from "@/data/testimonials.json";

// Format the testimonials to match the expected structure
const formattedTestimonials = testimonialsData.testimonials.map(testimonial => ({
  quote: testimonial.quote,
  name: testimonial.name,
  title: testimonial.role,
  image: testimonial.image
}));

function TestimonialCards() {
    return (
        <div className={cn(
            "min-h-screen ",
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            "py-12  relative flex flex-col overflow-hidden h-[45rem]  mx-auto flex justify-center items-center bg-black bg-grid-white/[0.2]"
        )}>
            <div>
                <h1 className="text-4xl font-bold text-center mb-12 text-white">Hear Our Harmony: Voices of Success</h1>
            </div>
            <div>
                <InfiniteMovingCards items={formattedTestimonials} direction="left" speed="normal" pauseOnHover={true} />
            </div>
        </div>
    )
}

export default TestimonialCards