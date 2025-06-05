import React, { useRef, useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  
  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.offsetWidth);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  
  const handlePrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-sage bg-opacity-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-sage text-sm tracking-wider mb-2">
            お客様の声
          </span>
          <h2 className="text-3xl md:text-4xl font-light mb-4">Customer Reflections</h2>
          <p className="max-w-2xl mx-auto text-charcoal text-opacity-80 leading-relaxed">
            Discover how our terrariums have brought harmony and tranquility to homes around the world.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Scroll-like background */}
          <div className="absolute inset-0 bg-beige rounded-sm transform rotate-1 -z-10"></div>
          
          {/* Testimonial slider */}
          <div 
            ref={sliderRef}
            className="relative overflow-hidden rounded-sm bg-white p-8 md:p-12 shadow-sm"
          >
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map(testimonial => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 flex flex-col"
                  style={{ width: sliderWidth ? sliderWidth : '100%' }}
                >
                  <div className="flex-1">
                    <div className="mb-6 text-sage">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="mr-1 text-lg">★</span>
                      ))}
                    </div>
                    
                    <blockquote className="italic text-lg mb-8 leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-charcoal text-opacity-60">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex space-x-2">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-beige hover:bg-sage hover:text-white transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-beige hover:bg-sage hover:text-white transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-sage w-4' 
                    : 'bg-sage bg-opacity-30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;