import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Crosshair, Target, Bug, Search, Network, Server, Shield, FileSearch,
  Code, Terminal
} from 'lucide-react';
import { skills } from '../data/mock';

const iconMap = {
  Crosshair, Target, Bug, Search, Network, Server, Shield, FileSearch
};

const SkillBadge = ({ name, icon, index, isInView, type = 'security' }) => {
  const IconComponent = type === 'security' ? iconMap[icon] : null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gold/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative flex items-center gap-3 px-4 py-3 bg-black/50 border border-gold/20 rounded-xl hover:border-gold/50 hover:bg-gold/5 transition-all cursor-default">
        {type === 'security' && IconComponent && (
          <IconComponent className="w-5 h-5 text-gold" />
        )}
        {type !== 'security' && icon && (
          <img 
            src={icon} 
            alt={name} 
            className="w-6 h-6 object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        )}
        <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
          {name}
        </span>
        <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, icon: Icon, items, index, isInView, type = 'other' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-3">
        <div className="w-2 h-8 bg-gold rounded-full" />
        <Icon className="w-5 h-5 text-gold" />
        <h3 className="text-xl font-display font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {items.map((item, idx) => (
          <SkillBadge
            key={item.name}
            name={item.name}
            icon={item.icon}
            index={idx}
            isInView={isInView}
            type={type}
          />
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block font-mono text-gold text-sm uppercase tracking-widest mb-4">
            // Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Skills & <span className="text-gold">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for offensive security, development, and system administration
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="space-y-16">
          {/* Security Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-gold/5 via-transparent to-gold/5 border border-gold/20 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gold/10 rounded-xl">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">Security Expertise</h3>
                <p className="text-gray-500 text-sm font-mono">// Core competencies</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.securityExpertise.map((skill, idx) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  index={idx}
                  isInView={isInView}
                  type="security"
                />
              ))}
            </div>
          </motion.div>

          {/* Languages & Tools Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <SkillCategory
              title="Languages"
              icon={Code}
              items={skills.languages}
              index={0}
              isInView={isInView}
              type="other"
            />
            <SkillCategory
              title="Tools & IDEs"
              icon={Terminal}
              items={skills.tools}
              index={1}
              isInView={isInView}
              type="other"
            />
          </div>

          {/* Platforms & Databases */}
          <div className="grid md:grid-cols-2 gap-8">
            <SkillCategory
              title="Platforms"
              icon={Server}
              items={skills.platforms}
              index={2}
              isInView={isInView}
              type="other"
            />
            <SkillCategory
              title="Databases"
              icon={Network}
              items={skills.databases}
              index={3}
              isInView={isInView}
              type="other"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
