// components/MarriageCertificateServices.js
export default function MarriageCertificateServices() {
  return (
    <section className="bg-black bg-opacity-80 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="page-heading text-white mb-8">
          Marriage Certificate Services
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-4xl mb-4">💍</div>
            <h3 className="font-semibold text-lg mb-2 text-white">New Marriage Certificate</h3>
            <p className="subtext text-gray-200">
              Apply for fresh marriage certificate registration
            </p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="font-semibold text-lg mb-2 text-white">Certificate Reissue</h3>
            <p className="subtext text-gray-200">
              Get duplicate or reissue of lost marriage certificates
            </p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="font-semibold text-lg mb-2 text-white">Document Corrections</h3>
            <p className="subtext text-gray-200">
              Correct errors and update information in marriage certificates
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="subtext text-gray-200 text-lg">
            Professional marriage certificate services across Maharashtra. 
            Fast processing, home delivery, and expert guidance throughout the process.
          </p>
        </div>
      </div>
    </section>
  );
}