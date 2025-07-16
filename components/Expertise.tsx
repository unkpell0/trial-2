import React from 'react';
import { CheckIcon } from './icons/CheckIcon';

const expertiseItems1 = [
    "Business Plan development and tracking",
    "Performance management (reporting, KPIs)",
    "Capital transactions (M&A, fundraising)",
    "Cash flow and working capital optimization"
];

const expertiseItems2 = [
    "Daily treasury operations",
    "Implementing reliable cash forecasting",
    "Banking relationships and financing",
    "Securing cash flows and fraud prevention"
];

const ExpertiseColumn: React.FC<{ title: string; items: string[], delay: string }> = ({ title, items, delay }) => (
    <div className="has-animation" style={{ animationDelay: delay }}>
        <h3 className="text-3xl font-bold mb-6 gradient-text">{title}</h3>
        <ul className="space-y-4">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <span className="gradient-text"><CheckIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0" /></span>
                    <span className="text-gray-700">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);


const Expertise: React.FC = () => {
    return (
        <section id="expertise" className="py-20 sm:py-28 bg-neutral-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 has-animation gradient-text">Our Core Expertise</h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto has-animation" style={{ animationDelay: '0.2s' }}>
                        A dual competency designed to fuel your growth and ensure financial peace of mind.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    <ExpertiseColumn title="Strategic Financial Management" items={expertiseItems1} delay="0s" />
                    <ExpertiseColumn title="Advanced Treasury Management" items={expertiseItems2} delay="0.2s" />
                </div>
            </div>
        </section>
    );
};

export default Expertise;