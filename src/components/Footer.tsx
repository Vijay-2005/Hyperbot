import React from 'react';
import { Bot, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { text: "Features", href: "#features" },
        { text: "Pricing", href: "#pricing" },
        { text: "Integrations", href: "#" },
        { text: "Changelog", href: "#" },
        { text: "Roadmap", href: "#" },
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Documentation", href: "#" },
        { text: "Tutorials", href: "#" },
        { text: "Blog", href: "#" },
        { text: "Community", href: "#" },
        { text: "API Reference", href: "#" },
      ]
    },
    {
      title: "Company",
      links: [
        { text: "About Us", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Contact", href: "#" },
        { text: "Press", href: "#" },
        { text: "Partners", href: "#" },
      ]
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", href: "#" },
        { text: "Terms of Service", href: "#" },
        { text: "Security", href: "#" },
        { text: "Compliance", href: "#" },
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Bot className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Hyperbots
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Building the future of AI assistants. Create, train, and deploy custom AI bots without code.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h3 className="text-white font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Hyperbots. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;