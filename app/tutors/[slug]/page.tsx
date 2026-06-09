import { notFound } from "next/navigation";
import Link from "next/link";
import { Play, Calendar, Check, ArrowLeft, Star, Quote, GraduationCap } from "lucide-react";
import { tutors } from "@/data/tutors";

interface TutorProfileProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return tutors.map((tutor) => ({
    slug: tutor.slug,
  }));
}

export default function TutorProfilePage({ params }: TutorProfileProps) {
  const tutor = tutors.find((t) => t.slug === params.slug);

  if (!tutor) {
    notFound();
  }

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
    <div className="w-full min-h-screen py-12 bg-pageBg">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/tutors"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Tutors
          </Link>
        </div>

        {/* Profile Details Card */}
        <div className="bg-white rounded-none border border-primary/5 shadow-premium overflow-hidden mb-12">
          
          {/* Top Banner Accent */}
          <div className="h-4 bg-gradient-to-r from-primary to-accent" />
          
          <div className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* Avatar Column */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-44 h-44 flex items-center justify-center mb-6">
                {/* Floating gradient blob behind */}
                <div className={`absolute inset-0 rounded-none bg-gradient-to-br ${gradientColors[tutor.experienceColor]} opacity-20 blur-xl scale-110`} />
                
                {/* Sharp Portrait Photo Box */}
                <div className={`w-40 h-40 rounded-none bg-gradient-to-br ${gradientColors[tutor.experienceColor]} border-4 border-white shadow-premium flex flex-col items-center justify-center relative overflow-hidden z-10`}>
                  {/* Avatar Icon */}
                  <GraduationCap className="w-12 h-12 text-white opacity-20 mb-1" />
                  {/* Initials */}
                  <span className="text-4xl font-bold uppercase tracking-wider text-white select-none">
                    {tutor.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
              </div>

              <span className={`px-4 py-1.5 rounded-none text-xs font-bold border uppercase tracking-wider mb-6 ${badgeColors[tutor.experienceColor]}`}>
                {tutor.experience} Experience
              </span>

              <Link href={`/book?tutor=${tutor.slug}`} className="w-full">
                <button className="w-full py-3 bg-primary text-white font-semibold rounded-none border border-primary hover:bg-[#253A60] flex items-center justify-center gap-2 transition-colors duration-300">
                  <Calendar className="w-4 h-4" /> Book a Session
                </button>
              </Link>
            </div>

            {/* Content Column */}
            <div className="md:col-span-8 space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-brandNavy tracking-tight">
                  {tutor.name}
                </h1>
                <p className="text-sm font-semibold text-textSecondary uppercase tracking-widest mt-1">
                  {tutor.title}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-serif font-bold text-brandNavy mb-2">About Tutor</h3>
                <p className="text-textSecondary leading-relaxed font-normal">
                  {tutor.bio}
                </p>
              </div>

              {/* Methodology details */}
              <div>
                <h3 className="text-lg font-serif font-bold text-brandNavy mb-3">Teaching Methodology</h3>
                <div className="space-y-3">
                  {tutor.methodology.map((method, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-none bg-primary-light border border-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-textSecondary font-medium leading-relaxed">
                        {method}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Video Placeholder Section */}
        <div className="bg-white rounded-none border border-primary/5 p-6 md:p-12 shadow-premium mb-12">
          <h2 className="text-2xl font-serif font-bold text-brandNavy mb-6">Video Introduction</h2>
          
          <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-none overflow-hidden bg-brandNavy flex flex-col items-center justify-center group border border-white/10 shadow-lg">
            {/* Background design gradient inside player */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1B2B4B] via-[#1B2B4B] to-primary/30 opacity-70" />
            
            {/* Geometric abstract shapes on player screen */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center px-6 space-y-4 text-white">
              {/* Traditional Sharp Play Button */}
              <div className="w-16 h-16 rounded-none bg-primary hover:bg-accent flex items-center justify-center cursor-pointer transition-all duration-300 scale-100 hover:scale-105 shadow-lg text-white">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
              <div>
                <p className="font-serif font-bold text-lg md:text-xl text-white tracking-tight">
                  {tutor.videoPlaceholder.title}
                </p>
                <p className="text-xs text-gray-300 font-semibold uppercase tracking-wider mt-1">
                  Duration: {tutor.videoPlaceholder.duration}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        {tutor.testimonials.length > 0 && (
          <div className="bg-white rounded-none border border-primary/5 p-6 md:p-12 shadow-premium">
            <h2 className="text-2xl font-serif font-bold text-brandNavy mb-8">Tutor Testimonials</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tutor.testimonials.map((test, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-pageBg border border-primary/5 rounded-none flex flex-col justify-between shadow-sm relative group"
                >
                  <div className="absolute top-4 right-6 text-primary/10">
                    <Quote className="w-10 h-10 fill-current" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm font-medium italic text-textPrimary leading-relaxed">
                      &ldquo;{test.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-primary/5">
                    <h5 className="text-sm font-serif font-bold text-textPrimary">{test.parentName}</h5>
                    <p className="text-xs text-textSecondary mt-0.5">{test.ageGroup}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
