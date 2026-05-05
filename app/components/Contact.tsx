'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const SERVICE_ID = 'service_6150xyj';
    const TEMPLATE_ID = 'template_yep8e1c';
    const PUBLIC_KEY = 'feYQNx0qagZO1OHXB';

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        },
        PUBLIC_KEY
      );

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-8 bg-background relative overflow-hidden snap-start"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
          {/* Left Column: Header + Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between h-full"
          >
            <div className="space-y-10">
              <div>
                <span className="inline-block px-1 py-1.5 text-primary text-[12px] font-bold uppercase tracking-wider mb-4">
                  Get In Touch
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight font-display">
                  Contact Us
                </h2>
                <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
                  Have questions about our research or want to collaborate? We'd
                  love to hear from you.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container border border-outline/30 flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <i className="ri-mail-line"></i>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:gradeloop.app@gmail.com"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      gradeloop.app@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container border border-outline/30 flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <i className="ri-phone-line"></i>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+94703164695"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      (+94) 70 316 4695
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container border border-outline/30 flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">
                      Location
                    </p>
                    <p className="text-lg font-medium text-foreground">
                      SLIIT, Malabe, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-4">
                <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">
                  Follow Us
                </p>
                <div className="flex gap-4">
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
                      link: 'https://github.com/sliitsesc',
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
                      className="w-10 h-10 rounded-xl bg-surface-container border border-outline/30 flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder Image */}
            <div className="rounded-3xl overflow-hidden border border-outline/30 shadow-xl bg-surface-container group mt-10">
              <a
                href="https://maps.app.goo.gl/UEFek65tWLanw8Pg9"
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-[300px] w-full block overflow-hidden"
              >
                <Image
                  src="https://webasset.sliit.lk/web/SLIIT-malabe_1769743861.jpg"
                  alt="SLIIT Campus"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl transform transition-all duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-lg shadow-primary/20">
                      <i className="ri-map-pin-2-fill text-xl"></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs font-bold uppercase tracking-widest opacity-70 mb-0.5">
                        Our Location
                      </p>
                      <p className="text-white text-sm font-extrabold truncate">
                        SLIIT Malabe Campus, Sri Lanka
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-primary transition-all">
                      <i className="ri-arrow-right-up-line"></i>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 md:p-10 rounded-[32px] bg-surface-container border border-outline/30 shadow-2xl shadow-primary/5"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 font-display">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-xs font-bold text-text-muted uppercase tracking-wider ml-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-background border border-outline/30 text-foreground placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-xs font-bold text-text-muted uppercase tracking-wider ml-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-background border border-outline/30 text-foreground placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-bold text-text-muted uppercase tracking-wider ml-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-background border border-outline/30 text-foreground placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-xs font-bold text-text-muted uppercase tracking-wider ml-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Research Collaboration / General Inquiry"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-background border border-outline/30 text-foreground placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-bold text-text-muted uppercase tracking-wider ml-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry or how you'd like to collaborate..."
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-2xl bg-background border border-outline/30 text-foreground placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 group ${
                  status === 'success'
                    ? 'bg-green-500 text-white'
                    : status === 'error'
                      ? 'bg-red-500 text-white'
                      : 'bg-primary text-on-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5'
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === 'loading' ? (
                  <>
                    <i className="ri-loader-4-line animate-spin text-2xl"></i>
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <i className="ri-checkbox-circle-fill text-2xl"></i>
                    Message Sent!
                  </>
                ) : status === 'error' ? (
                  <>
                    <i className="ri-error-warning-fill text-2xl"></i>
                    Failed to Send
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="ri-send-plane-fill group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i>
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-center text-green-500 mt-4 text-sm font-medium">
                  Thank you! We'll get back to you shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-red-500 mt-4 text-sm font-medium">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
