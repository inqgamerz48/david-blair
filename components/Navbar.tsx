"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Palette } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"purple" | "emerald" | "blue">("purple");
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
    const savedTheme = localStorage.getItem("theme") as "purple" | "emerald" | "blue" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-purple", "theme-emerald", "theme-blue");
    root.classList.add(`theme-${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Tutors", href: "/tutors" },
    { name: "Classes", href: "/classes" },
  ];

  const themes = [
    { id: "purple", color: "bg-[#7C3AED]", name: "Royal Purple" },
    { id: "emerald", color: "bg-[#0D9488]", name: "Deep Emerald" },
    { id: "blue", color: "bg-[#2563EB]", name: "Ocean Blue" }
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
          <span className="text-2xl font-sans font-black text-primary tracking-tight transition-transform duration-300 group-hover:scale-[1.02] flex items-center gap-1.5">
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
          <div className="flex items-center gap-2 bg-white/40 dark:bg-black/10 backdrop-blur-md p-1.5 rounded-full border border-primary/10 shadow-inner">
            <Palette className="w-4 h-4 text-textSecondary mr-0.5 ml-1 opacity-70" />
            <div className="flex gap-1.5">
              {themes.map((t) => {
                const isActive = theme === t.id;
                return (
                  <motion.button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`w-5 h-5 rounded-full ${t.color} relative flex items-center justify-center cursor-pointer transition-shadow`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    title={`Switch to ${t.name}`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeTheme"
                        className="absolute inset-[-3px] border-2 border-primary rounded-full"
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-primary text-white text-[15px] font-semibold rounded-full shadow-premium hover:bg-opacity-95 hover:shadow-premiumHover transition-all"
            >
              Book a Session
            </motion.button>
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-textPrimary hover:text-primary focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`text-lg font-medium py-1 transition-colors ${
                      isActive ? "text-primary font-bold" : "text-textSecondary"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Mobile Theme Selector Toggler */}
              <div className="py-2 border-t border-primary/5 flex items-center justify-between">
                <span className="text-sm font-semibold text-textSecondary flex items-center gap-1.5">
                  <Palette className="w-4 h-4" /> Select Theme
                </span>
                <div className="flex gap-2">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTheme(t.id)}
                      className={`w-6 h-6 rounded-full ${t.color} relative flex items-center justify-center ${
                        theme === t.id ? "ring-2 ring-primary ring-offset-2" : ""
                      }`}
                      aria-label={`Switch to ${t.name}`}
                    />
                  ))}
                </div>
              </div>

              <Link href="/book" onClick={handleLinkClick} className="w-full pt-2">
                <button className="w-full py-3 bg-primary text-white font-semibold rounded-full shadow-premium">
                  Book a Session
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
