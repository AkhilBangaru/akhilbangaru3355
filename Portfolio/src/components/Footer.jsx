import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Github, Linkedin, Instagram, Mail, Heart, Terminal, ArrowUp } from 'lucide-react';
import { personalInfo, navLinks } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: personalInfo.socials.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: personalInfo.socials.instagram, label: 'Instagram' },
    { icon: Mail, href: personalInfo.socials.email, label: 'Email' },
  ];

  return (
    <footer className="relative bg-black border-t border-gold/10">
      {/* Decorative Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <motion.a
              href="#home"
              className="flex items-center gap-3 group mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <Shield className="w-8 h-8 text-gold" />
                <div className="absolute inset-0 bg-gold/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-display text-xl text-white tracking-wider">
                AKHIL<span className="text-gold">.</span>SEC
              </span>
            </motion.a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Cybersecurity enthusiast exploring offensive security, red teaming, and building innovative security tools.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center bg-gold/5 border border-gold/20 rounded-full text-gray-400 hover:text-gold hover:border-gold hover:bg-gold/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-gold text-sm uppercase tracking-widest mb-6">
              // Navigation
            </h4>
            <nav className="space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors text-sm group"
                >
                  <span className="text-gold/40 font-mono">0{index + 1}.</span>
                  <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="font-mono text-gold text-sm uppercase tracking-widest mb-6">
              // Quick Contact
            </h4>
            <div className="space-y-4">
              <div className="bg-black/50 border border-gold/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-4 h-4 text-gold" />
                  <span className="font-mono text-xs text-gray-500">email.txt</span>
                </div>
                <a 
                  href={personalInfo.socials.email}
                  className="text-white hover:text-gold transition-colors text-sm font-mono"
                >
                  {personalInfo.email}
                </a>
              </div>
              <p className="text-gray-500 text-xs">
                Feel free to reach out for collaborations, security research, or just to say hello!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <span>© {new Date().getFullYear()} {personalInfo.name}.</span>
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-gold fill-gold" />
            <span>for the security community.</span>
          </p>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-mono hover:bg-gold/20 hover:border-gold/50 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
