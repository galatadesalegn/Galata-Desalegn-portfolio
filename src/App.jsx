
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-navy-900 min-h-screen text-slate-100 font-sans selection:bg-accent-cyan selection:text-navy-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-6 text-slate-400 text-sm">
        <p>© 2026 Galata Desalegn. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
