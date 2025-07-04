"use client";

import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "@/data/music_courses.json" assert { type: 'json' };
import { div } from "framer-motion/client";
import Link from "next/link";

type Course = {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
};

function FeaturedSection() {

    const featuredCourses = (courseData as { courses: Course[] }).courses.filter(course => course.isFeatured)

    return (
        <div className="min-h-screen py-10 bg-gray-900 flex flex-col justify-center items-center px-4">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-white">Featured Courses</h2>
                <p>Learn With The Best</p>
            </div>

            <div className="my-10 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center sm:mx-10 lg:mx-20">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="h-full">
                            <BackgroundGradient className="h-full rounded-[22px] p-6 bg-zinc-900 overflow-hidden flex flex-col">
                                <div className="flex flex-col items-center text-center h-full">
                                    <h3 className="text-xl font-semibold mb-3 line-clamp-2 h-16 flex items-center justify-center text-neutral-200">{course.title}</h3>
                                    <div className="min-h-[100px] max-h-[100px] overflow-hidden mb-4">
                                        <p className="text-neutral-700 dark:text-neutral-300 text-sm opacity-90 line-clamp-4">
                                            {course.description}
                                        </p>
                                    </div>
                                    <div className="mt-auto w-full">
                                        <Link 
                                            href={`/courses/${course.slug}`} 
                                            className="w-full inline-block px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                        >
                                            Learn More →
                                        </Link>
                                    </div>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <Link href="/courses" 
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-black hover:shadow transition-all duration-200"
          >View All Courses</Link>
            </div>

        </div>
    )
}

export default FeaturedSection