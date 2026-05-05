'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronRight } from 'lucide-react';
import { useTheme } from 'next-themes';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Scope', href: '#scope' },
  { name: 'Milestones', href: '#milestones' },
  { name: 'Downloads', href: '#downloads' },
  { name: 'Team', href: '#team' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-outline py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-9 h-9 transition-transform group-hover:scale-105 duration-300">
                <Image
                  src="/logo.png"
                  alt="Gradeloop"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-extrabold tracking-tight font-display flex items-center">
                <span className="text-primary">Grade</span>
                <span className="text-tertiary ml-0.5">Loop</span>
              </span>
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-[14px] font-medium text-text-muted hover:text-primary transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-outline bg-background/50 hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="Toggle theme"
            >
              {mounted &&
                (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
            </button>
            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-5 py-2 rounded-xl border border-outline bg-background/50 text-[14px] font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-300"
            >
              Contact
            </button>
            <button className="px-6 py-2.5 rounded-xl bg-primary text-on-primary text-[14px] font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-outline bg-background/50"
              aria-label="Toggle theme"
            >
              {mounted &&
                (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-foreground hover:bg-primary/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-outline overflow-hidden"
          >
            <div className="px-6 py-8 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between py-4 border-b border-outline/50 group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg font-semibold text-text-muted group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                  <ChevronRight
                    size={18}
                    className="text-outline group-hover:text-primary transition-colors group-hover:translate-x-1 duration-300"
                  />
                </Link>
              ))}
              <div className="pt-8 space-y-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full px-6 py-4 rounded-xl border border-outline font-bold text-foreground hover:border-primary hover:text-primary transition-all duration-300"
                >
                  Contact Us
                </button>
                <button className="w-full px-6 py-4 rounded-xl bg-primary text-on-primary font-bold shadow-lg shadow-primary/20">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
