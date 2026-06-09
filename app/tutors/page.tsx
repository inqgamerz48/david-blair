"use client";

import { motion } from "framer-motion";
import TutorCard from "@/components/TutorCard";
import { tutors } from "@/data/tutors";

export default function TutorsGridPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <div className="w-full min-h-screen py-16 relative overflow-hidden bg-pageBg">
      {/* Decorative Blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary text-xs font-bold rounded-none uppercase tracking-wider"
          >
            Our Team
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut", delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brandNavy tracking-tight"
          >
            Meet Our Professional Tutors
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut", delay: 0.2 }}
            className="text-textSecondary text-base md:text-lg leading-relaxed font-normal"
          >
            Our native-level teachers are fully dedicated to providing structured lessons that build real confidence. Click on a tutor to view their full profile and video introduction.
          </motion.p>
        </div>

        {/* Tutors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {tutors.map((tutor, idx) => (
            <motion.div key={tutor.slug} variants={itemVariants}>
              <TutorCard tutor={tutor} index={idx} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
