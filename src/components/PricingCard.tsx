import React from 'react';
import { Check, X } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  notIncluded: string[];
  buttonText: string;
  popular: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  period = "",
  description,
  features,
  notIncluded,
  buttonText,
  popular
}) => {
  return (
    <div className={`bg-gray-800 border ${popular ? 'border-indigo-500' : 'border-gray-700'} rounded-xl p-8 flex flex-col h-full relative ${popular ? 'transform md:-translate-y-4 shadow-xl shadow-indigo-500/20' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium px-4 py-1 rounded-full">
          Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <div className="flex items-end mb-2">
          <span className="text-4xl font-bold text-white">{price}</span>
          {period && <span className="text-gray-400 ml-1">{period}</span>}
        </div>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>

      <div className="mb-8 flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={`feature-${index}`} className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 mr-2 text-indigo-400">
                <Check size={20} />
              </span>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
          
          {notIncluded.length > 0 && notIncluded.map((feature, index) => (
            <li key={`not-included-${index}`} className="flex items-start text-gray-500">
              <span className="flex-shrink-0 h-5 w-5 mr-2 text-gray-600">
                <X size={20} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button 
        className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
          popular 
            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
            : 'bg-gray-700 text-white hover:bg-gray-600'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;