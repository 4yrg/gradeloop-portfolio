'use client';

import React from 'react';
import { motion } from 'framer-motion';

const systemComponents = [
  {
    code: 'CIPAS',
    name: 'Code Integrity & Provenance Analysis',
    gap: 'Current tools lack integrated detection of AI-generated code alongside traditional syntactic/semantic clones, failing to identify complex provenance shifts in modern hybrid codebases.',
    features: [
      'Syntactic Code Clone detection (Type 1-3)',
      'Semantic Similarity detection',
      'AI Likelihood & Plagiarism scoring',
    ],
    icon: 'ri-fingerprint-line',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    code: 'ACAFS',
    name: 'Automated Code Analysis and Feedback System',
    gap: 'Existing autograders primarily focus on binary pass/fail results, lacking real-time, Socratic-style pedagogical feedback that guides students through logic errors without providing direct answers.',
    features: [
      'Intelligent Autograder (Semantic analysis)',
      'Socratic Style pedagogical Chatbot',
      'Real-time actionable feedback',
    ],
    icon: 'ri-robot-line',
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    code: 'BLAIM',
    name: 'Behavior & Learning Analytics and IDE Integration',
    gap: 'There is a critical lack of integrated coding environments that link biometric-authenticated liveness with granular behavior analytics to verify the authenticity of the learning journey.',
    features: [
      'Isolated Cloud Coding Platform',
      'Biometric Authentication & Liveness',
      'Detailed behavior & provenance analysis',
    ],
    icon: 'ri-terminal-box-line',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    code: 'IVAS',
    name: 'Intelligent Viva Voce System',
    gap: 'Manual oral assessments are unscalable for large cohorts, and current automated systems lack the depth to verify conceptual understanding through adaptive, context-aware dialogue.',
    features: [
      'Automated oral assessment generation',
      'Intelligent response evaluation',
      'Scalable student verification',
    ],
    icon: 'ri-mic-line',
    color: 'from-amber-500/20 to-orange-500/20',
  },
];

const Components = () => {
  return (
    <section id="components" className="py-24 px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-tertiary/5 blur-[100px] rounded-full -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[12px] font-bold uppercase tracking-wider mb-4 border border-primary/20">
            System Architecture
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight font-display">
            Core System <span className="text-primary">Components</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            A modular ecosystem designed to handle every aspect of modern 
            programming education and assessment with AI precision.
          </p>
        </motion.div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {systemComponents.map((comp, index) => (
            <motion.div
              key={comp.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`h-full p-8 md:p-10 rounded-[2.5rem] bg-surface-container border border-outline/30 shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-500 overflow-hidden relative`}
              >
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${comp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-background border border-outline flex items-center justify-center text-3xl text-primary shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                        <i className={comp.icon}></i>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase">
                          {comp.code}
                        </span>
                        <h3 className="text-2xl font-bold text-foreground font-display mt-1">
                          {comp.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Research Gap Section */}
                  <div className="mb-8 p-5 rounded-2xl bg-background/50 border border-outline/20 group-hover:bg-background/80 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-search-eye-line text-primary text-sm"></i>
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary/80">Research Gap</span>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed italic">
                      "{comp.gap}"
                    </p>
                  </div>

                  <div className="mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-muted/60">Core Features</span>
                  </div>
                  <ul className="space-y-4">
                    {comp.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-text-muted group-hover:text-foreground transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Component Code Background */}
                <div className="absolute -bottom-10 -right-10 text-[120px] font-black text-foreground/[0.03] select-none pointer-events-none group-hover:text-primary/[0.05] transition-colors duration-500">
                  {comp.code}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Components;
