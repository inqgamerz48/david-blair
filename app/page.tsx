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
  // Variants for Hero content reveal
  const heroContentVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut" as const,
      },
    },
  };

  // Variants for Classes grid stagger
  const classesContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const classCardVariants = {
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

  // Variants for Tutors grid stagger
  const tutorsContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const tutorCardVariants = {
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
    <div className="w-full relative overflow-hidden bg-pageBg">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Headline details */}
          <motion.div
            variants={heroContentVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-none">
              ✦ Professional English Tutoring
            </div>
            
            {/* Elegant Serif Headline */}
            <h1 className="text-5xl md:text-[60px] font-serif font-bold text-brandNavy leading-tight tracking-tight max-w-2xl">
              Build Real English Confidence <span className="text-accent">One Session at a Time</span>
            </h1>

            <p className="text-textSecondary text-lg md:text-xl leading-relaxed max-w-xl font-normal">
              Expert one-on-one and group English tutoring tailored to every learner — from academic goals to natural speaking fluency. Inspired by classic scholarly traditions.
            </p>

            {/* Premium Traditional CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/book">
                <button className="px-8 py-4 bg-primary text-white font-semibold shadow-premium hover:bg-[#253A60] transition-colors duration-300 w-full sm:w-auto rounded-none border border-primary">
                  Book a Session
                </button>
              </Link>
              <Link href="/tutors">
                <button className="px-8 py-4 border-2 border-accent text-primary font-semibold hover:bg-accent/10 transition-colors duration-300 w-full sm:w-auto text-center rounded-none">
                  Meet Our Tutors
                </button>
              </Link>
            </div>

            {/* Trust row */}
            <p className="text-sm font-semibold text-textSecondary flex items-center gap-1.5 pt-4">
              <span className="text-accent">★</span> 98% satisfaction · 500+ students · 10+ years teaching
            </p>
          </motion.div>

          {/* Right Column: Dynamic floating frame */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Visual Frame wrapper */}
            <div className="relative w-80 h-96 md:w-96 md:h-[450px]">
              {/* Outer floating traditional border frame */}
              <div className="absolute inset-0 bg-transparent rounded-none border-2 border-accent/30 translate-x-4 translate-y-4 pointer-events-none" />
              
              {/* Main content box holding the generated tutor image */}
              <div className="absolute inset-0 bg-white rounded-none border-2 border-primary shadow-premium relative overflow-hidden group">
                <img
                  src="/hero-tutor.png"
                  alt="English Tutoring at David & Blair"
                  className="w-full h-full object-cover rounded-none transition-transform duration-1000 group-hover:scale-105"
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
            <StatCard number="500+" label="Students Taught" colorClass="text-primary" />
            <StatCard number="10+" label="Years Experience" colorClass="text-accent" />
            <StatCard number="98%" label="Parent Satisfaction" colorClass="text-primary" />
            <StatCard number="4" label="Expert Tutors" colorClass="text-accent" />
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Traditional Frame visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-80 h-96 md:w-90 md:h-96 rounded-none border-2 border-dashed border-primary/20 flex items-center justify-center p-6 relative">
              <div className="absolute inset-4 bg-[#FAFAF7] rounded-none border border-primary/10 flex flex-col items-center justify-center text-center p-8">
                <Compass className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-xl font-serif font-bold text-brandNavy mb-2">Our Philosophy</h4>
                <p className="text-xs text-textSecondary leading-relaxed">
                  We don&apos;t teach rote memorization. We inspire actual linguistic confidence and natural communication habits.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Information text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: "easeInOut", delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary text-xs font-bold rounded-none uppercase tracking-wider">
              ABOUT US
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brandNavy tracking-tight leading-tight">
              Helping Every Learner Find Their Voice in English
            </h2>
            <p className="text-textSecondary leading-relaxed font-normal text-sm md:text-base">
              At David & Blair, we understand that language acquisition goes beyond learning syntax rules. True fluency requires a supportive, tailored space that builds confidence one conversation at a time.
            </p>
            <p className="text-textSecondary leading-relaxed font-normal text-sm md:text-base">
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
                  <div className="w-5 h-5 rounded-none bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-sm font-semibold text-textPrimary">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/tutors">
                <button className="px-7 py-3.5 bg-primary text-white font-semibold shadow-premium hover:bg-[#253A60] flex items-center gap-2 transition-colors duration-300 rounded-none border border-primary">
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
            <span className="px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary text-xs font-bold rounded-none uppercase tracking-wider">
              OUR CLASSES
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brandNavy tracking-tight leading-tight mt-6">
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
              className="flex flex-col bg-white rounded-none p-8 lg:p-10 border-2 border-primary relative shadow-premium hover:shadow-premiumHover transition-shadow duration-300 h-full"
            >
              <div className="absolute top-0 right-12 transform -translate-y-1/2 px-4 py-1 bg-primary text-white text-[11px] font-bold rounded-none uppercase tracking-wider">
                FEATURED CLASS
              </div>
              
              <div className="w-14 h-14 rounded-none bg-primary-light flex items-center justify-center text-primary mb-6">
                <BookOpen className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-brandNavy mb-3">One-on-One Tutoring</h3>
              <p className="text-textSecondary text-sm md:text-base leading-relaxed mb-6 flex-grow font-normal">
                Our flagship, highly tailored tutoring service. Each session is built strictly around the learner&apos;s current skillset, pacing, and long-term communication goals.
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-primary/5">
                <span className="px-3 py-1 bg-primary/5 text-primary text-xs font-bold rounded-none border border-primary/10 uppercase tracking-wider">
                  Flexible Duration
                </span>
                <Link href="/book?classType=one-on-one">
                  <button className="px-5 py-2.5 bg-primary text-white font-semibold hover:bg-[#253A60] text-sm transition-colors duration-300 rounded-none border border-primary">
                    Book Session
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Card 2: Group Classes (Standard Card) */}
            <motion.div
              variants={classCardVariants}
              className="flex flex-col bg-white rounded-none p-8 lg:p-10 border border-primary/5 shadow-premium hover:shadow-premiumHover transition-shadow duration-300 h-full"
            >
              <div className="w-14 h-14 rounded-none bg-accent/10 flex items-center justify-center text-accent mb-6">
                <Users className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-brandNavy mb-3">Group Classes</h3>
              <p className="text-textSecondary text-sm md:text-base leading-relaxed mb-6 flex-grow font-normal">
                Collaborative, peer-supported environment focused on discussion circles, debate exercises, and team presentation assignments to build real communicative confidence.
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-primary/5">
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-none border border-accent/20 uppercase tracking-wider">
                  60 - 90 Mins
                </span>
                <Link href="/book?classType=group">
                  <button className="px-5 py-2.5 border-2 border-primary text-primary font-semibold hover:bg-primary/5 text-sm transition-colors duration-300 rounded-none">
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
        <div className="absolute inset-0 bg-[linear-gradient(rgba(27,43,75,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(27,43,75,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary text-xs font-bold rounded-none uppercase tracking-wider">
              OUR TUTORS
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brandNavy tracking-tight leading-tight mt-6">
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
            <Link href="/tutors" className="inline-flex items-center gap-1.5 text-primary hover:text-accent font-semibold group">
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
            Ready to Start Learning?
          </h2>
          <p className="text-gray-300 max-w-lg mx-auto leading-relaxed text-sm md:text-base font-normal">
            Book your first session today — no commitment needed. Payment is handled securely in person.
          </p>
          
          <div className="pt-4 flex justify-center">
            <Link href="/book">
              <button
                className="px-8 py-4 bg-accent text-primary font-bold shadow-premium text-base hover:bg-[#F5A623]/90 transition-colors duration-300 rounded-none border border-accent"
              >
                Book a Session
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
