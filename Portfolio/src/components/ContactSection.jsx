import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, Github, Linkedin, Instagram, Send, MapPin, Terminal, 
  ArrowRight, Copy, Check, FileText
} from 'lucide-react';
import { personalInfo } from '../data/mock';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      href: personalInfo.socials.github,
      color: 'hover:bg-gray-800 hover:border-gray-600',
      description: 'Check out my repositories'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: personalInfo.socials.linkedin,
      color: 'hover:bg-blue-900/30 hover:border-blue-500/50',
      description: 'Connect professionally'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: personalInfo.socials.instagram,
      color: 'hover:bg-pink-900/30 hover:border-pink-500/50',
      description: 'Follow my journey'
    },
    { 
      name: 'Email', 
      icon: Mail, 
      href: personalInfo.socials.email,
      color: 'hover:bg-gold/20 hover:border-gold/50',
      description: 'Get in touch directly'
    }
  ];

  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-gold text-sm uppercase tracking-widest mb-4">
            // Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Interested in collaborating on security research, innovative projects, or just want to chat about cybersecurity?
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Terminal Style Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-black/60 border border-gold/20 rounded-2xl overflow-hidden backdrop-blur-sm"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-black/80 border-b border-gold/10">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 font-mono text-xs text-gray-500">contact@akhil.sec ~ bash</span>
          </div>

          <div className="p-8 md:p-12">
            {/* Command Line */}
            <div className="font-mono text-sm mb-8">
              <p className="text-gray-400 mb-2">
                <span className="text-green-500">root@akhil</span>:<span className="text-blue-400">~</span>$ cat contact_info.json
              </p>
              <div className="bg-black/50 rounded-lg p-4 border border-gold/10">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    <span className="text-gray-500">{'{'}</span>{"\n"}
                    <span className="text-purple-400">  "name"</span>: <span className="text-green-400">"{personalInfo.fullName}"</span>,{"\n"}
                    <span className="text-purple-400">  "title"</span>: <span className="text-green-400">"{personalInfo.title}"</span>,{"\n"}
                    <span className="text-purple-400">  "location"</span>: <span className="text-green-400">"{personalInfo.location}"</span>,{"\n"}
                    <span className="text-purple-400">  "status"</span>: <span className="text-green-400">"Open to opportunities"</span>{"\n"}
                    <span className="text-gray-500">{'}'}</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Email CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-10"
            >
              <button
                onClick={copyEmail}
                className="flex items-center gap-3 px-6 py-4 bg-gold/10 border border-gold/30 rounded-xl hover:bg-gold/20 hover:border-gold/50 transition-all group w-full sm:w-auto justify-center"
              >
                <Mail className="w-5 h-5 text-gold" />
                <span className="text-white font-mono">{personalInfo.email}</span>
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-500 group-hover:text-gold transition-colors" />
                )}
              </button>
              <a
                href={personalInfo.socials.email}
                className="flex items-center gap-2 px-8 py-4 bg-gold text-black font-mono text-sm uppercase tracking-wider rounded-xl hover:bg-gold/90 transition-colors group w-full sm:w-auto justify-center"
              >
                <Send className="w-4 h-4" />
                Send Email
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://drive.google.com/file/d/1N_D0hqyAQKjvXVHGTek9pAoq-uf6dZ1V/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-transparent border border-gold text-gold font-mono text-sm uppercase tracking-wider rounded-xl hover:bg-gold/10 transition-colors group w-full sm:w-auto justify-center"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </a>
            </motion.div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex flex-col items-center gap-3 p-6 bg-black/30 border border-gold/10 rounded-xl transition-all ${social.color}`}
                >
                  <social.icon className="w-6 h-6 text-gold" />
                  <span className="text-white font-medium text-sm">{social.name}</span>
                  <span className="text-gray-500 text-xs text-center">{social.description}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-2 mt-10 text-gray-500"
        >
          <MapPin className="w-4 h-4 text-gold" />
          <span className="font-mono text-sm">Based in {personalInfo.location}</span>
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-2" />
          <span className="text-green-500 text-xs">Available for opportunities</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
