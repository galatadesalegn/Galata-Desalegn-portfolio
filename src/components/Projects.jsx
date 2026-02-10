import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = () => {
    // Placeholder projects data
    const projects = [
        {
            title: "ASTU Gebeya Ecommerce Platform",
            category: "Full Stack",
            image: project1,
            description: "A campus-based C2C marketplace for ASTU students to buy, sell, and trade items safely.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            demo: "#",
            github: "https://github.com/galatadesalegn"
        },
        {
            title: "Professional Developer Portfolio",
            category: "Productivity",
            image: project2,
            description: "A high-performance personal website featuring modern UI/UX, smooth animations, and a mobile-first design.",
            tech: ["Next.js", "Figma", "Tailwind CSS"],
            demo: "#",
            github: "https://github.com/galatadesalegn"
        },
        {
            title: "AI Image Generator",
            category: "AI / ML",
            image: project3,
            description: "A Full-Stack application that uses deep learning to transform text prompts into unique high-quality digital art.",
            tech: ["React", "OpenAI API", "Express"],
            demo: "#",
            github: "https://github.com/galatadesalegn"
        }
    ];

    return (
        <section id="projects" className="min-h-screen py-20 bg-navy-800 flex items-center justify-center">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">
                        <span className="border-b-4 border-accent-cyan pb-1">Projects</span>
                    </h2>
                    <p className="text-slate-400 text-lg lg:text-xl max-w-3xl mx-auto">
                        Some of my recent work.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-xl overflow-hidden bg-navy-900 shadow-xl border border-navy-700 hover:border-accent-cyan/50 transition-all duration-300"
                        >
                            <div className="relative h-64 lg:h-80 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 backdrop-blur-sm">
                                    <a href={project.demo} className="p-3 bg-accent-cyan text-navy-900 rounded-full hover:bg-white transition-colors">
                                        <ExternalLink size={24} />
                                    </a>
                                    <a href={project.github} className="p-3 bg-navy-800 text-slate-100 rounded-full hover:text-accent-cyan transition-colors">
                                        <Github size={24} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <span className="text-accent-cyan text-xs font-bold tracking-wider uppercase mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-xl lg:text-2xl font-bold text-slate-100 mb-3 group-hover:text-accent-cyan transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm lg:text-base mb-6 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 lg:gap-3">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs lg:text-sm font-medium text-slate-300 bg-navy-700 px-3 py-1.5 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
