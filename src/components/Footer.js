// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-100 bg-opacity-90 text-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="page-heading text-black mb-6">Anita Enterprises</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Locations */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-black">Our Locations</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-2xl mr-3">📍</span>
                <div>
                  <p className="font-semibold text-black">Navi Mumbai</p>
                  <p className="subtext text-gray-700">Vashi</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-2xl mr-3">📍</span>
                <div>
                  <p className="font-semibold text-black">Mumbai</p>
                  <p className="subtext text-gray-700">Vikroli</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-black">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-2xl mr-3">📱</span>
                <div>
                  <p className="font-semibold text-black">Mobile</p>
                  <a href="tel:+919152558555" className="subtext text-blue-600 hover:text-blue-800">
                    +91 91525 58555
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-2xl mr-3">✉️</span>
                <div>
                  <p className="font-semibold text-black">Email</p>
                  <a href="mailto:anitaenterprises@gmail.com" className="subtext text-blue-600 hover:text-blue-800">
                    anitaenterprises@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-black">Our Services</h3>
            <div className="space-y-2">
              <p className="footer-text text-gray-600">Birth Certificate Services</p>
              <p className="footer-text text-gray-600">Marriage Certificate Services</p>
              <p className="footer-text text-gray-600">Document Corrections</p>
              <p className="footer-text text-gray-600">Home Delivery Available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6 text-center">
          <p className="footer-text text-gray-600">
            © 2024 Anita Enterprises. All rights reserved. | Professional Certificate Services in Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
}