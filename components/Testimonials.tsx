import React from 'react';

interface TestimonialCardProps {
    quote: string;
    author: string;
    title: string;
    delay: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, title, delay }) => (
    <div className="bg-white border border-neutral-700/50 rounded-2xl shadow-2xl shadow-black/20 p-8 flex flex-col has-animation" style={{animationDelay: delay}}>
        <p className="text-gray-700 text-lg mb-6 flex-grow">"{quote}"</p>
        <div>
            <p className="font-bold text-gray-900">{author}</p>
            <p className="text-gray-500">{title}</p>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 sm:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 has-animation gradient-text">Trusted by Innovators</h2>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto has-animation" style={{ animationDelay: '0.2s' }}>
                        See how we've helped businesses like yours achieve financial clarity and strategic growth.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <TestimonialCard 
                        quote="Bird Financial transformed our financial chaos into clarity. Their fractional CFO service was a game-changer for our fundraising round."
                        author="Sarah L."
                        title="CEO @ Innovatech"
                        delay="0s"
                    />
                    <TestimonialCard 
                        quote="The treasury management expertise is unparalleled. We now have a clear, predictable cash flow forecast that we can trust."
                        author="Michael B."
                        title="COO @ Quantum Dynamics"
                        delay="0.2s"
                    />
                    <TestimonialCard 
                        quote="A true strategic partner. They didn't just manage the numbers; they helped us shape the future of our business."
                        author="Emily R."
                        title="Founder @ NextGen Solutions"
                        delay="0.4s"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;