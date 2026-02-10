
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Github, Linkedin, Twitter, Send } from 'lucide-react';
import profileImg from '../assets/_image (1).jpg';

const Hero = () => {
    const titles = ["Full-Stack Developer", "AI Developer"];
    const [index, setIndex] = useState(0);

    // 3D Tilt Motion Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Create smooth springs
    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

    // Map mouse position to rotation
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXRelative = (event.clientX - rect.left) / width - 0.5;
        const mouseYRelative = (event.clientY - rect.top) / height - 0.5;

        x.set(mouseXRelative);
        y.set(mouseYRelative);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [titles.length]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse-slow delay-1000"></div>

            <div className="container mx-auto grid md:grid-cols-[40%_60%] gap-12 items-center">
                {/* Image/Visual */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="relative w-full h-[350px] md:h-[450px] lg:h-[550px]"
                    style={{ perspective: "1200px" }}
                >
                    <motion.div
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d"
                        }}
                        className="w-full h-full rounded-3xl border-2 border-accent-cyan/30 overflow-hidden bg-navy-800 relative z-20 group shadow-2xl shadow-accent-cyan/10"
                    >
                        <motion.img
                            src={profileImg}
                            alt="Galata Desalegn"
                            style={{
                                translateZ: "50px",
                                scale: 1.1
                            }}
                            className="w-full h-full object-cover object-center transition-transform duration-700"
                        />
                        {/* Decorative Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" style={{ translateZ: "60px" }}></div>

                        {/* Glowing Inner Border */}
                        <div className="absolute inset-0 rounded-3xl border border-accent-cyan/20 pointer-events-none group-hover:border-accent-cyan/40 transition-colors duration-500" style={{ translateZ: "70px" }}></div>

                        {/* Tech Corner Accents */}
                        <div
                            className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-accent-cyan/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:-translate-x-1 group-hover:-translate-y-1"
                            style={{ translateZ: "100px" }}
                        ></div>
                        <div
                            className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-accent-cyan/50 rounded-br-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-1 group-hover:translate-y-1"
                            style={{ translateZ: "100px" }}
                        ></div>
                    </motion.div>

                    {/* Floating Decorative Elements */}

                    <motion.div
                        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-6 -left-6 w-14 h-14 bg-navy-800 border border-accent-cyan/30 rounded-full flex items-center justify-center z-30 shadow-xl shadow-accent-cyan/5 text-accent-cyan lg:flex hidden"
                    >
                        <div className="w-2 h-2 bg-accent-cyan rounded-full animate-ping"></div>
                    </motion.div>

                    {/* Background Decorative Element */}
                    <div className="absolute -top-10 -left-10 w-48 h-48 bg-accent-cyan/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow delay-1000"></div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-accent-cyan font-bold text-3xl md:text-4xl lg:text-4xl mb-4 tracking-wide">Hello, I'm</p>
                    <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-slate-100 mb-4 leading-tight">
                        Galata Desalegn<span className="text-accent-cyan"></span>
                    </h1>
                    <div className="h-[40px] md:h-[50px] lg:h-[60px] overflow-hidden mb-6 flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={titles[index]}
                                className="text-2xl md:text-3xl lg:text-3xl font-bold text-accent-cyan leading-tight flex"
                            >
                                {titles[index].split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{
                                            duration: 0.2,
                                            delay: i * 0.04,
                                            ease: "easeOut"
                                        }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: titles[index].length * 0.04 }}
                                >
                                    .
                                </motion.span>
                            </motion.h2>
                        </AnimatePresence>
                    </div>
                    <p className="text-slate-light text-lg lg:text-xl mb-8 max-w-xl leading-relaxed font-bold">
                        I create modern, scalable, and visually stunning web applications. Let's turn your ideas into digital reality with cutting-edge technologies.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <button
                            onClick={() => {
                                window.dispatchEvent(new CustomEvent('setContactIntent', { detail: 'hire' }));
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-3.5 bg-accent-cyan text-navy-900 rounded hover:bg-accent-cyan/90 transition-all duration-300 font-bold text-base lg:text-lg tracking-wide shadow-lg shadow-accent-cyan/20"
                        >
                            Hire Me
                        </button>
                        <button
                            onClick={() => {
                                window.dispatchEvent(new CustomEvent('setContactIntent', { detail: 'general' }));
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-3.5 bg-transparent border border-accent-cyan text-accent-cyan rounded hover:bg-accent-cyan/10 transition-all duration-300 font-bold text-base lg:text-lg tracking-wide"
                        >
                            Contact Me
                        </button>
                    </div>

                    <div className="flex items-center gap-8 text-slate-400">
                        <a href="https://github.com/galatadesalegn" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors transform hover:-translate-y-1"><Github size={28} /></a>
                        <a href="https://www.linkedin.com/in/galatadesalegn" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors transform hover:-translate-y-1"><Linkedin size={28} /></a>
                        <a href="https://x.com/galatadesalegn" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors transform hover:-translate-y-1"><Twitter size={28} /></a>
                        <a href="https://t.me/gelodesalegn" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors transform hover:-translate-y-1"><Send size={28} /></a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
