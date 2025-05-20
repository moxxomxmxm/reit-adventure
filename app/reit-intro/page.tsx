'use client';

import { useRouter } from 'next/navigation';

export default function REITIntroPage() {
  const router = useRouter();

  return (
    <div
      style={{
        backgroundColor: '#ffeaf4',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          maxWidth: '700px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          📘 Introduction to Real Estate & REITs
        </h1>

        <p style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#333' }}>
          Real Estate Investment Trusts (REITs) let you invest in real estate — without owning buildings!
        </p>

        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#555' }}>
          They're income-generating tools that offer access to powerful long-term growth. 🏢💸
        </p>

        <p style={{ fontSize: '1rem', marginBottom: '2rem', color: '#666' }}>
          Next, you’ll learn about the 3 main types of REITs. 🎯
        </p>

        <button
          onClick={() => router.push('/choose-reit')}
          style={{
            backgroundColor: '#00c3ff',
            color: 'white',
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          🚀 Continue to REIT Types
        </button>
      </div>
    </div>
  );
}
