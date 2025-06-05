import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    product: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      product: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-sage bg-opacity-5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Get in Touch</h2>
            <p className="text-charcoal text-opacity-80 leading-relaxed">
              Have questions about our terrariums? We're here to help you find the perfect piece for your space.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-charcoal mb-2">
                    Interested In
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a product</option>
                    <option value="moss-garden">Moss Garden Terrarium</option>
                    <option value="mountain-path">Mountain Path Terrarium</option>
                    <option value="desert-gem">Desert Gem House</option>
                    <option value="forest-floor">Forest Floor Terrarium</option>
                    <option value="custom">Custom Design</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your space and what you're looking for..."
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-sage text-beige py-3 px-8 rounded-sm hover:bg-sage-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-sm shadow-sm">
              <div className="text-sage mb-4">📞</div>
              <h3 className="text-lg font-medium mb-2">Phone</h3>
              <p className="text-charcoal text-opacity-80">+1 (555) 123-4567</p>
            </div>
            <div className="p-6 bg-white rounded-sm shadow-sm">
              <div className="text-sage mb-4">✉️</div>
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <p className="text-charcoal text-opacity-80">hello@zenterrarium.com</p>
            </div>
            <div className="p-6 bg-white rounded-sm shadow-sm">
              <div className="text-sage mb-4">🕒</div>
              <h3 className="text-lg font-medium mb-2">Hours</h3>
              <p className="text-charcoal text-opacity-80">Mon-Fri: 9am - 6pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;