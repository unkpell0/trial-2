import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative text-white text-center py-32 md:py-48 px-6 flex items-center justify-center min-h-[85vh]">
      <div 
        className="absolute inset-0 z-0" 
        style={{ background: 'linear-gradient(135deg, #16213e 0%, #4d2a4a 50%, #ef4444 100%)' }}
      ></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 has-animation">
          Strategic & Financial Co-pilot
        </h1>
        <p className="text-lg md:text-xl text-neutral-200 mb-10 max-w-3xl mx-auto has-animation" style={{ animationDelay: '0.2s' }}>
          Engage an expert, ingenious, and versatile resource dedicated to the success of your organization.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 has-animation" style={{ animationDelay: '0.4s' }}>
          <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-100 text-[#1a1a2e] font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
            <span>Let's Schedule a Meeting</span>
            <ArrowRightIcon className="w-5 h-5"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;