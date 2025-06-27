// components/BirthCertificateServices.js
export default function BirthCertificateServices() {
  return (
    <section className="bg-gray-100 bg-opacity-90 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="page-heading text-black mb-8">
          Birth Certificate Services
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="font-semibold text-lg mb-2 text-black">New Birth Certificate</h3>
            <p className="subtext text-gray-700">
              Get a fresh birth certificate issued quickly and efficiently
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="font-semibold text-lg mb-2 text-black">Foreign Country Reissue</h3>
            <p className="subtext text-gray-700">
              Reissue birth certificate for foreign countries for residency and PR
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">✏️</div>
            <h3 className="font-semibold text-lg mb-2 text-black">Corrections in Certificate</h3>
            <p className="subtext text-gray-700">
              Fix errors and make corrections in your existing birth certificate
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="font-semibold text-lg mb-2 text-black">NABC Certificate</h3>
            <p className="subtext text-gray-700">
              Non-availability of Birth Certificate when original records are unavailable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}