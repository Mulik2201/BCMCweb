// app/page.js
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />

import BirthCertificateServices from '../components/BirthCertificateServices';
import MarriageCertificateServices from '../components/MarriageCertificateServices';

export const metadata = {
  title: 'Anita Enterprises - Certificate Services in Maharashtra',
  description: 'Professional birth and marriage certificate services in Maharashtra. Fast, reliable, and delivered to your home.',
};

export default function Home() {
  return (
    <>
      <BirthCertificateServices />
      <MarriageCertificateServices />
    </>
  );
}