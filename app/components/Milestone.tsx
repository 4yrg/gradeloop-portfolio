'use client';

import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    date: 'January 2024',
    title: 'Project Initiation',
    status: 'completed',
    statusLabel: 'Completed',
  },
  {
    date: 'February 2024',
    title: 'TAF Submission',
    status: 'completed',
    statusLabel: 'Completed',
  },
  {
    date: 'March 2024',
    title: 'Proposal Presentation',
    status: 'completed',
    statusLabel: 'Completed',
  },
  {
    date: 'May 2024',
    title: 'Progress Presentation 1',
    status: 'completed',
    statusLabel: 'Completed',
  },
  {
    date: 'August 2024',
    title: 'Progress Presentation 2',
    status: 'completed',
    statusLabel: 'Completed',
  },
  {
    date: 'October 2024',
    title: 'Research Paper Submission',
    status: 'completed',
    statusLabel: 'Completed',
  },
  {
    date: 'December 2024',
    title: 'Final System Completion',
    status: 'in-progress',
    statusLabel: 'In Progress',
  },
  {
    date: 'January 2025',
    title: 'Website Launch',
    status: 'in-progress',
    statusLabel: 'In Progress',
  },
  {
    date: 'February 2025',
    title: 'Final Presentation',
    status: 'upcoming',
    statusLabel: 'Upcoming',
  },
];

const Milestone = () => {
  return (
    <section
      id="milestones"
      className="py-24 px-6 lg:px-8 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight text-center font-display">
            Project Milestones
          </h2>
          <p className="text-lg text-text-muted max-w-2xl text-center leading-relaxed mx-auto">
            Tracking our journey from inception to launch with structured
            research milestones and deliverables.
          </p>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-tertiary opacity-20" />

          {/* Vertical Line for Mobile */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-tertiary opacity-20" />

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`relative flex items-center justify-between md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Connector Dot */}
                <div className="absolute left-[-9px] md:left-1/2 md:ml-[-9px] w-5 h-5 rounded-full border-4 border-background z-10 flex items-center justify-center">
                  <div
                    className={`w-full h-full rounded-full ${
                      item.status === 'completed'
                        ? 'bg-primary'
                        : item.status === 'in-progress'
                          ? 'bg-yellow-500 animate-pulse'
                          : 'bg-outline'
                    }`}
                  />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className="bg-surface-container/30 border border-outline/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
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
                  </div>
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
