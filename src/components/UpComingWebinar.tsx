"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import webinars from "@/data/webinars.json";

// Map the webinars data to match the expected format for HoverEffect
const formattedWebinars = webinars.webinars.map(webinar => ({
  title: webinar.title,
  description: webinar.description,
  link: `/webinars/${webinar.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`
}));

function UpComingWebinar() {
  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wid uppercase">FEATURE WEBINARS</h2>
          <p className="text-white mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Enhance Your Music Journey
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect items={formattedWebinars} />
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/webinars"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-black hover:shadow transition-all duration-200"
          >
            View All Webinars
          </Link>

        </div>
      </div>
    </div>
  )
}

export default UpComingWebinar