'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronRight, ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Scope', href: '#scope' },
  { name: 'Components', href: '#components' },
  { name: 'Milestones', href: '#milestones' },
  {
    name: 'Downloads',
    href: '#downloads',
    subItems: [
      { name: 'Documents', category: 'document' },
      { name: 'Presentations', category: 'presentation' },
      { name: 'Checklists', category: 'checklist' },
    ],
  },
  { name: 'Team', href: '#team' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

  const handleSubItemClick = (category: string) => {
    const event = new CustomEvent('switch-download-tab', {
      detail: { category },
    });
    window.dispatchEvent(event);
    setIsOpen(false);
    setActiveDropdown(null);
    document
      .getElementById('downloads')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`dark fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/70 backdrop-blur-xl border-b border-outline py-3 shadow-sm'
          : 'bg-background/20 backdrop-blur-md py-5'
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
                <span className="text-primary">GradeLoop</span>
              </span>
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() =>
                    item.subItems && setActiveDropdown(item.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.subItems ? (
                    <div className="flex items-center gap-1 cursor-pointer px-4 py-2 text-[14px] font-medium text-text-muted hover:text-primary transition-all duration-300 relative">
                      <span>{item.name}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                      />
                      <span className="absolute bottom-1 left-4 right-8 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute top-full left-0 w-48 mt-2 py-2 bg-background/80 border border-outline rounded-2xl shadow-xl backdrop-blur-xl"
                          >
                            {item.subItems.map((sub) => (
                              <button
                                key={sub.name}
                                onClick={() => handleSubItemClick(sub.category)}
                                className="w-full text-left px-4 py-2.5 text-sm text-text-muted hover:text-primary hover:bg-primary/5 transition-colors flex items-center justify-between group/sub"
                              >
                                {sub.name}
                                <ChevronRight
                                  size={14}
                                  className="opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all"
                                />
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-[14px] font-medium text-text-muted hover:text-primary transition-all duration-300 relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </Link>
                  )}
                </div>
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
              className="px-5 py-2 rounded-xl border border-outline bg-background/50 text-[14px] font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-md"
            >
              Contact
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
            className="lg:hidden bg-background/80 backdrop-blur-2xl border-b border-outline overflow-hidden"
          >
            <div className="px-6 py-8 space-y-2">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col border-b border-outline/50"
                >
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          )
                        }
                        className="flex items-center justify-between py-4 group"
                      >
                        <span className="text-lg font-semibold text-text-muted group-hover:text-primary transition-colors">
                          {item.name}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`text-outline transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 text-primary' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 pb-4 space-y-4 overflow-hidden"
                          >
                            {item.subItems.map((sub) => (
                              <button
                                key={sub.name}
                                onClick={() => handleSubItemClick(sub.category)}
                                className="flex items-center justify-between w-full group/sub"
                              >
                                <span className="text-base font-medium text-text-muted/70 group-hover/sub:text-primary transition-colors">
                                  {sub.name}
                                </span>
                                <ChevronRight
                                  size={14}
                                  className="text-outline/50 group-hover/sub:text-primary"
                                />
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-4 group"
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
                  )}
                </div>
              ))}
              <div className="pt-8 space-y-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full px-6 py-4 rounded-xl border border-outline font-bold text-foreground hover:border-primary hover:text-primary transition-all duration-300 bg-background/50 backdrop-blur-md"
                >
                  Contact Us
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
