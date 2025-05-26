import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-xl p-6 hover:translate-y-[-4px] transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group">
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-black/50 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;