import React from 'react';
import ZenLeaf from './ZenLeaf';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-beige py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <ZenLeaf />
              <span className="font-medium text-xl">
                ゼン<span className="font-light">テラリウム</span>
              </span>
            </div>
            <p className="text-beige text-opacity-70 mb-6 leading-relaxed">
              Bringing harmony and tranquility to your space through the art of Japanese-inspired terrariums.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-beige text-opacity-70 hover:text-beige transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-beige text-opacity-70 hover:text-beige transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-beige text-opacity-70 hover:text-beige transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-beige text-opacity-70 hover:text-beige transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-beige text-opacity-70 hover:text-beige transition-colors duration-300">All Terrariums</a></li>
              <li><a href="#" className="text-beige text-opacity-70 hover:text-beige transition-colors duration-300">New Arrivals</a></li>
              <li><a href="#" className="text-beige text-opacity-70 hover:text-beige transition-colors duration-300">Best Sellers</a></li>
              <li><a href="#" className="text-beige text-opacity-70 hover:text-beige transition-colors duration-300">Gift Cards</a></li>
              <li><a href="#" className="text-beige text-opacity-70 hover:text-beige transition-colors duration-300">Accessories</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-beige text-opacity-70 hover:text-beige transition-colors duration-300">Our Story</a></li>
              <li><a href="#" className="text-beige text-opacity-70 hover:text-beige transition-colors duration-300">Sustainability</a></li>
              <li><a href="#" className="text-beige text-opacity-70 hover:text-beige transition-colors duration-300">Artisans</a></li>
              <li><a href="#" className="text-beige text-opacity-70 hover:text-beige transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-beige text-opacity-70 hover:text-beige transition-colors duration-300">Press</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-beige text-opacity-70 hover:text-beige transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="text-beige text-opacity-70 hover:text-beige transition-colors duration-300">FAQs</a></li>
              <li><a href="#" className="text-beige text-opacity-70 hover:text-beige transition-colors duration-300">Shipping & Returns</a></li>
              <li><a href="#" className="text-beige text-opacity-70 hover:text-beige transition-colors duration-300">Care Guide</a></li>
              <li><a href="#" className="text-beige text-opacity-70 hover:text-beige transition-colors duration-300">Workshop Schedule</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-beige border-opacity-20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-beige text-opacity-60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Zen Terrarium. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-beige text-opacity-60 text-sm hover:text-beige transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-beige text-opacity-60 text-sm hover:text-beige transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-beige text-opacity-60 text-sm hover:text-beige transition-colors duration-300">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;