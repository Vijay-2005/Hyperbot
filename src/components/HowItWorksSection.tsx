import React from 'react';
import { Bot, PenTool as Tool, Settings, Zap } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Bot className="h-8 w-8 text-indigo-400" />,
      number: "01",
      title: "Create Your Bot",
      description: "Start with a template or build from scratch. Define your bot's purpose and personality."
    },
    {
      icon: <Tool className="h-8 w-8 text-purple-400" />,
      number: "02",
      title: "Train & Customize",
      description: "Upload your documents and train your bot with your company's knowledge base."
    },
    {
      icon: <Settings className="h-8 w-8 text-pink-400" />,
      number: "03",
      title: "Test & Refine",
      description: "Preview your bot in real-time and make adjustments until it's perfect."
    },
    {
      icon: <Zap className="h-8 w-8 text-indigo-400" />,
      number: "04",
      title: "Deploy & Scale",
      description: "Deploy your bot to your website, app, or messaging channels and scale as needed."
    }
  ];

  return (
    <section id="how-it-works" className="bg-gradient-to-b from-black to-gray-900 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            How It Works
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Building powerful AI assistants has never been easier. Follow these simple steps to create your custom bot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform -translate-y-1/2 z-0"></div>
              )}
              
              <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-black/50">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-bold text-gray-700">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;