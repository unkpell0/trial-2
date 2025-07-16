import React from 'react';
import { CheckIcon } from './icons/CheckIcon';
import { XIcon } from './icons/XIcon';

const withoutBird = [
    "Lack of cash flow visibility",
    "Decisions based on gut feeling",
    "Time-consuming financial processes",
    "Strained banking relationships"
];

const withBird = [
    "Clear visibility and reliable forecasts",
    "Decisions backed by precise data",
    "Optimized and automated processes",
    "A trusted partner for banks"
];

const Approach: React.FC = () => {
    return (
        <section id="approach" className="py-20 sm:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 has-animation gradient-text">The Bird Financial Difference</h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto has-animation" style={{ animationDelay: '0.2s' }}>
                        We transform financial uncertainty into strategic control, turning your finance function into a powerful growth engine.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white border-2 border-red-500/50 rounded-2xl p-8 has-animation shadow-lg" style={{ animationDelay: '0s' }}>
                        <h3 className="text-3xl font-bold text-red-500 mb-6 text-center">Without Bird</h3>
                        <ul className="space-y-4">
                            {withoutBird.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <XIcon className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white border-2 border-purple-500/50 rounded-2xl p-8 has-animation shadow-lg" style={{ animationDelay: '0.2s' }}>
                        <h3 className="text-3xl font-bold text-purple-600 mb-6 text-center">With Bird</h3>
                        <ul className="space-y-4">
                            {withBird.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckIcon className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Approach;