import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        const handleIntent = (event) => {
            if (event.detail === 'hire') {
                setFormData(prev => ({
                    ...prev,
                    message: 'Hi Galata, I would like to discuss a job opportunity/project with you!'
                }));
            } else if (event.detail === 'general') {
                setFormData(prev => ({
                    ...prev,
                    message: ''
                }));
            }
        };

        window.addEventListener('setContactIntent', handleIntent);
        return () => window.removeEventListener('setContactIntent', handleIntent);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            'serviceid',
            'template_bft3gea',
            form.current,
            'kYH50EfaU7fdO9EWx'
        )
            .then((result) => {
                console.log(result.text);
                setIsSending(false);
                setIsSent(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setIsSent(false), 5000);
            }, (error) => {
                console.log(error.text);
                setIsSending(false);
                alert("Something went wrong, please try again.");
            });
    };

    return (
        <section id="contact" className="min-h-screen py-20 bg-navy-900 relative flex items-center justify-center">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">
                        <span className="border-b-4 border-accent-cyan pb-1">Contact Me</span>
                    </h2>
                    <p className="text-slate-400 text-lg lg:text-xl max-w-3xl mx-auto">
                        Have a project in mind? Let's talk!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-[43%_57%] gap-12 lg:gap-16 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-100 mb-8">Get In Touch</h3>
                        <p className="text-slate-400 text-lg lg:text-xl leading-relaxed mb-6">
                            I'm currently open to new opportunities and freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="flex items-center space-x-4 text-slate-300">
                            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-navy-800 rounded-full flex items-center justify-center text-accent-cyan">
                                <Mail size={32} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-100 text-lg lg:text-xl">Email</h4>
                                <a href="mailto:galataddesalegn@gmail.com" className="text-sm lg:text-base hover:text-accent-cyan transition-colors">galataddesalegn@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 text-slate-300">
                            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-navy-800 rounded-full flex items-center justify-center text-accent-cyan">
                                <Phone size={32} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-100 text-lg lg:text-xl">Phone</h4>
                                <a href="tel:+251944670015" className="text-sm lg:text-base hover:text-accent-cyan transition-colors">+251944670015</a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 text-slate-300">
                            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-navy-800 rounded-full flex items-center justify-center text-accent-cyan">
                                <MapPin size={32} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-100 text-lg lg:text-xl">Location</h4>
                                <p className="text-sm lg:text-base">Ethiopia</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-navy-800 p-8 rounded-2xl shadow-lg border border-navy-700 relative overflow-hidden"
                    >
                        {isSent && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute inset-0 z-50 bg-navy-800/95 flex flex-col items-center justify-center text-center p-6"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', damping: 12 }}
                                >
                                    <CheckCircle size={80} className="text-accent-cyan mb-4" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-slate-100 mb-2">Message Sent!</h3>
                                <p className="text-slate-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                                <button
                                    onClick={() => setIsSent(false)}
                                    className="mt-6 text-accent-cyan hover:underline font-medium"
                                >
                                    Send another one
                                </button>
                            </motion.div>
                        )}

                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-base lg:text-lg font-medium text-slate-300 mb-3">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-navy-900 border border-navy-700 rounded-lg px-5 py-4 text-slate-100 lg:text-lg focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-base lg:text-lg font-medium text-slate-300 mb-3">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-navy-900 border border-navy-700 rounded-lg px-5 py-4 text-slate-100 lg:text-lg focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-base lg:text-lg font-medium text-slate-300 mb-3">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-navy-900 border border-navy-700 rounded-lg px-5 py-4 text-slate-100 lg:text-lg focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors resize-none"
                                    placeholder="Your message..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSending}
                                className={`w-full ${isSending ? 'bg-navy-700 cursor-not-allowed' : 'bg-accent-cyan hover:bg-accent-cyan/90'} text-navy-900 font-bold py-4 lg:py-5 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-lg lg:text-xl shadow-lg shadow-accent-cyan/10`}
                            >
                                <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                                <Send size={24} className={isSending ? 'animate-pulse' : ''} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
