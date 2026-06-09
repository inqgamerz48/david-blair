"use client";

import { motion } from "framer-motion";
import { ClipboardList, CheckCircle2, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: <ClipboardList className="w-8 h-8 text-primary" />,
      title: "Book Online",
      description: "Fill in our simple, fast session request form.",
    },
    {
      number: "2",
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      title: "We Confirm",
      description: "We reach out to finalize your details within 24 hours.",
    },
    {
      number: "3",
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Start Learning",
      description: "Attend your first custom session and build confidence.",
    },
  ];

  return (
    <section className="py-24 bg-creamBg relative overflow-hidden w-full">

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary text-xs font-bold rounded-none uppercase tracking-wider">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brandNavy tracking-tight leading-tight mt-6">
            From Booking to Learning in 3 Simple Steps
          </h2>
        </div>

        {/* Steps Container */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-8">
          
          {/* Animated Dotted SVG Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-20 left-[15%] right-[15%] h-1 z-0 pointer-events-none">
            <svg
              className="w-full overflow-visible"
              viewBox="0 0 800 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M 0 10 Q 200 0, 400 10 T 800 10"
                stroke="rgb(var(--primary))"
                strokeWidth="3"
                strokeDasharray="6, 8"
                strokeLinecap="round"
                className="opacity-40"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2.0, ease: "easeInOut", delay: 0.3 }}
              />
            </svg>
          </div>

          {/* Individual Steps */}
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: idx * 0.2, ease: "easeInOut" }}
              className="flex flex-col items-center text-center relative z-10 group"
            >
              {/* Step Circle with Icon */}
              <div className="relative mb-6">
                {/* Step number badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-none flex items-center justify-center font-bold text-sm shadow-premium border border-white">
                  {step.number}
                </div>
                {/* Circle Wrapper */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="w-24 h-24 rounded-none bg-white border border-primary/10 flex items-center justify-center shadow-premium group-hover:border-primary/30 transition-all duration-300"
                >
                  {step.icon}
                </motion.div>
              </div>

              {/* Text details */}
              <h3 className="text-xl font-serif font-bold text-brandNavy mb-3 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-textSecondary text-sm md:text-[15px] leading-relaxed max-w-xs font-normal">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
