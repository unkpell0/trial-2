import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/20 border-t border-neutral-700/50 py-8">
      <div className="container mx-auto px-6 text-center text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Bird Financial. All rights reserved.</p>
        <p className="text-sm mt-2">Engineered for Financial Excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;