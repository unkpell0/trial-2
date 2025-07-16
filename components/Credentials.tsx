import React from 'react';

const CredentialItem: React.FC<{ title: string; subtitle: string; delay: string }> = ({ title, subtitle, delay }) => (
    <div className="text-center has-animation" style={{ animationDelay: delay }}>
        <h3 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h3>
        <p className="mt-2 text-lg text-neutral-600">{subtitle}</p>
    </div>
);

const Credentials: React.FC = () => {
    return (
        <section id="credentials" className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <CredentialItem title="10+" subtitle="Years of Experience" delay="0s" />
                    <CredentialItem title="CPA/CFA" subtitle="Certified Professionals" delay="0.2s" />
                    <CredentialItem title="Trusted" subtitle="By Industry Leaders" delay="0.4s" />
                </div>
            </div>
        </section>
    );
};

export default Credentials;