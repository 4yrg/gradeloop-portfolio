'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { documents } from '../data/docs';

const Download = () => {
  const [activeTab, setActiveTab] = useState<'document' | 'presentation'>(
    'document'
  );

  const filteredDocs = documents.filter((doc) => doc.category === activeTab);

  useEffect(() => {
    const handleSwitchTab = (e: any) => {
      if (e.detail?.category) {
        setActiveTab(e.detail.category);
      }
    };
    window.addEventListener('switch-download-tab', handleSwitchTab);
    return () =>
      window.removeEventListener('switch-download-tab', handleSwitchTab);
  }, []);

  return (
    <section
      id="downloads"
      className="py-24 px-6 lg:px-8 bg-primary-container/30 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
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

          {/* Tabs UI */}
          <div className="flex p-1 bg-surface-container/50 backdrop-blur-sm border border-outline/30 rounded-2xl w-fit">
            <button
              onClick={() => setActiveTab('document')}
              className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === 'document'
                  ? 'bg-background dark:bg-surface-container-highest text-primary shadow-lg shadow-primary/5 border border-outline/10'
                  : 'text-text-muted hover:text-foreground'
              }`}
            >
              Documents
            </button>
            <button
              onClick={() => setActiveTab('presentation')}
              className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === 'presentation'
                  ? 'bg-background dark:bg-surface-container-highest text-primary shadow-lg shadow-primary/5 border border-outline/10'
                  : 'text-text-muted hover:text-foreground'
              }`}
            >
              Presentations
            </button>
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <AnimatePresence>
            {filteredDocs.map((doc, index) => (
              <motion.div
                key={doc.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-surface-container border border-outline rounded-3xl p-8 flex flex-col h-full hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-container flex items-center justify-center text-3xl mb-8 border border-outline/50 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500 shadow-inner">
                  <i className={doc.icon}></i>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
                  {doc.title}
                </h3>
                <p className="text-base text-text-muted leading-relaxed mb-10 flex-grow">
                  {doc.description}
                </p>

                {doc.isComingSoon ? (
                  <div className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-surface-container border border-dashed border-outline/50 text-text-muted text-sm font-bold cursor-not-allowed">
                    <i className="ri-time-line text-lg"></i>
                    Coming Soon
                  </div>
                ) : (
                  <a
                    href={doc.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-primary text-on-primary text-sm font-black hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/30"
                  >
                    <i className="ri-eye-line text-lg"></i>
                    View
                  </a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Download;
