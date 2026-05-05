'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const scopeItems = [
  {
    id: 'scope',
    title: 'Project Scope',
    description:
      'A comprehensive architectural and pedagogical overview of our research initiative, encompassing system design, educational frameworks, and technical implementation strategies.',
    icon: 'ri-clipboard-line',
  },
  {
    id: 'gap',
    title: 'Research Gap',
    description:
      'A significant gap exists in current solutions regarding real-time, context-aware feedback. Most tools focus on correctness, ignoring the educational value of actionable insights.',
    icon: 'ri-search-eye-line',
  },
  {
    id: 'problem',
    title: 'Problem & Solution',
    description:
      'Students struggle with immediate, personalized feedback in large-scale classes. GradeLoop solves this by providing intelligent, automated assessment with pedagogically-sound, actionable feedback that scales to any class size.',
    icon: 'ri-lightbulb-flash-line',
  },
  {
    id: 'objectives',
    title: 'Research Objectives',
    description:
      'Develop an AI-powered system for code assessment, implement real-time feedback mechanisms, and evaluate effectiveness through rigorous user studies in real educational settings.',
    icon: 'ri-target-line',
  },
  {
    id: 'methodology',
    title: 'Methodology',
    description:
      'A mixed-methods approach combining iterative software development with large-scale user studies to validate pedagogical effectiveness and technical scalability.',
    icon: 'ri-microscope-line',
  },
  {
    id: 'technologies',
    title: 'Technologies',
    description:
      'Our tech stack leverages modern frameworks: Next.js · TypeScript · LLMs / Containerized Execution · Python / REST APIs · Docker.',
    icon: 'ri-settings-3-line',
    mono: true,
  },
];

const Scope = () => {
  const [activeTab, setActiveTab] = useState(scopeItems[0]);

  return (
    <section id="scope" className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-left"
        >
          <span className="inline-block px-0 py-1.5 text-primary text-[12px] font-bold uppercase tracking-wider mb-4">
            Research Scope
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight font-display">
            A Comprehensive Research Initiative
          </h2>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Exploring the intersection of artificial intelligence, automated
            assessment, and pedagogical innovation in computer science
            education.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex flex-wrap justify-center p-1.5 bg-secondary-container/30 border border-outline/50 rounded-[24px] backdrop-blur-sm overflow-hidden">
            {scopeItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item)}
                className={`relative px-5 py-2.5 text-[14px] font-semibold transition-all duration-300 rounded-[20px] ${
                  activeTab.id === item.id
                    ? 'text-primary'
                    : 'text-text-muted hover:text-foreground'
                }`}
              >
                {activeTab.id === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-surface-container shadow-sm border border-outline/20 z-0"
                    style={{ borderRadius: '20px' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-surface-container/30 border border-outline/30 rounded-[32px] p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              {/* Icon Box */}
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-[24px] bg-surface-container border border-outline/20 shadow-sm flex items-center justify-center text-4xl md:text-5xl text-primary transition-transform hover:scale-105 duration-300">
                <i className={activeTab.icon}></i>
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 font-display">
                  {activeTab.title}
                </h3>
                <p
                  className={`text-lg text-text-muted leading-relaxed ${
                    activeTab.mono ? 'font-mono text-base' : ''
                  }`}
                >
                  {activeTab.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Scope;
