import React from 'react';

const Story = () => {
  return (
    <section id="story" className="py-20 bg-sage bg-opacity-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-sage text-sm tracking-wider mb-2">
              私たちのストーリー
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6">The Art of Terrarium</h2>
            
            <div className="space-y-6 text-charcoal">
              <p className="leading-relaxed">
                Our journey began fifteen years ago in a small Kyoto garden, where our founder 
                Akira Tanaka studied the traditional art of Japanese gardening. Inspired by the 
                principles of harmony, respect, purity, and tranquility, he sought to bring these 
                elements into urban spaces.
              </p>
              
              <blockquote className="border-l-2 border-sage pl-4 py-2 italic text-charcoal text-opacity-80">
                "A terrarium is more than plants in glass — it's a philosophy of seeing the 
                universe in miniature form, finding beauty in imperfection, and creating moments 
                of contemplation."
              </blockquote>
              
              <p className="leading-relaxed">
                Each Zen Terrarium is handcrafted using traditional Japanese techniques, 
                sustainable materials, and carefully selected plants. We embrace the wabi-sabi 
                aesthetic, celebrating the beauty of impermanence and imperfection in every piece.
              </p>
            </div>
            
            <div className="mt-8 inline-flex items-center text-sage group cursor-pointer">
              <span className="mr-2 group-hover:mr-3 transition-all duration-300">Read our complete philosophy</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-sm">
                <img 
                  src="https://images.pexels.com/photos/1108341/pexels-photo-1108341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Japanese garden" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-sm">
                <img 
                  src="https://images.pexels.com/photos/5699665/pexels-photo-5699665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Crafting process" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="overflow-hidden rounded-sm">
                <img 
                  src="https://images.pexels.com/photos/4505147/pexels-photo-4505147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Plant selection" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-sm">
                <img 
                  src="https://images.pexels.com/photos/4505178/pexels-photo-4505178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Finished terrarium" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;