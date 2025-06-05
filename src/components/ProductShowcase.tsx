import React, { useState } from 'react';
import { products } from '../data/products';
import { Link } from 'react-scroll';

const ProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <section id="products" className="py-20 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Signature Collection</h2>
          <p className="max-w-2xl mx-auto text-charcoal text-opacity-80 leading-relaxed">
            Each terrarium is thoughtfully designed to create harmony between nature and space.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-sage bg-opacity-20 rounded-sm transform rotate-1 transition-transform group-hover:rotate-2"></div>
            <div className="relative overflow-hidden">
              <img 
                src={products[activeProduct].image} 
                alt={products[activeProduct].name} 
                className="w-full h-[600px] object-cover rounded-sm shadow-md transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="flex flex-col space-y-8">
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeProduct === index 
                      ? 'pl-4 border-l-2 border-sage' 
                      : 'pl-4 border-l-2 border-transparent opacity-60 hover:opacity-80'
                  }`}
                  onClick={() => setActiveProduct(index)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveProduct(index);
                    }
                  }}
                  aria-label={`View ${product.name}`}
                  aria-selected={activeProduct === index}
                >
                  <h3 className="text-xl md:text-2xl font-medium mb-2">{product.name}</h3>
                  {activeProduct === index && (
                    <div className="transition-all duration-500 ease-in-out">
                      <p className="text-charcoal text-opacity-80 mb-4">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl text-sage">${product.price}</span>
                        <Link
                          to="contact"
                          smooth={true}
                          duration={800}
                          offset={-80}
                          className="bg-sage text-beige py-2 px-4 rounded-sm hover:bg-sage-dark transition-colors duration-300 cursor-pointer"
                          role="button"
                          aria-label={`Purchase ${product.name}`}
                        >
                          Purchase Now
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;