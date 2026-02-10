import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import resumeFile from '../assets/galata-desalegn.pdf';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="w-full px-6 md:px-10 flex justify-between items-center">
                <a href="#" className="text-2xl lg:text-3xl font-bold text-slate-100 flex items-center gap-1 group">
                    <span className="group-hover:text-accent-cyan transition-colors">Galata Desalegn</span>
                    <span className="text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="text-slate-300 hover:text-accent-cyan font-medium text-sm lg:text-lg transition-colors relative group"
                        >
                            <span className="relative z-10">{link.name}</span>
                            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-accent-cyan transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <a
                        href={resumeFile}
                        download="galata-desalegn.pdf"
                        className="px-5 py-2.5 border border-accent-cyan text-accent-cyan rounded hover:bg-accent-cyan/10 transition-colors text-sm lg:text-lg font-medium"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-accent-cyan focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-navy-800 border-b border-navy-700 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-4 space-y-4">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-slate-300 hover:text-accent-cyan font-medium block py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href={resumeFile}
                                download="galata-desalegn.pdf"
                                className="inline-block text-center px-4 py-2 border border-accent-cyan text-accent-cyan rounded hover:bg-accent-cyan/10 transition-colors text-sm font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
