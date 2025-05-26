import React from 'react';
import { Bot, Zap, Shield, Code, Database, Globe, Settings, Users } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Bot className="h-6 w-6 text-indigo-400" />,
      title: "Intuitive Bot Builder",
      description: "Create sophisticated AI assistants with our drag-and-drop interface. No coding required."
    },
    {
      icon: <Zap className="h-6 w-6 text-purple-400" />,
      title: "Powerful AI Models",
      description: "Access the latest large language models optimized for different use cases and industries."
    },
    {
      icon: <Code className="h-6 w-6 text-pink-400" />,
      title: "Extensive API Support",
      description: "Connect your bots to any API or service to extend functionality and integrate with your stack."
    },
    {
      icon: <Database className="h-6 w-6 text-indigo-400" />,
      title: "Knowledge Base Integration",
      description: "Train your bots with your company data, documents, and knowledge bases for customized responses."
    },
    {
      icon: <Globe className="h-6 w-6 text-purple-400" />,
      title: "Multi-Channel Deployment",
      description: "Deploy your bots on websites, mobile apps, messaging platforms, and voice assistants."
    },
    {
      icon: <Shield className="h-6 w-6 text-pink-400" />,
      title: "Enterprise-Grade Security",
      description: "SOC 2 compliance, encryption, and data privacy controls to meet enterprise requirements."
    },
    {
      icon: <Settings className="h-6 w-6 text-indigo-400" />,
      title: "Advanced Customization",
      description: "Fine-tune your bot's personality, knowledge, and behavior to match your brand voice."
    },
    {
      icon: <Users className="h-6 w-6 text-purple-400" />,
      title: "Collaboration Tools",
      description: "Team workspace for building, testing, and improving bots with version control."
    }
  ];

  return (
    <section id="features" className="bg-black py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Powerful Features for Every Need
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Build, train, and deploy AI assistants with all the tools you need to create exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;