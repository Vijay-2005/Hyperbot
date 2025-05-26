import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Hyperbots has completely transformed how we handle customer support. Our AI assistant handles 78% of inquiries without human intervention.",
      author: "Sarah Johnson",
      role: "Director of Customer Success",
      company: "TechGrowth Inc",
      avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "We deployed our first AI assistant in less than a day. The no-code interface is intuitive, and the results have exceeded our expectations.",
      author: "Michael Chen",
      role: "Chief Innovation Officer",
      company: "Nexus Solutions",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "The ability to train our bot with our knowledge base has made it an invaluable asset for our sales team. It's like having an expert available 24/7.",
      author: "Jessica Martinez",
      role: "VP of Sales",
      company: "Global Enterprises",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  return (
    <section id="testimonials" className="bg-black py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            What Our Customers Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join thousands of companies using Hyperbots to build intelligent AI assistants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-white font-medium">{testimonial.author}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto opacity-60">
            {/* Company logos would go here - using placeholder text for the example */}
            {['Microsoft', 'Adobe', 'Shopify', 'Airbnb', 'Spotify'].map((company, index) => (
              <div key={index} className="text-gray-500 font-semibold text-xl">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;