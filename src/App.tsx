/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Proyects';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="selection:bg-pastel-blue/30 selection:text-dark-green">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
