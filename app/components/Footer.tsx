'use client';

import React from 'react';
const Footer = () => {
  return (
    <footer className="dark bg-background border-t border-outline/30 pt-20 pb-10 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4 group cursor-default">
            <span className="text-primary text-2xl font-extrabold tracking-tight text-foreground font-display">
              GradeLoop
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-text-muted text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
            Automate Assessment, Elevate Learning — SLIIT Research Project
            2025-2026
          </p>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8">
            {[
              { name: 'Home', href: '#home' },
              { name: 'Scope', href: '#scope' },
              { name: 'Milestones', href: '#milestones' },
              { name: 'Downloads', href: '#downloads' },
              { name: 'Team', href: '#team' },
              { name: 'Achievements', href: '#achievements' },
              { name: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-6 mb-10">
            {[
              {
                icon: 'ri-twitter-x-fill',
                link: 'https://x.com/sliitcomputing',
              },
              {
                icon: 'ri-linkedin-fill',
                link: 'https://www.linkedin.com/in/sri-lanka-institute-of-information-technology-sliit-3598b3106/',
              },
              {
                icon: 'ri-github-fill',
                link: 'https://github.com/4yrg/gradeloop-core-v2',
              },
              {
                icon: 'ri-facebook-fill',
                link: 'https://www.facebook.com/sliit.lk/',
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors text-xl"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-outline/20 w-full">
            <p className="text-xs font-medium text-text-muted">
              © 2025 GradeLoop Research Team — SLIIT. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
