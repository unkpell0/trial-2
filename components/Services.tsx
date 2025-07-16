import React from 'react';
import { UsersIcon } from './icons/UsersIcon';
import { BriefcaseIcon } from './icons/BriefcaseIcon';
import { ChartBarIcon } from './icons/ChartBarIcon';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => (
    <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl shadow-black/20 border border-neutral-700/50 hover:-translate-y-2 transition-all duration-300 flex flex-col items-start has-animation" style={{ animationDelay: delay }}>
        <div className="mb-4 text-[#0f3460]">
            {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-[#0f3460]">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);


const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 has-animation gradient-text">Who We Serve</h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto has-animation" style={{ animationDelay: '0.2s' }}>
            We tailor our engagements to the unique needs of every player in the entrepreneurial ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
                icon={<UsersIcon className="w-12 h-12" />}
                title="Founders & CEOs"
                description="We help you gain altitude and focus on your core business by providing strategic vision and a solid financial framework."
                delay="0s"
            />
            <ServiceCard 
                icon={<BriefcaseIcon className="w-12 h-12" />}
                title="Finance Leaders (CFOs)"
                description="We augment your existing teams for specific projects, transformation initiatives, or temporary leadership gaps."
                delay="0.2s"
            />
            <ServiceCard 
                icon={<ChartBarIcon className="w-12 h-12" />}
                title="Private Equity & VC Funds"
                description="We deploy our operational expertise within your portfolio companies to secure and accelerate value creation."
                delay="0.4s"
            />
        </div>
      </div>
    </section>
  );
};

export default Services;