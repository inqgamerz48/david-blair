"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The personalized learning plan completely transformed my child's attitude towards English. He's no longer afraid to speak and looks forward to every session.",
    author: "Kim Ji-ah",
    role: "Parent of 9yo Elementary Learner"
  },
  {
    quote: "David & Blair is easily the best tutoring we have ever experienced. Outstanding, structured approach and incredibly warm tutors who focus on actual confidence.",
    author: "Park Sang-hun",
    role: "Parent of 14yo Middle Schooler"
  },
  {
    quote: "My daughter's speaking fluency grew remarkably in just three months. They focus on natural pronunciation and interactive conversation, not boring memorization.",
    author: "Lee Min-seo",
    role: "Parent of 11yo Beginner"
  }
];

export default function TestimonialSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      animate(0, 99, {
        duration: 1.8,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (percentRef.current) {
            percentRef.current.textContent = `${Math.round(latest)}%`;
          }
        }
      });
    }
  }, [isInView]);

  // 2. Auto-rotation effect for carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section ref={containerRef} className="py-24 bg-altBg border-y border-primary/5 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Headline & Stats */}
          <div className="lg:col-span-5 space-y-6">
            <span className="px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary text-xs font-bold rounded-none uppercase tracking-wider">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brandNavy tracking-tight leading-tight">
              Voices From Our Happy Parents
            </h2>
            <p className="text-textSecondary leading-relaxed text-base font-normal">
              We focus on building lasting communication skills and true conversational confidence, backed by years of success.
            </p>
            
            {/* Massive Stats Display */}
            <div className="pt-6 border-t border-primary/10 flex items-center gap-6">
              <span ref={percentRef} className="text-6xl md:text-7xl font-serif font-bold text-primary tracking-tight">
                0%
              </span>
              <div>
                <p className="text-lg font-serif font-bold text-textPrimary leading-tight">Parent Satisfaction Rate</p>
                <p className="text-sm text-textSecondary mt-0.5 font-normal">Based on quarterly feedback surveys</p>
              </div>
            </div>
          </div>

          {/* Right Column - Stacked testimonials cards */}
          <div className="lg:col-span-7 flex flex-col items-center relative min-h-[380px] justify-center">
            {/* Height of relative wrapper is set to prevent content collapse */}
            <div className="w-full max-w-xl relative h-[320px]">
              {testimonials.map((testimonial, idx) => {
                const isSelected = activeIndex === idx;
                // Circular modulo offset to show cards behind active card correctly
                const offset = (idx - activeIndex + testimonials.length) % testimonials.length;

                return (
                  <motion.div
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    style={{
                      zIndex: testimonials.length - offset,
                    }}
                    animate={{
                      y: offset * 16,
                      x: offset * 16,
                      scale: 1 - offset * 0.04,
                      opacity: 1 - offset * 0.3,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`bg-white rounded-none p-8 md:p-10 border border-primary/5 shadow-premium absolute top-0 left-0 right-0 cursor-pointer origin-top-left transition-shadow duration-300 ${
                      isSelected ? "border-2 border-primary" : "hover:border-primary/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-none bg-primary-light flex items-center justify-center text-primary">
                        <Quote className="w-6 h-6 fill-current" />
                      </div>
                      <span className="text-xs font-semibold text-textSecondary uppercase tracking-widest">
                        Parent Story
                      </span>
                    </div>

                    <p className="text-textPrimary text-base md:text-lg italic font-medium leading-relaxed mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    <div>
                      <h4 className="text-textPrimary font-serif font-bold text-base">{testimonial.author}</h4>
                      <p className="text-textSecondary text-xs font-semibold uppercase tracking-wider mt-0.5">
                        {testimonial.role}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Carousel navigation indicators */}
            <div className="flex space-x-2 mt-8 relative z-20">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3.5 h-3.5 rounded-none transition-all duration-300 ${
                    activeIndex === idx ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
