import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Target, Shield, Code, MapPin, Calendar } from 'lucide-react';
import { personalInfo, certifications } from '../data/mock';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Shield,
      title: 'Offensive Security',
      description: 'Building security tools, honeypots, and automation systems'
    },
    {
      icon: Target,
      title: 'Red Team Focus',
      description: 'Exploring vulnerabilities, threat analysis, and exploit techniques'
    },
    {
      icon: Code,
      title: 'Detection Systems',
      description: 'Working on advanced detection systems & real-time dashboards'
    },
    {
      icon: Award,
      title: 'CPTS Certification',
      description: 'Currently preparing for Certified Penetration Testing Specialist'
    }
  ];

  return (
    <section id="about" className="relative py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block font-mono text-gold text-sm uppercase tracking-widest mb-4">
            // About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Who Am <span className="text-gold">I?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Profile Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Image Container */}
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-gold/20 rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500" />
              <div className="absolute -inset-4 border border-gold/20 rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500" />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Info Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm border border-gold/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span className="text-gray-300 text-sm">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span className="text-gray-300 text-sm">Pursuing: CSE Specialization with Cyber Security</span>
                  </div>
                </div>
              </div>

              {/* Glowing Effect */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gold/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Terminal Style Bio */}
            <div className="bg-black/50 border border-gold/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 font-mono text-xs text-gray-500">about.txt</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <p className="text-gray-400">
                  <span className="text-green-500">$</span> cat about.txt
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {personalInfo.bio}
                </p>
                <p className="text-gold">
                  <br />Open to collaborations, security research, and innovative projects.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="group bg-black/30 border border-gold/10 rounded-lg p-4 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
