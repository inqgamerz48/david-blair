"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Palette } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"oxford" | "cambridge">("oxford");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync theme with localStorage and DOM class list
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "oxford" | "cambridge" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-purple", "theme-emerald", "theme-blue", "theme-oxford", "theme-cambridge");
    root.classList.add(`theme-${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Tutors", href: "/tutors" },
    { name: "Classes", href: "/classes" },
  ];

  const themes = [
    { id: "oxford", color: "bg-[#FFFFFF] border border-primary/20", name: "Oxford White" },
    { id: "cambridge", color: "bg-[#FAFAF7] border border-primary/20", name: "Cambridge Cream" }
  ] as const;

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3 shadow-premium"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-serif font-bold text-primary tracking-tight transition-transform duration-300 group-hover:scale-[1.02] flex items-center gap-1.5">
            David & Blair
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium tracking-wide relative py-1 transition-colors duration-200 ${
                  isActive ? "text-primary font-semibold" : "text-textSecondary hover:text-primary"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          {/* Premium Theme Selector Toggler (Skeuomorphic border / glassmorphic dock) */}
          <div className="flex items-center gap-2 bg-white/40 dark:bg-black/10 backdrop-blur-md p-1.5 rounded-none border border-primary/10 shadow-inner">
            <Palette className="w-4 h-4 text-textSecondary mr-0.5 ml-1 opacity-70" />
            <div className="flex gap-1.5">
              {themes.map((t) => {
                const isActive = theme === t.id;
                return (
                  <motion.button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`w-5 h-5 rounded-none ${t.color} relative flex items-center justify-center cursor-pointer transition-shadow`}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    title={`Switch to ${t.name}`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeTheme"
                        className="absolute inset-[-3px] border-2 border-primary rounded-none"
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <Link href="/book">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 bg-primary text-white text-[15px] font-semibold rounded-none border border-primary shadow-premium hover:bg-[#253A60] transition-colors duration-300"
            >
              Book a Session
            </motion.button>
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-12 h-12 flex items-center justify-center text-textPrimary hover:text-primary focus:outline-none transition-colors rounded-none"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileMenuOpen ? "open" : "closed"}
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>
 
      {/* Mobile Navigation Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass-nav border-t border-primary/5 bg-white/95"
          >
            <div className="px-6 py-6 flex flex-col space-y-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    whileTap={{ scale: 0.97 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`text-lg font-medium py-1.5 block transition-colors ${
                        isActive ? "text-primary font-bold" : "text-textSecondary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
 
              {/* Mobile Theme Selector Toggler */}
              <div className="py-3 border-t border-primary/5 flex items-center justify-between">
                <span className="text-[15px] font-semibold text-textSecondary flex items-center gap-1.5">
                  <Palette className="w-4 h-4" /> Theme
                </span>
                <div className="flex gap-3">
                  {themes.map((t) => (
                    <motion.button
                      key={t.id}
                      onClick={() => setTheme(t.id)}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 rounded-none ${t.color} relative flex items-center justify-center cursor-pointer ${
                        theme === t.id ? "ring-2 ring-primary ring-offset-2" : ""
                      }`}
                      aria-label={`Switch to ${t.name}`}
                    />
                  ))}
                </div>
              </div>
 
              <motion.div whileTap={{ scale: 0.98 }} className="w-full pt-2">
                <Link href="/book" onClick={handleLinkClick}>
                  <button className="w-full py-3.5 bg-primary text-white font-semibold rounded-none border border-primary shadow-premium hover:bg-[#253A60] transition-colors duration-300">
                    Book a Session
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
