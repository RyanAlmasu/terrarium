import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 bg-beige relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ 
               backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
               backgroundSize: '60px 60px'
             }}>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block text-sage text-sm tracking-wider mb-2">
              ニュースレター
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-4">Join Our Community</h2>
            <p className="text-charcoal text-opacity-80 leading-relaxed">
              Subscribe to receive seasonal care tips, early access to limited collections, 
              and insights into the philosophy of bringing nature and tranquility into your home.
            </p>
          </div>
          
          {!isSubmitted ? (
            <div className="bg-white p-8 rounded-sm shadow-sm relative">
              {/* Seal-like background */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-sage bg-opacity-10 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
              
              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div className="flex items-start mb-4">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 h-4 w-4 text-sage focus:ring-sage rounded-sm"
                    required
                  />
                  <label htmlFor="consent" className="ml-2 text-sm text-charcoal text-opacity-80">
                    I consent to receive emails about products, care guides, and special offers.
                    You can unsubscribe at any time.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-sage text-beige py-3 px-4 rounded-sm hover:bg-sage-dark transition-colors duration-300 flex items-center justify-center"
                >
                  <span>Subscribe</span>
                  <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </form>
              
              {/* Japanese-inspired seal */}
              <div className="absolute bottom-4 right-4 w-16 h-16 flex items-center justify-center opacity-20">
                <div className="w-full h-full border-2 border-sage rounded-full flex items-center justify-center">
                  <span className="text-xs text-sage transform rotate-45">和</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-sm shadow-sm text-center">
              <div className="text-sage mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Thank You For Subscribing</h3>
              <p className="text-charcoal text-opacity-80">
                We've sent a confirmation email to <span className="font-medium">{email}</span>. 
                Please check your inbox to complete your subscription.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;