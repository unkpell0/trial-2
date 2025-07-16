import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Credentials from './components/Credentials';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Approach from './components/Approach';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Credentials />
        <Services />
        <Expertise />
        <Approach />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;