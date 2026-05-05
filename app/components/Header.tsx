'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Zap, Code, CheckCircle, Cpu } from 'lucide-react';
import Terminal from './ui/Terminal';

const Header = () => {
  return (
    <section className="dark relative min-h-screen flex items-center overflow-hidden pt-20 bg-background transition-colors duration-500 snap-start">
      {/* Background Gradients & Glows - Theme Aware */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] dark:bg-primary/20" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-tertiary/10 blur-[100px] dark:bg-tertiary/20" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex flex-col gap-6 mb-12">
              <span className="text-[13px] font-bold tracking-[0.3em] uppercase text-primary/80 font-mono">
                AI-Driven Cloud Platform
              </span>
              <h1 className="text-4xl lg:text-6xl xl:text-8xl font-extrabold text-foreground leading-[1.05] tracking-tight font-display">
                Intelligent <br />
                <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent px-1">
                  Code Grading
                </span>{' '}
                <br />
                <span className="text-2xl lg:text-4xl xl:text-5xl text-foreground/70 block mt-4 normal-case font-medium">
                  & Personalized Programming Feedback
                </span>
              </h1>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-outline">
              {[
                { label: 'Papers Analyzed', value: '50+' },
                { label: 'Team Members', value: '4' },
                { label: 'Milestones', value: '9' },
                { label: 'Publications', value: '2' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-foreground mb-1 font-display">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-text-muted uppercase tracking-wider font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Terminal Window */}
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;
