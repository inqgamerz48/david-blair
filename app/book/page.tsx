"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, Mail, User, Phone, MessageSquare, BookOpen } from "lucide-react";
import { tutors } from "@/data/tutors";

function BookingForm() {
  const searchParams = useSearchParams();
  const classParam = searchParams.get("classType");
  const tutorParam = searchParams.get("tutor");

  const [classType, setClassType] = useState("one-on-one");
  const [selectedTutor, setSelectedTutor] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-fill fields from URL query search parameters
  useEffect(() => {
    if (classParam === "group") {
      setClassType("group");
    } else if (classParam === "one-on-one") {
      setClassType("one-on-one");
    }

    if (tutorParam) {
      const foundTutor = tutors.find((t) => t.slug === tutorParam);
      if (foundTutor) {
        setSelectedTutor(foundTutor.name);
      }
    }
  }, [classParam, tutorParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" as const } },
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-pageBg/85 backdrop-blur-md rounded-none border border-primary/10 shadow-premium overflow-hidden relative">
      {/* Cracked Glass Frosting Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.04] text-primary">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="20" x2="35" y2="45" stroke="currentColor" strokeWidth="0.25" />
          <line x1="35" y1="45" x2="100" y2="30" stroke="currentColor" strokeWidth="0.25" />
          <line x1="35" y1="45" x2="55" y2="100" stroke="currentColor" strokeWidth="0.25" />
          <line x1="75" y1="0" x2="60" y2="50" stroke="currentColor" strokeWidth="0.25" />
          <line x1="60" y1="50" x2="0" y2="65" stroke="currentColor" strokeWidth="0.25" />
          <line x1="60" y1="50" x2="100" y2="75" stroke="currentColor" strokeWidth="0.25" />
        </svg>
      </div>

      {/* Top Banner Accent */}
      <div className="h-3 bg-gradient-to-r from-primary to-accent relative z-10" />

      {/* Success View */}
      {isSubmitted ? (
        <div className="p-6 md:p-12 flex flex-col items-center justify-center text-center min-h-[400px] space-y-6 relative z-10">
          {/* Animated checkmark container */}
          <div className="w-24 h-24 rounded-none bg-primary-light flex items-center justify-center text-primary relative">
            <svg
              className="w-16 h-16 overflow-visible"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                className="checkmark-path"
                d="M14 27 L22 35 L38 17"
                stroke="rgb(var(--primary))"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
              />
            </svg>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-serif font-bold text-brandNavy tracking-tight">
              Request Received!
            </h2>
            <p className="text-textSecondary leading-relaxed max-w-sm font-normal">
              We&apos;ll be in touch soon! Expect a response via email or phone within 24 hours to confirm your details.
            </p>
          </div>

          <div className="pt-6 w-full max-w-xs">
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full py-3 border-2 border-primary text-primary font-semibold rounded-none hover:bg-primary-light transition-all text-sm"
            >
              Request Another Session
            </button>
          </div>
        </div>
      ) : (
        /* Form View */
        <div className="p-6 md:p-12 relative z-10">
          {/* Form Header */}
          <div className="text-center mb-8 space-y-2">
            <span className="px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary text-xs font-bold rounded-none uppercase tracking-wider">
              BOOK A SESSION
            </span>
            <h1 className="text-3xl font-serif font-bold text-brandNavy tracking-tight pt-3">
              Request Your Session
            </h1>
            <p className="text-xs text-textSecondary font-semibold uppercase tracking-wider">
              Payment is handled in person
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-5"
            >
              {/* Name field */}
              <motion.div variants={itemVariants} className="space-y-1.5">
                <label className="text-xs font-bold text-brandNavy uppercase tracking-wider block">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-textSecondary pointer-events-none">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full pl-11 pr-4 py-3 bg-pageBg border border-primary/5 rounded-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-base md:text-sm font-medium transition-all"
                  />
                </div>
              </motion.div>

              {/* Email field */}
              <motion.div variants={itemVariants} className="space-y-1.5">
                <label className="text-xs font-bold text-brandNavy uppercase tracking-wider block">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-textSecondary pointer-events-none">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="example@mail.com"
                    className="w-full pl-11 pr-4 py-3 bg-pageBg border border-primary/5 rounded-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-base md:text-sm font-medium transition-all"
                  />
                </div>
              </motion.div>

              {/* Phone field */}
              <motion.div variants={itemVariants} className="space-y-1.5">
                <label className="text-xs font-bold text-brandNavy uppercase tracking-wider block">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-textSecondary pointer-events-none">
                    <Phone className="w-4 h-4" />
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="010-XXXX-XXXX"
                    className="w-full pl-11 pr-4 py-3 bg-pageBg border border-primary/5 rounded-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-base md:text-sm font-medium transition-all"
                  />
                </div>
              </motion.div>

              {/* Class Type dropdown */}
              <motion.div variants={itemVariants} className="space-y-1.5">
                <label className="text-xs font-bold text-brandNavy uppercase tracking-wider block">
                  Class Type
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-textSecondary pointer-events-none">
                    <BookOpen className="w-4 h-4" />
                  </span>
                  <select
                    value={classType}
                    onChange={(e) => setClassType(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-pageBg border border-primary/5 rounded-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-base md:text-sm font-medium appearance-none transition-all"
                  >
                    <option value="one-on-one">One-on-One Tutoring</option>
                    <option value="group">Group Classes</option>
                  </select>
                </div>
              </motion.div>

              {/* Preferred Date field */}
              <motion.div variants={itemVariants} className="space-y-1.5">
                <label className="text-xs font-bold text-brandNavy uppercase tracking-wider block">
                  Preferred Date
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-textSecondary pointer-events-none">
                    <Calendar className="w-4 h-4" />
                  </span>
                  <input
                    type="date"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-pageBg/50 border border-primary/10 rounded-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-base md:text-sm font-medium transition-all custom-datepicker cursor-pointer"
                  />
                </div>
              </motion.div>

              {/* Message field */}
              <motion.div variants={itemVariants} className="space-y-1.5">
                <label className="text-xs font-bold text-brandNavy uppercase tracking-wider block">
                  Message / Special Request
                </label>
                <div className="relative">
                  <span className="absolute top-3.5 left-0 pl-4 flex items-start text-textSecondary pointer-events-none">
                    <MessageSquare className="w-4 h-4" />
                  </span>
                  <textarea
                    rows={4}
                    placeholder={
                      selectedTutor
                        ? `I am interested in sessions with ${selectedTutor}...`
                        : "Describe the student's level or specific requests..."
                    }
                    className="w-full pl-11 pr-4 py-3 bg-pageBg border border-primary/5 rounded-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-base md:text-sm font-medium transition-all resize-none"
                  />
                </div>
              </motion.div>

              {/* Tutor Badge Info */}
              {selectedTutor && (
                <motion.div
                  variants={itemVariants}
                  className="p-3 bg-primary-light rounded-none border border-primary/10 flex items-center justify-between text-xs"
                >
                  <span className="font-semibold text-textSecondary">Preferred Teacher</span>
                  <span className="font-bold text-primary px-2.5 py-0.5 bg-white border border-primary/10 rounded-none">
                    {selectedTutor}
                  </span>
                </motion.div>
              )}

              {/* Submit CTA button */}
              <motion.div variants={itemVariants} className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-semibold rounded-none border border-primary hover:bg-[#253A60] transition-colors duration-300 text-sm uppercase tracking-wider"
                >
                  Request a Session
                </button>
              </motion.div>
            </motion.div>
          </form>

          {/* Footer disclaimer */}
          <div className="mt-8 text-center text-xs text-textSecondary border-t border-primary/5 pt-6 leading-relaxed">
            <p>We&apos;ll confirm within 24 hours. Payment is handled securely in person.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function BookingPage() {
  return (
    <div className="w-full min-h-screen py-16 relative overflow-hidden bg-pageBg">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 -right-44 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 -left-44 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Suspense fallback={
          <div className="w-full max-w-xl mx-auto p-6 md:p-12 bg-white rounded-none border border-primary/5 shadow-premium flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary" />
          </div>
        }>
          <BookingForm />
        </Suspense>
      </div>
    </div>
  );
}
