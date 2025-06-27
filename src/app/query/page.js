// app/query/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Query() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '+91 ',
    services: '',
    contactMethod: 'whatsapp'
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.mobile || formData.mobile === '+91 ' || !formData.services) {
      alert('Please fill all required fields');
      return;
    }

    // Here you would typically send data to Firestore
    // For now, we'll just show the popup
    console.log('Form Data:', formData);
    
    setShowPopup(true);
    
    // Redirect to home page after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
      router.push('/');
    }, 2000);
  };

  return (
    <div className="bg-white bg-opacity-90 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-black p-8 rounded-lg shadow-lg">
          <h1 className="page-heading text-white text-center mb-8">
            Send Your Query
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 rounded border bg-white text-black"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Mobile Number Field */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Mobile Number *
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full p-3 rounded border bg-white text-black"
                placeholder="+91 "
                required
              />
            </div>

            {/* Services Field */}
            <div>
              <label className="block text-white font-semibold mb-2">
                What services do you need? Explain in short *
              </label>
              <textarea
                name="services"
                value={formData.services}
                onChange={handleInputChange}
                className="w-full p-3 rounded border bg-white text-black h-24 resize-none"
                placeholder="Describe the certificate services you need..."
                required
              />
            </div>

            {/* Contact Method */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Want us to WhatsApp you or call you?
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center text-white">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="whatsapp"
                    checked={formData.contactMethod === 'whatsapp'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  WhatsApp
                </label>
                <label className="flex items-center text-white">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="call"
                    checked={formData.contactMethod === 'call'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Call
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-white text-black py-3 px-6 rounded font-semibold hover:bg-gray-200 transition-colors"
            >
              Submit Query
            </button>
          </form>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-4">
            <div className="text-4xl mb-4">✅</div>
            <h2 className="text-xl font-semibold mb-2 text-black">Query Submitted!</h2>
            <p className="text-gray-600">We will reach out to you soon</p>
          </div>
        </div>
      )}
    </div>
  );
}