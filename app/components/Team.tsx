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
          <span className="inline-block px-0 py-1.5 text-primary text-[12px] font-bold uppercase tracking-wider mb-4">
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

        {/* Supervisors Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-sm font-bold text-text-muted uppercase tracking-[0.2em] whitespace-nowrap">
              Academic Supervision
            </h3>
            <div className="h-[1px] flex-grow bg-outline/30"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {supervisors.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-8 p-10 rounded-[32px] bg-surface-container/50 border border-outline/30 hover:bg-surface-container transition-all duration-500 group shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-2xl overflow-hidden flex-shrink-0 bg-surface-container shadow-md">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 128px, 176px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                    {member.position}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-display">
                    {member.name}
                  </h4>
                  <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-primary hover:underline text-sm mb-4 font-medium">
                    <i className="ri-mail-fill"></i>
                    {member.email}
                  </a>
                  <p className="text-base md:text-lg text-text-muted leading-relaxed">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Developers Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-sm font-bold text-text-muted uppercase tracking-[0.2em] whitespace-nowrap">
              Developers
            </h3>
            <div className="h-[1px] flex-grow bg-outline/30"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {developers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-8 bg-surface-container shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={index === 0}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="text-left px-2">
                  <h4 className="text-xl font-bold text-foreground mb-1 font-display group-hover:text-primary transition-colors">
                    {member.name}
                  </h4>
                  <div className="flex flex-col gap-1 mb-4">
                    <span className="text-primary text-[13px] font-mono font-bold tracking-wider">
                      {member.role}
                    </span>
                    <a href={`mailto:${member.email}`} className="flex items-center gap-1.5 text-text-muted hover:text-primary text-xs transition-colors">
                      <i className="ri-mail-line"></i>
                      {member.email}
                    </a>
                  </div>
                  <p className="text-sm md:text-base text-text-muted leading-relaxed">
                    {member.position}
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
