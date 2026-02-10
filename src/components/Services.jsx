
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Cpu } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Web Development",
            description: "Building fast, responsive websites using modern frameworks and clean structure.",
            icon: <Code size={56} className="text-accent-cyan" />
        },
        {
            title: "UI/UX Design",
            description: "Designing modern interfaces with clear flow and user-focused structure.",
            icon: <Layout size={56} className="text-accent-cyan" />
        },
        {
            title: "AI & Full-Stack Solutions",
            description: "Creating full-stack applications with AI-powered automation, APIs, and scalable backend systems.",
            icon: <Server size={56} className="text-accent-cyan" />
        },
        {
            title: "Automation & AI",
            description: "Integrating AI solutions and automating workflows to increase efficiency.",
            icon: <Cpu size={56} className="text-accent-cyan" />
        }
    ];

    return (
        <section id="services" className="min-h-screen py-20 bg-navy-900 flex items-center justify-center">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">
                        <span className="border-b-4 border-accent-cyan pb-1">Services</span>
                    </h2>
                    <p className="text-slate-400 text-lg lg:text-xl max-w-3xl mx-auto">
                        What I can do for you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.slice(0, 3).map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-navy-800 p-12 lg:p-16 rounded-3xl shadow-lg hover:shadow-accent-cyan/10 transition-all duration-300 border border-transparent hover:border-accent-cyan/30 group min-h-[400px] flex flex-col justify-center"
                        >
                            <div className="mb-8 p-6 lg:p-8 bg-navy-900 rounded-full w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-100 mb-6 text-center group-hover:text-accent-cyan transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 text-center leading-relaxed text-lg lg:text-xl">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
