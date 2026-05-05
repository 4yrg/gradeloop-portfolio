'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
  {
    date: 'January 2025',
    title: 'Project Initiation',
    status: 'completed',
    statusLabel: 'Completed',
  },
  {
    date: 'February 2025',
    title: 'TAF Submission',
    status: 'completed',
    statusLabel: 'Completed',
  },
  {
    date: 'March 2025',
    title: 'Proposal Presentation',
    status: 'completed',
    statusLabel: 'Completed',
  },
  {
    date: 'May 2025',
    title: 'Progress Presentation 1',
    status: 'completed',
    statusLabel: 'Completed',
  },
  {
    date: 'August 2025',
    title: 'Progress Presentation 2',
    status: 'completed',
    statusLabel: 'Completed',
  },
  {
    date: 'October 2025',
    title: 'Research Paper Submission',
    status: 'completed',
    statusLabel: 'Completed',
  },
  {
    date: 'December 2025',
    title: 'Final System Completion',
    status: 'completed',
    statusLabel: 'Completed',
  },
  {
    date: 'January 2026',
    title: 'Website Launch',
    status: 'completed',
    statusLabel: 'Completed',
  },
  {
    date: 'May 6th 2026',
    title: 'Final Presentation',
    status: 'in-progress',
    statusLabel: 'In Progress',
  },
];

const Milestone = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end center'],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="milestones"
      ref={containerRef}
      className="py-24 px-6 lg:px-8 bg-background bg-green-pattern overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-left"
        >
          <span className="inline-block px-0 py-1.5 text-primary text-[12px] font-bold uppercase tracking-wider mb-4">
            Progress
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight font-display">
            Project Milestones
          </h2>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Tracking our journey from inception to launch with structured
            research milestones and deliverables.
          </p>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800/30">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-primary via-secondary to-tertiary shadow-[0_0_8px_rgba(74,222,128,0.3)]"
            />
          </div>

          {/* Vertical Line for Mobile */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-zinc-800/30">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-primary via-secondary to-tertiary shadow-[0_0_8px_rgba(74,222,128,0.3)]"
            />
          </div>

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  type: 'spring',
                  stiffness: 55,
                  damping: 14,
                  mass: 0.8,
                  delay: (index % 3) * 0.08,
                }}
                className={`relative flex items-center justify-between md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Connector Dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{
                    type: 'spring',
                    stiffness: 120,
                    damping: 10,
                    delay: 0.2,
                  }}
                  className="absolute left-[-9px] md:left-1/2 md:ml-[-9px] w-5 h-5 rounded-full border-4 border-background bg-zinc-900 z-10 flex items-center justify-center"
                >
                  <div
                    className={`w-full h-full rounded-full ${
                      item.status === 'completed'
                        ? 'bg-primary shadow-[0_0_8px_rgba(74,222,128,0.5)]'
                        : item.status === 'in-progress'
                          ? 'bg-yellow-500 animate-pulse shadow-[0_0_8px_rgba(234,179,8,0.5)]'
                          : 'bg-zinc-700'
                    }`}
                  />
                </motion.div>

                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.015,
                      borderColor: 'rgba(74,222,128,0.4)',
                      boxShadow: '0 12px 30px -10px rgba(0,0,0,0.5)',
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    className="bg-surface-container/30 border border-outline/30 rounded-2xl p-6 shadow-sm cursor-pointer transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-[12px] font-mono font-bold text-primary uppercase tracking-wider">
                        {item.date}
                      </span>
                      <div
                        className={`flex items-center gap-1.5 text-[11px] font-bold ${
                          item.status === 'completed'
                            ? 'text-green-600'
                            : item.status === 'in-progress'
                              ? 'text-yellow-600'
                              : 'text-text-muted'
                        }`}
                      >
                        <i
                          className={`${
                            item.status === 'completed'
                              ? 'ri-checkbox-circle-fill'
                              : item.status === 'in-progress'
                                ? 'ri-loader-4-line animate-spin'
                                : 'ri-time-line'
                          }`}
                        ></i>
                        {item.statusLabel}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground font-display">
                      {item.title}
                    </h3>
                  </motion.div>
                </div>

                {/* Empty space for desktop layout */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestone;
