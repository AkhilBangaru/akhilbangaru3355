import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Target, ArrowRight } from 'lucide-react';

const CertificationCard = ({ title, issuer, status, progress, theme, delay }) => {
    // Explicitly define styles to ensure Tailwind generates the classes
    const styles = theme === 'gold'
        ? {
            wrapper: "bg-[#0a0a0a] border border-gold/20 hover:border-gold/50",
            iconBg: "bg-gold/10",
            iconColor: "text-gold",
            badge: "bg-gold/10 text-gold border-gold/20",
            progressBg: "bg-gold"
        }
        : {
            wrapper: "bg-[#0a0a0a] border border-green-500/20 hover:border-green-500/50",
            iconBg: "bg-green-500/10",
            iconColor: "text-green-500",
            badge: "bg-green-500/10 text-green-500 border-green-500/20",
            progressBg: "bg-green-500"
        };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className={`${styles.wrapper} rounded-xl p-6 transition-all group border`}
        >
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${styles.iconBg}`}>
                    <Award className={`w-8 h-8 ${styles.iconColor}`} />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-mono border ${styles.badge}`}>
                    {status}
                </span>
            </div>

            <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-gold transition-colors">
                {title}
            </h3>
            <p className="text-gray-400 text-sm mb-6">{issuer}</p>

            {progress !== undefined && (
                <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-500 font-mono">
                        <span>Progress</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className={`h-full ${styles.progressBg} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            )}

            {progress === undefined && (
                <p className="text-gray-500 text-sm">
                    Continuous learning platform for cybersecurity skills
                </p>
            )}
        </motion.div>
    );
};

const FutureGoal = ({ name, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="flex items-center gap-4 bg-[#0a0a0a] border border-gray-800 p-4 rounded-lg hover:border-gold/30 transition-colors group"
    >
        <div className="p-2 rounded-md bg-gray-900 group-hover:bg-gold/10 transition-colors">
            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-gold" />
        </div>
        <div>
            <h4 className="font-display font-bold text-gray-200 group-hover:text-white">
                <span className="text-gold">{name.split(' - ')[0]}</span>
                <span className="text-gray-500"> - {name.split(' - ')[1]}</span>
            </h4>
        </div>
    </motion.div>
);

const Certifications = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="certifications" className="py-24 bg-black relative">
            <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block border border-gold/30 rounded-full px-4 py-1.5 font-mono text-gold text-xs uppercase tracking-widest mb-6">
            // certifications.status
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tight">
                        Certifications <span className="text-gold">& Learning</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Continuous learning and professional certifications in cybersecurity
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <CertificationCard
                        title="PJPT - Practical Junior Penetration Tester"
                        issuer="TCM Security"
                        status="In Progress"
                        progress={65}
                        theme="gold"
                        delay={0.2}
                    />
                    <CertificationCard
                        title="TryHackMe"
                        issuer="TryHackMe"
                        status="Active"
                        theme="green"
                        delay={0.3}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border border-gold/20 rounded-2xl p-8 bg-gradient-to-b from-transparent to-gold/5"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <Target className="w-6 h-6 text-gold" />
                        <h3 className="text-xl font-display font-bold text-gold">Future Goals</h3>
                    </div>

                    <div className="space-y-4">
                        <FutureGoal
                            name="OSCP - Offensive Security Certified Professional"
                            delay={0.5}
                        />
                        <FutureGoal
                            name="CEH - Certified Ethical Hacker"
                            delay={0.6}
                        />
                        <FutureGoal
                            name="CRTP - Certified Red Team Professional"
                            delay={0.7}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
