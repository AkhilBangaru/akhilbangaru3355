import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Shield, ExternalLink, Star, GitFork, Terminal, Lock, Network, 
  FileSearch, Container, Server
} from 'lucide-react';
import { projects } from '../data/mock';

const iconMap = {
  Shield: Shield,
  Container: Container,
  Terminal: Terminal,
  Network: Network,
  FileSearch: FileSearch,
  Lock: Lock,
  Server: Server
};

const ProjectCard = ({ project, index, isInView }) => {
  const IconComponent = iconMap[project.icon] || Shield;

  const categoryColors = {
    'Honeypot': 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
    'Containerized Security': 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
    'Privilege Escalation': 'from-red-500/20 to-pink-500/20 border-red-500/30',
    'Active Directory': 'from-purple-500/20 to-violet-500/20 border-purple-500/30',
    'Forensics': 'from-green-500/20 to-emerald-500/20 border-green-500/30',
    'Cryptography': 'from-gold/20 to-yellow-500/20 border-gold/30'
  };

  const colorClass = categoryColors[project.category] || categoryColors['Honeypot'];

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative block"
    >
      {/* Card Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
      
      {/* Card */}
      <div className={`relative h-full bg-gradient-to-br ${colorClass} backdrop-blur-sm border rounded-2xl p-6 overflow-hidden transition-all duration-300 group-hover:border-gold/50`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Header */}
        <div className="relative flex items-start justify-between mb-4">
          <div className="p-3 bg-black/30 rounded-xl group-hover:bg-gold/20 transition-colors">
            <IconComponent className="w-6 h-6 text-gold" />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <Star className="w-4 h-4" />
              <span>{project.stars}</span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-gold transition-colors" />
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-mono uppercase tracking-wider rounded-full mb-3">
            {project.category}
          </span>
          <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-gold transition-colors">
            {project.name.replace(/_/g, ' ')}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-black/40 text-gray-300 text-xs font-mono rounded-md border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Corner Decoration */}
        <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gold/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.a>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
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
            // Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Security <span className="text-gold">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A collection of offensive security tools, honeypots, and automation systems built for the cybersecurity community
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/AkhilBangaru?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-black font-mono text-sm uppercase tracking-wider rounded-full hover:bg-gold/90 transition-colors group"
          >
            <GitFork className="w-4 h-4" />
            View All 22 Repositories
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
