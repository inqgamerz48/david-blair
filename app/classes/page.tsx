"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Users, Clock, ShieldCheck, CheckCircle2, Calendar } from "lucide-react";

export default function ClassesPage() {
  const oneOnOneFeatures = [
    "100% personalized curriculum tailored to student weak points",
    "Choice of conversational focus, essay writing, or test prep (IELTS)",
    "Flexible schedules adapted to busy academic or business calendars",
    "Continuous feedback log sent to parents after every session",
    "Detailed speaking logs and pronunciation recording reviews"
  ];

  const groupFeatures = [
    "Small groups (maximum 4-6 students) for high individual speaking time",
    "Debates, group presentations, and discussion circles on global issues",
    "Peer learning and collaborative sentence-construction workshops",
    "Structured curriculum targeting conversational flow and listening skills",
    "Fun, engaging roleplay activities that simulate real-world situations"
  ];

  return (
    <div className="w-full min-h-screen py-16 relative overflow-hidden bg-pageBg">
      {/* Decorative Traditional Border Accent */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary text-xs font-bold rounded-none uppercase tracking-wider"
          >
            OUR CLASSES
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut", delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brandNavy tracking-tight"
          >
            Choose the Perfect Format
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut", delay: 0.2 }}
            className="text-textSecondary text-base md:text-lg leading-relaxed font-normal"
          >
            We offer structure, expert tutors, and natural learning environments. Select the tutoring plan that matches your goals.
          </motion.p>
        </div>

        {/* Classes Comparison Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          
          {/* Card 1: One-on-One Tutoring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-none border-2 border-primary shadow-premium p-8 md:p-10 flex flex-col relative overflow-hidden group h-full"
          >
            {/* Header Accent */}
            <div className="absolute top-0 inset-x-0 h-4 bg-primary" />
            <div className="absolute top-6 right-8 transform px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-none uppercase tracking-wider">
              Highly Recommended
            </div>

            <div className="w-14 h-14 rounded-none bg-primary-light flex items-center justify-center text-primary mb-6 mt-4">
              <BookOpen className="w-7 h-7" />
            </div>

            <h2 className="text-2xl font-serif font-bold text-brandNavy mb-2">One-on-One Tutoring</h2>
            <p className="text-textSecondary text-sm md:text-base leading-relaxed mb-6 font-normal">
              Get direct support and customized homework targets. Perfect for targeting dynamic skills like conversational pronunciation and customized test score milestones.
            </p>

            {/* Academic Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-primary/5 text-primary text-[11px] font-bold rounded-none border border-primary/10 uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" /> Flexible Duration
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent text-[11px] font-bold rounded-none border border-accent/20 uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" /> Custom Syllabus
              </span>
            </div>

            {/* Features checklist */}
            <div className="space-y-4 mb-10 flex-grow">
              <h4 className="text-xs font-bold uppercase tracking-wider text-textPrimary">What&apos;s Included</h4>
              {oneOnOneFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-none bg-primary-light border border-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm text-textSecondary font-medium leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* Action booking button */}
            <Link href="/book?classType=one-on-one" className="w-full">
              <button className="w-full py-4 bg-primary text-white font-semibold rounded-none border border-primary hover:bg-[#253A60] flex items-center justify-center gap-2 transition-colors duration-300">
                <Calendar className="w-4 h-4" /> Book One-on-One Session
              </button>
            </Link>
          </motion.div>

          {/* Card 2: Group Classes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.15, ease: "easeInOut" }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-none border border-primary/5 shadow-premium p-8 md:p-10 flex flex-col relative overflow-hidden group h-full"
          >
            {/* Header Accent */}
            <div className="absolute top-0 inset-x-0 h-4 bg-accent" />

            <div className="w-14 h-14 rounded-none bg-accent/10 flex items-center justify-center text-accent mb-6 mt-4">
              <Users className="w-7 h-7" />
            </div>

            <h2 className="text-2xl font-serif font-bold text-brandNavy mb-2">Group Classes</h2>
            <p className="text-textSecondary text-sm md:text-base leading-relaxed mb-6 font-normal">
              Engage with other students. Perfect for practice debates, collaborative reading, and developing fast speaking habits without speaking anxiety.
            </p>

            {/* Academic Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-primary/5 text-primary text-[11px] font-bold rounded-none border border-primary/10 uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" /> 60 - 90 Minutes
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent text-[11px] font-bold rounded-none border border-accent/20 uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" /> 4-6 Students
              </span>
            </div>

            {/* Features checklist */}
            <div className="space-y-4 mb-10 flex-grow">
              <h4 className="text-xs font-bold uppercase tracking-wider text-textPrimary">What&apos;s Included</h4>
              {groupFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-none bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-sm text-textSecondary font-medium leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* Action booking button */}
            <Link href="/book?classType=group" className="w-full">
              <button className="w-full py-4 border-2 border-primary text-primary font-semibold rounded-none hover:bg-primary/5 flex items-center justify-center gap-2 transition-colors duration-300">
                <Calendar className="w-4 h-4" /> Request Group Placement
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
