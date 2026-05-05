'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { documents } from '../data/docs';

const Download = () => {
  return (
    <section
      id="downloads"
      className="py-24 px-6 lg:px-8 bg-primary-container/30 relative overflow-hidden snap-start"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-left"
        >
          <span className="inline-block px-0 py-1.5 text-primary text-[12px] font-bold uppercase tracking-wider mb-4">
            Resources
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight font-display">
            Downloads
          </h2>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Access our comprehensive research documentation and presentation
            materials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-container border border-outline rounded-2xl p-8 flex flex-col h-full hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-container flex items-center justify-center text-2xl mb-6 border border-outline/50 text-primary">
                <i className={doc.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-display">
                {doc.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-8 flex-grow">
                {doc.description}
              </p>

              {doc.isComingSoon ? (
                <div className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-surface-container border border-dashed border-outline text-text-muted text-sm font-medium cursor-not-allowed">
                  <i className="ri-time-line"></i>
                  Coming Soon
                </div>
              ) : (
                <a
                  href={doc.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-on-primary text-sm font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                >
                  <i className="ri-download-line"></i>
                  Download
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Download;
