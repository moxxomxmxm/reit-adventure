'use client';

import { useRouter } from 'next/navigation';

export default function KnowledgePage() {
  const router = useRouter();

  const startNextSimulation = () => {
    router.push('/harderplay'); // we'll create this later
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #ffe6f0, #ffb3d1)',
        color: '#333',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>📚 Congratulations!</h1>

      <p style={{ fontSize: '1.5rem', marginBottom: '1.5rem', maxWidth: '600px' }}>
        You completed your first investing simulation! 🎉
      </p>

      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
          maxWidth: '600px',
          marginBottom: '2rem',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>💡 Key Investing Lessons:</h2>
        <ul style={{ textAlign: 'left', fontSize: '1.2rem', lineHeight: '2rem' }}>
          <li>📈 <strong>Compounding:</strong> Small gains grow BIG over time.</li>
          <li>⏳ <strong>Patience:</strong> Real investing takes months and years, not days.</li>
          <li>🏢 <strong>REITs:</strong> A way to invest in real estate without buying buildings yourself.</li>
        </ul>
      </div>

      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Ready to take on a bigger investing challenge? 🚀
      </p>

      <button
        style={{
          padding: '1rem 2.5rem',
          fontSize: '1.5rem',
          backgroundColor: '#ff4da6',
          border: 'none',
          borderRadius: '12px',
          color: 'white',
          cursor: 'pointer',
        }}
        onClick={startNextSimulation}
      >
        ➡️ Play Next Level Simulation
      </button>
    </div>
  );
}
