'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const achievements = [
  {
    type: 'Conference Acceptance',
    title: 'International Conference Acceptance',
    description:
      'Our core research on "Adaptive Feedback Loops in CS Pedagogy" has been accepted for presentation at leading educational technology conferences.',
    logo: 'ICCE',
    logoUrl:
      'https://static.wixstatic.com/media/be012b_c4be96186b19444e8737df09a53cf251~mv2.jpg/v1/fill/w_89,h_50,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/22773143_chennai_edited_edited.jpg',
    name: 'ICCE 2025',
    subName: 'International Conference on Computers in Education',
    status: 'Accepted',
    icon: 'ri-trophy-fill',
  },
  {
    type: 'Journal Publication',
    title: 'IJET Journal Submission',
    description:
      'An expanded version of our research findings has been submitted to one of the most prestigious journals in educational technology for peer review.',
    logo: 'IJET',
    logoUrl: 'https://www.ijiet.org/statics/images/img/logo.png',
    name: 'IJET Journal',
    subName: 'International Journal of Educational Technology',
    status: 'Under Review',
    icon: 'ri-book-open-fill',
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-6 lg:px-8 bg-background snap-start"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-surface-container border border-outline/30 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <i className={`${item.icon} text-xl`}></i>
                </div>
                <span className="text-sm font-bold text-primary uppercase tracking-wider">
                  {item.type}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-text-muted mb-8 leading-relaxed">
                {item.description}
              </p>

              {/* Status Badge Container */}
              <div className="mt-auto flex items-center justify-between gap-4 pt-6 border-t border-outline/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center border border-outline/5 shadow-sm overflow-hidden relative">
                    <Image
                      src={item.logoUrl}
                      alt={item.logo}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-foreground text-sm leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-text-muted">
                      {item.subName}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      item.status === 'Accepted'
                        ? 'bg-green-500 animate-pulse'
                        : 'bg-amber-500'
                    }`}
                  />
                  <span
                    className={`text-[10px] font-bold uppercase tracking-tighter ${
                      item.status === 'Accepted'
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-amber-600 dark:text-amber-400'
                    }`}
                  >
                    {item.status}
                  </span>
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
