import React from 'react';
import { Check, X } from 'lucide-react';
import PricingCard from './PricingCard';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for personal projects and exploration",
      features: [
        "1 AI bot",
        "500 messages per month",
        "Basic templates",
        "Web embedding",
        "Community support"
      ],
      notIncluded: [
        "Custom training",
        "API access",
        "Collaboration tools",
        "Advanced analytics"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      description: "Ideal for professionals and small teams",
      features: [
        "5 AI bots",
        "10,000 messages per month",
        "Advanced templates",
        "All integrations",
        "Knowledge base upload",
        "API access",
        "Email support"
      ],
      notIncluded: [
        "Enterprise security",
        "Dedicated account manager"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations with advanced needs",
      features: [
        "Unlimited AI bots",
        "Unlimited messages",
        "Custom model training",
        "All features included",
        "SSO & SAML",
        "Enterprise security",
        "SLA guarantees",
        "Dedicated account manager"
      ],
      notIncluded: [],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="bg-gray-900 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the plan that works for your needs. All plans include core features with flexible scaling options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              notIncluded={plan.notIncluded}
              buttonText={plan.buttonText}
              popular={plan.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;