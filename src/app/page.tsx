import { main } from "motion/react-client";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection"; 
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpComingWebinar from "@/components/UpComingWebinar"; 
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="w-full">
        <HeroSection />
        <FeaturedSection />
        <div className="hidden md:block">
          <WhyChooseUs />
        </div>
        <TestimonialCards />  
        <UpComingWebinar />
        <Instructors />
        <Footer />
      </div>
    </main>
  );
}
