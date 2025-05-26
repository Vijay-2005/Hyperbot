import React from 'react';
import { Bot, Zap, Shield } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10%] opacity-30">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600 rounded-full filter blur-[128px] animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full filter blur-[128px] animate-pulse" style={{ animationDuration: '10s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-pink-600 rounded-full filter blur-[128px] animate-pulse" style={{ animationDuration: '7s' }}></div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <span className="text-indigo-400 text-sm font-medium">The Future of AI is Here</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Build Advanced AI Bots Without Code
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Create intelligent AI assistants and deploy them anywhere. No coding required.
            Hyperbots makes AI accessible to everyone.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-700/30">
              Get Started for Free
            </button>
            <button className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center">
              <Bot className="text-indigo-400 mr-3" />
              <span className="text-gray-300">Custom AI Assistants</span>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center">
              <Zap className="text-purple-400 mr-3" />
              <span className="text-gray-300">Powerful Integrations</span>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center">
              <Shield className="text-pink-400 mr-3" />
              <span className="text-gray-300">Enterprise Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;