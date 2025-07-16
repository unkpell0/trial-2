import React from 'react';

interface ProcessStepProps {
    number: string;
    title: string;
    description: string;
    delay: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, delay }) => (
    <div className="has-animation" style={{ animationDelay: delay }}>
        <div className="flex items-center mb-4">
            <div className="gradient-bg w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xl text-white mr-4 shadow-lg">
                {number}
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-neutral-600 md:pl-16">{description}</p>
    </div>
);

const Process: React.FC = () => {
    return (
        <section id="process" className="py-20 sm:py-28 bg-neutral-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 has-animation gradient-text">Our Engagement Process</h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto has-animation" style={{ animationDelay: '0.2s' }}>
                        A clear, collaborative roadmap to financial mastery.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                    <ProcessStep 
                        number="01"
                        title="Discovery & Analysis"
                        description="We begin with a deep dive into your financial health, processes, and strategic goals to identify key challenges and opportunities."
                        delay="0s"
                    />
                    <ProcessStep 
                        number="02"
                        title="Strategic Roadmap"
                        description="Based on our findings, we co-create a tailored action plan with clear objectives, KPIs, and timelines."
                        delay="0.2s"
                    />
                    <ProcessStep 
                        number="03"
                        title="Hands-On Implementation"
                        description="Our team integrates with yours to execute the roadmap, implementing new systems, processes, and best practices."
                        delay="0.4s"
                    />
                    <ProcessStep 
                        number="04"
                        title="Continuous Optimization"
                        description="We provide ongoing monitoring, reporting, and advisory to ensure sustained performance and adapt to new challenges."
                        delay="0.6s"
                    />
                </div>
            </div>
        </section>
    );
};

export default Process;