'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { team } from '../data/team';
import Image from 'next/image';

const Team = () => {
  const supervisors = team.filter((m) =>
    m.position.toLowerCase().includes('supervisor')
  );
  const developers = team.filter(
    (m) => !m.position.toLowerCase().includes('supervisor')
  );

  return (
    <section id="team" className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-left"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[12px] font-bold uppercase tracking-wider mb-4 border border-primary/20">
            Our Team
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight font-display">
            The People Behind GradeLoop
          </h2>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            A multidisciplinary team of researchers and developers driven by a
            passion for educational technology and AI.
          </p>
        </motion.div>

        {/* Developers Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-sm font-bold text-text-muted uppercase tracking-[0.2em] whitespace-nowrap">
              Developers
            </h3>
            <div className="h-[1px] flex-grow bg-outline/30"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {developers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-surface-container shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:-translate-y-2">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={index === 0}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-foreground mb-1 font-display group-hover:text-primary transition-colors">
                    {member.name}
                  </h4>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-0 py-0.5 text-primary text-[12px] font-mono font-bold tracking-wider">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {member.position}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Supervisors Section */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-sm font-bold text-text-muted uppercase tracking-[0.2em] whitespace-nowrap">
              Academic Supervision
            </h3>
            <div className="h-[1px] flex-grow bg-outline/30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supervisors.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-surface-container/50 border border-outline/30 hover:bg-surface-container transition-all duration-300 group"
              >
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-surface-container">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 96px, 128px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                    {member.position}
                  </span>
                  <h4 className="text-2xl font-bold text-foreground mb-3 font-display">
                    {member.name}
                  </h4>
                  <p className="text-base text-text-muted leading-relaxed">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
