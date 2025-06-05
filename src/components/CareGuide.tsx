import React, { useState } from 'react';
import { careGuides } from '../data/careGuides';

const CareGuide = () => {
  const [activeGuide, setActiveGuide] = useState(0);

  return (
    <section id="care" className="py-20 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-sage text-sm tracking-wider mb-2">
            お手入れガイド
          </span>
          <h2 className="text-3xl md:text-4xl font-light mb-4">Care Guide</h2>
          <p className="max-w-2xl mx-auto text-charcoal text-opacity-80 leading-relaxed">
            Caring for your terrarium is simple and meditative. Follow these 
            principles to ensure your miniature landscape thrives.
          </p>
        </div>
        
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="sticky top-24">
              <ul className="space-y-1">
                {careGuides.map((guide, index) => (
                  <li key={guide.id}>
                    <button
                      className={`w-full text-left py-4 px-4 rounded-sm transition-all duration-300 flex items-center ${
                        activeGuide === index 
                          ? 'bg-sage bg-opacity-20 text-sage' 
                          : 'hover:bg-sage hover:bg-opacity-10'
                      }`}
                      onClick={() => setActiveGuide(index)}
                    >
                      <span className="mr-3 text-xl">{guide.icon}</span>
                      {guide.title}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 p-6 border border-sage border-opacity-20 rounded-sm bg-sage bg-opacity-5">
                <h4 className="text-lg font-medium mb-4">Need more help?</h4>
                <p className="text-charcoal text-opacity-80 mb-4">
                  Download our complete care guide or contact our plant specialists for personalized advice.
                </p>
                <button className="w-full bg-sage text-beige py-2 px-4 rounded-sm hover:bg-sage-dark transition-colors duration-300">
                  Download Full Guide
                </button>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 px-4">
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{careGuides[activeGuide].icon}</span>
                <h3 className="text-2xl font-light">{careGuides[activeGuide].title}</h3>
              </div>
              
              <p className="text-charcoal text-opacity-80 mb-8 leading-relaxed">
                {careGuides[activeGuide].description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4 flex items-center">
                  <span className="w-6 h-px bg-sage mr-3"></span>
                  Key Points
                </h4>
                <ul className="space-y-3">
                  {careGuides[activeGuide].keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <div className="text-sage mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-charcoal text-opacity-80">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="rounded-sm overflow-hidden">
                <img 
                  src={careGuides[activeGuide].image} 
                  alt={careGuides[activeGuide].title} 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareGuide;