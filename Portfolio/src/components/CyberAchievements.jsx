import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Flame, Medal, CheckCircle, ExternalLink, Award } from 'lucide-react';
import { personalInfo, tryhackmeStats } from '../data/mock';

const StatCard = ({ label, value, subValue, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-[#111111] border border-gray-800 rounded-xl p-6 hover:border-[#88cc14]/50 transition-colors group"
  >
    <div className="flex justify-between items-start mb-4">
      <span className="text-gray-400 font-medium">{label}</span>
      {subValue && (
        <span className="bg-[#1a2e1a] text-[#88cc14] text-xs px-2 py-1 rounded-full font-mono">
          {subValue}
        </span>
      )}
    </div>
    <div className="flex items-end gap-3">
      {Icon && <Icon className="w-8 h-8 text-[#88cc14] mb-1" />}
      <span className="text-3xl font-display font-bold text-white group-hover:text-[#88cc14] transition-colors">
        {value}
      </span>
    </div>
  </motion.div>
);

const CyberAchievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="py-24 bg-black relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#88cc14]/5 blur-[100px] rounded-full pointing-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#88cc14]/5 blur-[100px] rounded-full pointing-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[#88cc14] text-sm uppercase tracking-widest mb-4 block">
            // TryHackMe Stats
          </span>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
            Cyber <span className="text-[#88cc14]">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hands-on cybersecurity training and CTF challenges
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#111111] border border-gray-800 rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#88cc14]/30 transition-all"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-[#88cc14] blur-xl opacity-20 rounded-full" />
              <div className="w-32 h-32 rounded-full p-1 border-2 border-[#88cc14] relative">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.username}
                  className="w-full h-full rounded-full object-cover"
                />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#88cc14] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  PREMIUM USER
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-2">
              {tryhackmeStats.username}
            </h3>
            <p className="text-[#88cc14] font-mono text-sm mb-6">[0x8] | HACKER</p>

            <div className="bg-[#1a2e1a] text-[#88cc14] px-4 py-1.5 rounded-full text-sm font-medium mb-8 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Student
            </div>

            <a
              href="https://tryhackme.com/p/akhilbangaru3355"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg border border-[#88cc14]/30 text-[#88cc14] font-mono text-sm hover:bg-[#88cc14] hover:text-black transition-all flex items-center justify-center gap-2 group"
            >
              View Profile
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Stats Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            <StatCard
              label="Rank"
              value={tryhackmeStats.rank.toLocaleString()}
              subValue={tryhackmeStats.percentile}
              icon={Trophy}
              delay={0.3}
            />
            <StatCard
              label="Badges"
              value={tryhackmeStats.badges}
              icon={Medal}
              delay={0.4}
            />
            <StatCard
              label="Streak"
              value={tryhackmeStats.streak}
              icon={Flame}
              delay={0.5}
            />
            <StatCard
              label="Completed rooms"
              value={tryhackmeStats.completedRooms}
              icon={CheckCircle}
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberAchievements;
