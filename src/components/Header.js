'use client';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-black/80 backdrop-blur-md text-white font-body shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl select-none">🇮🇳</div>

        <h1
          className="text-2xl md:text-3xl font-heading font-bold tracking-wide cursor-pointer"
          onClick={() => router.push('/')}
        >
          Anita Enterprises
        </h1>

        <button
          onClick={() => router.push('/query')}
          className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Send Query
        </button>
      </div>

      <p className="text-center text-sm text-gray-300 mt-3">
        Welcome for a certificate service to make your lives simpler. It will be easy, quick, delivered to your home.
      </p>
    </header>
  );
}
