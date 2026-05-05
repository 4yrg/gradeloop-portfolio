'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const achievements = [
  {
    type: 'Conference Acceptance',
    title: 'Scalable Hybrid LSH-Based Framework for Structural Code Clone Detection',
    description:
      'Our research on advanced code clone detection using Locality Sensitive Hashing (LSH) has been accepted for presentation at ICHORA 2026.',
    logo: 'ICHORA',
    logoUrl: '/ichora-logo.png',
    name: 'ICHORA 2026',
    subName:
      'International Congress on Human-Computer Interaction, Optimization and Robotic Applications',
    location: 'Turkiye Ankara',
    date: 'May 21-23 2026',
    status: 'Accepted',
    icon: 'ri-trophy-fill',
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-6 lg:px-8 bg-background"
    >
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
            Recognition
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight font-display">
            Research Achievements
          </h2>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Our work has been recognized by international academic communities
            and peer-reviewed publications.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="flex justify-center">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group max-w-4xl w-full p-8 md:p-12 rounded-[2.5rem] bg-surface-container border border-outline/30 shadow-2xl hover:shadow-[0_20px_50px_rgba(34,201,132,0.15)] hover:border-primary/30 transition-all duration-500 flex flex-col gap-10"
            >
              <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
                <div className="relative w-full lg:w-[400px] aspect-[16/9] rounded-2xl overflow-hidden bg-white p-4 shadow-inner flex-shrink-0 border border-outline/10">
                  <Image
                    src={item.logoUrl}
                    alt={item.logo}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <i className={`${item.icon} text-xl`}></i>
                    </div>
                    <span className="text-sm font-bold text-primary uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 font-display leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-lg text-text-muted mb-8 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm">
                    <div className="flex items-center gap-2 text-text-muted">
                      <i className="ri-map-pin-2-fill text-primary"></i>
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <i className="ri-calendar-event-fill text-primary"></i>
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted font-medium sm:col-span-2">
                      <i className="ri-award-fill text-primary"></i>
                      <span>{item.subName}</span>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-widest">
                        {item.status}
                      </span>
                    </div>
                    
                    <a 
                      href="https://ichoracongress.com/?go=accepted_papers" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-bold hover:underline flex items-center gap-1"
                    >
                      View Accepted Papers <i className="ri-external-link-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
