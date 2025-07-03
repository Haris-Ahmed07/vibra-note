"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import whyChooseUsData from "@/data/why-choose-us.json" assert { type: 'json' };

const whyChooseUsContent = whyChooseUsData.whyChooseUsContent;

const content = whyChooseUsContent.map((item, index) => ({
  ...item,
  content: (
    <div 
      key={index}
      className={`flex h-full w-full items-center justify-center text-white p-8 ${
        index % 2 === 0 
          ? "bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))]"
          : "bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--teal-500))]"
      }`}
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
        <p className="opacity-90">{item.description}</p>
      </div>
    </div>
  ),
}));

function WhyChooseUs() {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Music Academy</h2>
        <StickyScroll content={content} contentClassName="h-[28rem] w-full max-w-[800px] mx-auto" />
      </div>
    </div>
  );
}

export default WhyChooseUs;