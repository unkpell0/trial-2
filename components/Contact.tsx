import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="relative text-white py-20 sm:py-28">
            <div 
                className="absolute inset-0 z-0" 
                style={{ background: 'linear-gradient(135deg, #16213e 0%, #4d2a4a 50%, #ef4444 100%)' }}
            ></div>
            <div className="relative z-10 container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto has-animation">
                    Have a project or a need?
                    <br />
                    Let's schedule an exchange.
                </h2>
                <p className="text-lg text-neutral-200 max-w-2xl mx-auto mb-10 has-animation" style={{ animationDelay: '0.2s' }}>
                    Schedule a complimentary consultation to discuss your unique challenges and explore how Bird Financial can become your trusted partner.
                </p>
                <a 
                    href="mailto:contact@bird.financial" 
                    className="inline-flex items-center justify-center gap-3 bg-gray-100 text-[#1a1a2e] font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 text-lg has-animation"
                    style={{ animationDelay: '0.4s' }}
                >
                    <span>Let's Schedule a Meeting</span>
                    <ArrowRightIcon className="w-6 h-6" />
                </a>
            </div>
        </section>
    );
};

export default Contact;