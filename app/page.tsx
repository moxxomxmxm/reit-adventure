'use client';

import { useRouter } from 'next/navigation';

export default function REITIntroPage() {
  const router = useRouter();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #e0f7ff, #cceeff)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        padding: '2rem',
        color: '#00334e',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>
        📘 The REIT Secrets School Never Taught You.
      </h1>

      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '2rem',
          maxWidth: '750px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
          Build wealth through real estate — <strong>with or without owning buildings</strong>.
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          Learn the secrets. Play the games. It’s <strong>free, fun, and real</strong>.
        </p>
        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '2rem' }}>
          The world’s first gamified platform to explore and understand REIT investing — made for curious minds like yours.
        </p>

        <button
          onClick={() => router.push('/chapter')} // 🔁 CHANGED: now links to chapter map
          style={{
            padding: '1rem 2.5rem',
            fontSize: '1.2rem',
            backgroundColor: '#00b4d8',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#009fc2')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#00b4d8')}
        >
          🗺️ View Journey Map
        </button>
      </div>
    </div>
  );
}
