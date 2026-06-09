"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brandNavy text-gray-300 pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Background visual element - subtle dark gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,166,35,0.02),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand / Description */}
          <div className="space-y-4">
            <span className="text-xl font-serif font-bold text-white tracking-tight flex items-center gap-1.5">
              David & Blair
            </span>
            <p className="text-[14px] text-gray-400 leading-relaxed font-normal">
              World-class English tutoring based in Korea. Elevating language confidence through personalized, results-driven coaching.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-none bg-white/5 flex items-center hover:bg-accent/20 hover:text-white transition-colors duration-200 justify-center text-gray-400" aria-label="Instagram">
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-none bg-white/5 flex items-center hover:bg-accent/20 hover:text-white transition-colors duration-200 justify-center text-gray-400" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Meet Our Tutors", href: "/tutors" },
                { name: "Our Classes", href: "/classes" },
                { name: "Book a Session", href: "/book" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[14px] text-gray-400 hover:text-white flex items-center gap-1 group transition-colors">
                    <ArrowRight className="w-3 h-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Classes info */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Classes</h4>
            <ul className="space-y-3">
              {[
                { name: "One-on-One Tutoring", href: "/classes?type=one-on-one" },
                { name: "Group English Classes", href: "/classes?type=group" },
                { name: "Conversational Intensive", href: "/classes?type=one-on-one" },
                { name: "IELTS & Test Prep", href: "/classes?type=one-on-one" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[14px] text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Get in Touch</h4>
            <ul className="space-y-4 text-[14px] text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Seoul, Mapo-gu / Gangnam-gu, South Korea</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:info@davidandblair.com" className="hover:text-white transition-colors">
                  info@davidandblair.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+82 (0)10-5555-8888</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider and copyright */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 David & Blair. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
