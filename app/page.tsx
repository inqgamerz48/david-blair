"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, BookOpen, Users, Compass } from "lucide-react";
import StatCard from "@/components/StatCard";
import TutorCard from "@/components/TutorCard";
import HowItWorks from "@/components/HowItWorks";
import TestimonialSection from "@/components/TestimonialSection";
import { tutors } from "@/data/tutors";

export default function Homepage() {
  // Variants for Hero word stagger
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const heroWordVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
      },
    },
  };

  // Variants for Classes grid stagger
  const classesContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const classCardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  // Variants for Tutors grid stagger
  const tutorsContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const tutorCardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div className="w-full relative overflow-hidden bg-pageBg">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden min-h-[85vh] flex items-center">
        {/* Floating Decorative blobs using Framer Motion */}
        <motion.div
          animate={{
            scale: [1, 1.05, 0.95, 1],
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-12 right-12 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none z-0"
        />
        <motion.div
          animate={{
            scale: [1, 0.95, 1.05, 1],
            x: [0, -25, 30, 0],
            y: [0, 20, -30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-12 left-12 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none z-0"
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Headline details */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider"
            >
              ✦ Professional English Tutoring
            </motion.div>
            
            {/* Massive word-by-word reveal headline */}
            <motion.h1
              variants={heroContainerVariants}
              initial="hidden"
              animate="show"
              className="text-5xl md:text-[64px] font-black text-brandNavy leading-tight tracking-tight max-w-2xl"
            >
              <span className="block overflow-hidden">
                {["Build", "Real", "English", "Confidence"].map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden mr-2 md:mr-3">
                    <motion.span variants={heroWordVariants} className="inline-block">
                      {word}
                    </motion.span>
                  </span>
                ))}
              </span>
              <span className="block text-primary overflow-hidden mt-1 md:mt-2">
                {["One", "Session", "at", "a", "Time"].map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden mr-2 md:mr-3">
                    <motion.span variants={heroWordVariants} className="inline-block text-primary">
                      {word}
                    </motion.span>
                  </span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-textSecondary text-lg md:text-xl leading-relaxed max-w-xl font-normal"
            >
              Expert one-on-one and group English tutoring tailored to every learner — from academic goals to natural speaking fluency.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link href="/book">
                <button className="px-8 py-4 bg-primary text-white font-bold rounded-full shadow-premium hover:bg-opacity-95 hover:shadow-premiumHover transition-all w-full sm:w-auto">
                  Book a Session
                </button>
              </Link>
              <Link href="/tutors">
                <button className="px-8 py-4 border-[3px] border-accent text-primary font-bold rounded-full hover:bg-accent/5 transition-all w-full sm:w-auto text-center">
                  Meet Our Tutors
                </button>
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-sm font-semibold text-textSecondary flex items-center gap-1.5 pt-4"
            >
              <span className="text-yellow-500">⭐</span> 98% satisfaction · 500+ students · 10+ years teaching
            </motion.p>
          </div>

          {/* Right Column: Dynamic floating frame */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Visual Frame wrapper */}
            <div className="relative w-80 h-96 md:w-96 md:h-[450px]">
              {/* Outer floating shadow frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-[40px] border border-primary/20 scale-105 pointer-events-none" />
              
              {/* Main content box holding the generated tutor image */}
              <div className="absolute inset-0 bg-white rounded-[40px] border-2 border-primary shadow-premium hover:shadow-premiumHover transition-all relative overflow-hidden group">
                <img
                  src="/hero-tutor.png"
                  alt="English Tutoring at David & Blair"
                  className="w-full h-full object-cover rounded-[38px] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ROW ================= */}
      <section className="bg-white border-y border-primary/5 py-10 relative z-10 shadow-premium">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number="500+" label="Students Taught" colorClass="text-badgeBlue" />
            <StatCard number="10+" label="Years Experience" colorClass="text-primary" />
            <StatCard number="98%" label="Parent Satisfaction" colorClass="text-badgeGreen" />
            <StatCard number="4" label="Expert Tutors" colorClass="text-badgePink" />
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Dashed Frame visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-80 h-96 md:w-90 md:h-96 rounded-[36px] border-4 border-dashed border-primary/30 flex items-center justify-center p-6 relative">
              <div className="absolute inset-4 bg-gradient-to-br from-primary-light to-white rounded-[28px] border border-primary/10 flex flex-col items-center justify-center text-center p-8">
                <Compass className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-xl font-bold text-brandNavy mb-2">Our Philosophy</h4>
                <p className="text-xs text-textSecondary leading-relaxed">
                  We don&apos;t teach rote memorization. We inspire actual linguistic confidence and natural communication habits.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Information text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
              ABOUT US
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-brandNavy tracking-tight leading-tight">
              Helping Every Student Find Their Voice in English
            </h2>
            <p className="text-textSecondary leading-relaxed">
              At David & Blair, we understand that language acquisition goes beyond learning syntax rules. True fluency requires a supportive, tailored space that builds confidence one conversation at a time.
            </p>
            <p className="text-textSecondary leading-relaxed">
              Based in Seoul, we offer premier in-person and digital tutoring for children and adult learners, leveraging academic frameworks combined with engaging native-level discussions.
            </p>

            {/* Checkmark List */}
            <div className="space-y-3 pt-2">
              {[
                "Personalised learning plans matching individual interests",
                "Flexible scheduling designed for busy Korean families",
                "Proven results with clear pronunciation & test score gains"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-badgeGreen/10 border border-badgeGreen/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-badgeGreen" />
                  </div>
                  <span className="text-sm font-semibold text-textPrimary">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/tutors">
                <button className="px-7 py-3.5 bg-primary text-white font-bold rounded-full shadow-premium hover:bg-opacity-95 flex items-center gap-2 transition-all">
                  Meet Our Tutors <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= CLASSES SECTION ================= */}
      <section className="py-24 bg-pageBg relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
              OUR CLASSES
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-brandNavy tracking-tight leading-tight mt-6">
              What We Offer
            </h2>
          </div>

          <motion.div
            variants={classesContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
          >
            
            {/* Card 1: One-on-One Tutoring (Featured Card) */}
            <motion.div
              variants={classCardVariants}
              className="flex flex-col bg-white rounded-3xl p-8 lg:p-10 border-2 border-primary relative shadow-premium hover:shadow-premiumHover transition-shadow duration-300 h-full"
            >
              <div className="absolute top-0 right-12 transform -translate-y-1/2 px-4 py-1 bg-primary text-white text-[11px] font-black rounded-full uppercase tracking-wider">
                FEATURED CLASS
              </div>
              
              <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center text-primary mb-6">
                <BookOpen className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-black text-brandNavy mb-3">One-on-One Tutoring</h3>
              <p className="text-textSecondary text-sm md:text-base leading-relaxed mb-6 flex-grow">
                Our flagship, highly tailored tutoring service. Each session is built strictly around the learner&apos;s current skillset, pacing, and long-term communication goals.
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-primary/5">
                <span className="px-3 py-1 bg-badgeBlue/10 text-badgeBlue text-xs font-bold rounded-full border border-badgeBlue/20 uppercase tracking-wider">
                  Flexible Duration
                </span>
                <Link href="/book?classType=one-on-one">
                  <button className="px-5 py-2.5 bg-primary text-white font-bold rounded-full hover:bg-opacity-95 shadow-premium text-sm transition-all">
                    Book Session
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Card 2: Group Classes (Standard Card) */}
            <motion.div
              variants={classCardVariants}
              className="flex flex-col bg-white rounded-3xl p-8 lg:p-10 border border-primary/5 shadow-premium hover:shadow-premiumHover transition-shadow duration-300 h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <Users className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-black text-brandNavy mb-3">Group Classes</h3>
              <p className="text-textSecondary text-sm md:text-base leading-relaxed mb-6 flex-grow">
                Collaborative, peer-supported environment focused on discussion circles, debate exercises, and team presentation assignments to build real communicative confidence.
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-primary/5">
                <span className="px-3 py-1 bg-badgePink/10 text-badgePink text-xs font-bold rounded-full border border-badgePink/20 uppercase tracking-wider">
                  60 - 90 Mins
                </span>
                <Link href="/book?classType=group">
                  <button className="px-5 py-2.5 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary-light text-sm transition-all">
                    Request Booking
                  </button>
                </Link>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ================= TUTORS SECTION ================= */}
      <section className="py-24 bg-white relative">
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
              OUR TUTORS
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-brandNavy tracking-tight leading-tight mt-6">
              Meet Your Tutors
            </h2>
            <p className="text-textSecondary leading-relaxed text-sm md:text-base mt-4 font-normal">
              Every tutor at David & Blair is handpicked for native expertise, patience, and exceptional results.
            </p>
          </div>

          {/* Staggered Grid */}
          <motion.div
            variants={tutorsContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {tutors.map((tutor, idx) => (
              <motion.div key={tutor.slug} variants={tutorCardVariants}>
                <TutorCard tutor={tutor} index={idx} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/tutors" className="inline-flex items-center gap-1.5 text-primary hover:text-accent font-bold group">
              Meet All Our Tutors <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS SECTION ================= */}
      <HowItWorks />

      {/* ================= TESTIMONIALS SECTION ================= */}
      <TestimonialSection />

      {/* ================= CTA BANNER ================= */}
      <section className="relative py-20 bg-brandNavy overflow-hidden shimmer-bg text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Ready to Start Learning?
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
            Book your first session today — no commitment needed. Payment is handled securely in person.
          </p>
          
          <div className="pt-4 flex justify-center">
            <Link href="/book">
              <motion.button
                whileHover={{ scale: 1.06 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(124, 58, 237, 0.4)",
                    "0 0 0 12px rgba(124, 58, 237, 0)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="px-8 py-4 bg-primary text-white font-bold rounded-full shadow-premium text-base"
              >
                Book a Session
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
