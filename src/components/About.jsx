
import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import resumeFile from '../assets/galata-desalegn.pdf';

const About = () => {
    const skills = [
        "JavaScript (ES6+)", "React.js", "Node.js", "Tailwind CSS",
        "TypeScript", "Next.js", "PostgreSQL", "MongoDB",
        "Git/GitHub", "Docker", "AWS", "Figma"
    ];

    return (
        <section id="about" className="min-h-screen py-20 bg-navy-800 relative flex items-center justify-center">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">
                        <span className="border-b-4 border-accent-cyan pb-1">About Me</span>
                    </h2>
                    <p className="text-slate-400 text-lg lg:text-xl max-w-3xl mx-auto">
                        Get to know me and my technical expertise.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-navy-900 ring-1 ring-white/10 rounded-3xl p-12 lg:p-20 min-h-[400px] flex flex-col justify-center items-start shadow-2xl">
                                <p className="leading-relaxed text-slate-300 lg:text-2xl font-medium mb-8">
                                    I am an AI engineer and full-stack web developer. I work with the MERN stack, AI-based web automation, and modern UI/UX design. My skills include backend systems, frontend development, APIs, Python, and problem solving. I am focused on building human-centered AI and intelligent robotics that align with human thinking.
                                </p>
                                <a
                                    href={resumeFile}
                                    download="galata-desalegn.pdf"
                                    className="px-8 py-3.5 bg-accent-cyan text-navy-900 rounded hover:bg-accent-cyan/90 transition-all duration-300 font-bold text-lg tracking-wide flex items-center gap-2 group/btn shadow-lg shadow-accent-cyan/20"
                                >
                                    <FileText size={22} className="group-hover/btn:scale-110 transition-transform" />
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold text-slate-100 mb-8">Technical Skills</h3>
                        <div className="flex flex-wrap gap-4">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-6 py-3 bg-navy-700/50 text-accent-cyan rounded-full text-base lg:text-lg font-medium hover:bg-accent-cyan/10 hover:scale-105 transition-all duration-300 cursor-default border border-accent-cyan/20"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
