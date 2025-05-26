import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 to-purple-900 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10%] opacity-30">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600 rounded-full filter blur-[80px] animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-purple-600 rounded-full filter blur-[80px] animate-pulse" style={{ animationDuration: '10s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-indigo-200 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of companies already using Hyperbots to build intelligent AI assistants. 
            Get started for free today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 rounded-lg bg-white text-indigo-900 font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Building for Free
            </button>
            <button className="px-8 py-3 rounded-lg bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group">
              Schedule a Demo
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;