"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { Tutor } from "@/data/tutors";

interface TutorCardProps {
  tutor: Tutor;
  index: number;
}

export default function TutorCard({ tutor, index }: TutorCardProps) {
  // Map experienceColor to CSS classes
  const badgeColors = {
    green: "bg-primary/10 text-primary border-primary/20",
    pink: "bg-accent/10 text-accent border-accent/20",
    blue: "bg-primary/5 text-primary border-primary/10",
    red: "bg-accent/15 text-accent border-accent/30",
  };

  const gradientColors = {
    green: "from-[#1B2B4B] to-[#2A3D64]",
    pink: "from-[#F5A623] to-[#E09310]",
    blue: "from-[#1B2B4B] to-[#F5A623]",
    red: "from-[#D4AF37] to-[#B8860B]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeInOut" }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-3xl p-8 border border-primary/5 shadow-premium shadow-premium-box flex flex-col items-center text-center relative overflow-hidden group"
    >
      {/* Background shape hover reveal */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150 pointer-events-none" />

      {/* Avatar Container with Colored Blob */}
      <div className="relative w-36 h-36 flex items-center justify-center mb-6">
        {/* Floating gradient blob behind */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradientColors[tutor.experienceColor]} opacity-20 blur-xl scale-110 group-hover:scale-125 transition-all duration-500`} />
        
        {/* Circular photo placeholder with colored gradient background */}
        <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${gradientColors[tutor.experienceColor]} border-2 border-white shadow-premium flex flex-col items-center justify-center relative overflow-hidden z-10 transition-transform duration-500`}>
          {/* Avatar Icon */}
          <GraduationCap className="w-10 h-10 text-white opacity-20 group-hover:scale-110 transition-transform duration-300 mb-1" />
          {/* Initials */}
          <span className="text-3xl font-bold uppercase tracking-wider text-white select-none">
            {tutor.name.split(" ").map(n => n[0]).join("")}
          </span>
        </div>
      </div>

      {/* Experience Badge */}
      <span className={`px-4 py-1.5 rounded-full text-xs font-bold border uppercase tracking-wider ${badgeColors[tutor.experienceColor]} mb-4 z-10`}>
        {tutor.experience} Experience
      </span>

      {/* Tutor Info */}
      <h3 className="text-xl font-serif font-bold text-textPrimary mb-1 group-hover:text-primary transition-colors">
        {tutor.name}
      </h3>
      <p className="text-xs font-semibold text-textSecondary uppercase tracking-widest mb-4">
        {tutor.title}
      </p>

      {/* Bio */}
      <p className="text-sm text-textSecondary leading-relaxed line-clamp-2 px-2 mb-6 font-normal">
        {tutor.bio}
      </p>

      {/* Footer / Socials & Profile Link */}
      <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-primary/5">
        <div className="flex space-x-3 text-textSecondary">
          <a href="#" className="hover:text-primary transition-colors duration-200" aria-label="Instagram">
            <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          <a href="#" className="hover:text-primary transition-colors duration-200" aria-label="LinkedIn">
            <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
        <Link
          href={`/tutors/${tutor.slug}`}
          className="text-sm font-bold text-primary hover:text-accent flex items-center gap-0.5 transition-colors group/link"
        >
          View Profile
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}
