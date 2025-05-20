'use client';

import { useRouter } from 'next/navigation';

export default function SimulationPage() {
  const router = useRouter();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
        Welcome to the Simulation!
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>
        Ready to Transform Real Estate Investment?
      </p>

      {/* Button navigates to Choose REIT */}
      <button
        style={{
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          backgroundColor: '#00c3ff',
          border: 'none',
          borderRadius: '8px',
          color: 'white',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onClick={() => router.push('/choose-reit')}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0099cc')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#00c3ff')}
      >
        Start Investment Simulation
      </button>
    </div>
  );
}
