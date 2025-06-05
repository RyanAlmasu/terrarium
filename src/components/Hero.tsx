import React, { useContext } from 'react';
import { AnimationContext } from '../context/AnimationContext';
import FallingLeaf from './animations/FallingLeaf';
import { Link } from 'react-scroll';

const Hero = () => {
  const { isAnimating } = useContext(AnimationContext);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-90"
        style={{ 
          backgroundImage: "url('/71HmGbo2AhL.jpg')" 
        }}
      ></div>
      
      <div className="absolute inset-0 bg-charcoal bg-opacity-30"></div>
      
      {isAnimating && (
        <>
          <FallingLeaf delay={1} left="10%" size="sm" />
          <FallingLeaf delay={3} left="25%" size="md" />
          <FallingLeaf delay={5} left="40%" size="lg" />
          <FallingLeaf delay={2} left="60%" size="sm" />
          <FallingLeaf delay={4} left="75%" size="md" />
          <FallingLeaf delay={0} left="90%" size="lg" />
        </>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 border border-beige text-beige text-sm mb-6 opacity-90 transform -rotate-1">
            Handcrafted with Care
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-beige mb-6 leading-tight">
            Find balance in<br />
            <span className="font-normal">miniature worlds</span>
          </h1>
          <p className="text-beige text-lg md:text-xl mb-8 max-w-md leading-relaxed">
            Artfully crafted terrariums that bring the tranquility of nature into your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="products"
              smooth={true}
              duration={800}
              offset={-80}
              className="bg-sage text-beige py-3 px-8 rounded-sm hover:bg-sage-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sage-dark focus:ring-opacity-50 cursor-pointer text-center"
              role="button"
              aria-label="View our collection"
            >
              Explore Collection
            </Link>
            <Link
              to="story"
              smooth={true}
              duration={800}
              offset={-80}
              className="border border-beige text-beige py-3 px-8 rounded-sm hover:bg-beige hover:bg-opacity-10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-beige focus:ring-opacity-50 cursor-pointer text-center"
              role="button"
              aria-label="Learn about our philosophy"
            >
              Our Philosophy
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-beige">
        <span className="text-sm opacity-80 mb-2">Scroll to explore</span>
        <div className="w-px h-10 bg-beige opacity-60 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;