'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function ChooseREIT() {
  const router = useRouter();
  const [selectedReit, setSelectedReit] = useState<string | null>(null);

  const handleCardClick = (reitType: string) => {
    setSelectedReit(reitType);
  };

  const buttonStyle: React.CSSProperties = {
    marginTop: '2rem',
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    backgroundColor: '#00c3ff',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    cursor: 'pointer',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#ffffff20',
    border: '2px solid #00c3ff',
    borderRadius: '12px',
    padding: '2rem',
    width: '250px',
    textAlign: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    position: 'relative',
  };

  const getFlowEmoji = (reit: string) => {
    if (reit === 'equity') return '👤 ➡️ 💵 ➡️ 🏢';
    if (reit === 'mortgage') return '👤 ➡️ 💵 ➡️ 🏦';
    if (reit === 'hybrid') return '👤 ➡️ 💵 ➡️ 🏢 & 🏦';
    return '';
  };

  const getFlowExplanation = (reit: string) => {
    if (reit === 'equity') return 'Owns real buildings Like being a landlord. You invest money to own properties and earn rent payments.';
    if (reit === 'mortgage') return 'Owns the loans Like being the bank. You invest money to fund loans and earn interest from borrowers.';
    if (reit === 'hybrid') return 'Balance of building + lending. You invest in both properties and loans, earning rent and interest.';
    return '';
  };

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
        padding: '2rem',
        gap: '2rem',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>
        Choose Your REIT Type
      </h1>

      <p style={{ fontSize: '1.2rem', marginBottom: '1rem', opacity: 0.8 }}>
        ✨ Try clicking on a REIT card to see how your money flows as an investor!
      </p>

      <div
        style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {/* Equity Card */}
        <motion.div
          style={cardStyle}
          whileHover={{ scale: 1.05 }}
          onClick={() => handleCardClick('equity')}
        >
          <h2>🏢 Equity REIT</h2>
          <p>Owns properties, earns rent.</p>
          {selectedReit === 'equity' && (
            <>
              {/* New heading */}
              <p style={{ marginTop: '1rem', fontSize: '1rem', fontWeight: 'bold' }}>
                This is your money flow as an investor:
              </p>

              {/* Flow Emoji */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ marginTop: '0.5rem', fontSize: '1.8rem' }}
              >
                {getFlowEmoji('equity')}
              </motion.div>

              {/* Flow Explanation */}
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.9 }}>
                {getFlowExplanation('equity')}
              </p>
            </>
          )}
        </motion.div>

        {/* Mortgage Card */}
        <motion.div
          style={cardStyle}
          whileHover={{ scale: 1.05 }}
          onClick={() => handleCardClick('mortgage')}
        >
          <h2>🏦 Mortgage REIT</h2>
          <p>Lends money, earns interest.</p>
          {selectedReit === 'mortgage' && (
            <>
              <p style={{ marginTop: '1rem', fontSize: '1rem', fontWeight: 'bold' }}>
                This is your money flow as an investor:
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ marginTop: '0.5rem', fontSize: '1.8rem' }}
              >
                {getFlowEmoji('mortgage')}
              </motion.div>

              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.9 }}>
                {getFlowExplanation('mortgage')}
              </p>
            </>
          )}
        </motion.div>

        {/* Hybrid Card */}
        <motion.div
          style={cardStyle}
          whileHover={{ scale: 1.05 }}
          onClick={() => handleCardClick('hybrid')}
        >
          <h2>🔄 Hybrid REIT</h2>
          <p>Owns properties + lends money.</p>
          {selectedReit === 'hybrid' && (
            <>
              <p style={{ marginTop: '1rem', fontSize: '1rem', fontWeight: 'bold' }}>
                This is your money flow as an investor:
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ marginTop: '0.5rem', fontSize: '1.8rem' }}
              >
                {getFlowEmoji('hybrid')}
              </motion.div>

              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.9 }}>
                {getFlowExplanation('hybrid')}
              </p>
            </>
          )}
        </motion.div>
      </div>

      {/* Skip Button */}
      <button
  style={buttonStyle}
  onClick={() => router.push('/play?reit=equity')} // default reit type (optional)
>
  Skip and Start Simulation
</button>

    </div>
  );
}
