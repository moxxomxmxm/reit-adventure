'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function PlayPage() {
  const searchParams = useSearchParams();
  const initialReit = searchParams.get('reit') || 'equity';
  const router = useRouter();

  const [balance, setBalance] = useState(100);
  const [month, setMonth] = useState(1);
  const [reitType, setReitType] = useState(initialReit);
  const [lastEvent, setLastEvent] = useState<string | null>(null);
  const [lastEarnings, setLastEarnings] = useState<number>(0);
  const [gameOver, setGameOver] = useState(false);

  const monthlyReturns = {
    equity: 0.02,
    mortgage: 0.025,
    hybrid: 0.022,
  };

  const handleNextMonth = () => {
    if (month >= 12) {
      setGameOver(true);
      return;
    }

    const monthlyReturn = monthlyReturns[reitType as keyof typeof monthlyReturns];
    const baseEarnings = balance * monthlyReturn;
    let eventMessage = '';
    let eventImpact = 0;

    const random = Math.random();

    if (random < 0.15) {
      if (reitType === 'equity') {
        eventImpact = 2;
        eventMessage = '🏢 Extra Rent Collected: +$2!';
      } else if (reitType === 'mortgage') {
        eventImpact = 2;
        eventMessage = '🏦 Bonus Interest Payment: +$2!';
      } else if (reitType === 'hybrid') {
        eventImpact = 1.5;
        eventMessage = '🔄 Mixed Bonus Month: +$1.5!';
      }
    } else if (random < 0.30) {
      if (reitType === 'equity') {
        eventImpact = -2;
        eventMessage = '🏚️ Roof Repair Needed: -$2!';
      } else if (reitType === 'mortgage') {
        eventImpact = -2;
        eventMessage = '💸 Borrower Defaulted: -$2!';
      } else if (reitType === 'hybrid') {
        eventImpact = -1.5;
        eventMessage = '🔄 Mixed Loss: -$1.5!';
      }
    } else {
      eventMessage = '✅ Normal Month (No Special Events)';
    }

    const newBalance = balance + baseEarnings + eventImpact;
    setBalance(newBalance);
    setMonth(month + 1);
    setLastEvent(eventMessage);
    setLastEarnings(baseEarnings);

    if (month + 1 > 12) {
      setGameOver(true);
    }
  };

  const formatMoney = (num: number) => {
    return `$${num.toFixed(2)}`;
  };

  const handleFinishKnowledge = () => {
    router.push('/nextlevel');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Simulation Starts Here! 🚀
      </h1>

      <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
        🎯 Your Goal: Grow $100 ➔ $105!
      </h2>

      {gameOver ? (
        <>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#00e676' }}>
            🎉 Simulation Complete!
          </h2>
          <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Final Balance: {formatMoney(balance)}
          </p>
          <p style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>
            📚 Great work! You learned that investing takes time, patience, and risk!
          </p>
          <button
            style={{
              marginTop: '2rem',
              padding: '1rem 2.5rem',
              fontSize: '1.5rem',
              backgroundColor: '#00c3ff',
              border: 'none',
              borderRadius: '12px',
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={handleFinishKnowledge}
          >
            📖 Learn More ➔
          </button>
        </>
      ) : (
        <>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
            📅 Month {month}
          </h2>

          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            💵 Balance: {formatMoney(balance)}
          </h2>

          {/* REIT Choice */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}>Choose REIT Type:</label>
            <select
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontSize: '1rem',
                backgroundColor: '#00c3ff',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
              }}
              value={reitType}
              onChange={(e) => setReitType(e.target.value)}
            >
              <option value="equity">🏢 Equity REIT (2%)</option>
              <option value="mortgage">🏦 Mortgage REIT (2.5%)</option>
              <option value="hybrid">🔄 Hybrid REIT (2.2%)</option>
            </select>
          </div>

          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            📈 Return Rate: {(monthlyReturns[reitType as keyof typeof monthlyReturns] * 100).toFixed(1)}%
          </p>

          {lastEarnings > 0 && (
            <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              📥 Earned {formatMoney(lastEarnings)} this month
            </p>
          )}

          {lastEvent && (
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
              {lastEvent}
            </p>
          )}

          <button
            style={{
              marginTop: '1rem',
              padding: '1rem 2.5rem',
              fontSize: '1.5rem',
              backgroundColor: '#00c3ff',
              border: 'none',
              borderRadius: '12px',
              color: 'white',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onClick={handleNextMonth}
          >
            ➡️ Next Month
          </button>
        </>
      )}
    </div>
  );
}
