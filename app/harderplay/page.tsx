'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function HarderPlayPage() {
  const [growthType, setGrowthType] = useState('high');
  const [reitType, setReitType] = useState('equity');
  const [simulated, setSimulated] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [data, setData] = useState<{ year: number, value: number }[]>([]);
  const [reason, setReason] = useState('');

  const returnRates: Record<string, { rates: Record<string, number>, reason: string }> = {
    high: { rates: { equity: 0.87, mortgage: 0.65, hybrid: 0.72 }, reason: 'Recovery after 2008 financial crisis 📈' },
    medium: { rates: { equity: 0.64, mortgage: 0.53, hybrid: 0.59 }, reason: 'Stable economy growth ⚖️' },
    low: { rates: { equity: 0.3, mortgage: 0.2, hybrid: 0.25 }, reason: 'Economic slowdown 📉' },
  };

  const handleSimulate = () => {
    if (!returnRates[growthType] || !returnRates[growthType].rates[reitType]) {
      alert('Invalid selection. Please choose a valid growth type and REIT type.');
      return;
    }

    const start = 2010;
    const end = 2020;
    const years = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    const growth = returnRates[growthType].rates[reitType];
    const step = growth / (years.length - 1);

    const balance = 100;
    const chartData = years.map((year, index) => {
      const value = balance * (1 + step * index);
      return { year, value: parseFloat(value.toFixed(2)) };
    });

    const final = chartData[chartData.length - 1].value;
    setData(chartData);
    setResult(final);
    setReason(returnRates[growthType].reason);
    setSimulated(true);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', background: '#0f2027', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>📈 Historical REIT Simulation</h1>

      <div style={{ marginBottom: '1rem' }}>
        <label>Choose Growth Type: </label>
        <select value={growthType} onChange={(e) => setGrowthType(e.target.value)} style={{ marginLeft: '1rem', padding: '0.5rem', color: 'black' }}>
          <option value="high">📈 High Growth</option>
          <option value="medium">⚖️ Medium Growth</option>
          <option value="low">📉 Low Growth</option>
        </select>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Choose REIT Type: </label>
        <select value={reitType} onChange={(e) => setReitType(e.target.value)} style={{ marginLeft: '1rem', padding: '0.5rem', color: 'black' }}>
          <option value="equity">🏢 Equity REIT</option>
          <option value="mortgage">🏦 Mortgage REIT</option>
          <option value="hybrid">🔄 Hybrid REIT</option>
        </select>
      </div>

      <button
        onClick={handleSimulate}
        style={{ padding: '1rem 2rem', fontSize: '1rem', backgroundColor: '#00c3ff', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer' }}
      >
        ▶️ Simulate Investment
      </button>

      {simulated && result !== null && (
        <div style={{ marginTop: '2rem' }}>
          <h2>📊 Your $100 grew to: ${result} ({((result - 100) / 100 * 100).toFixed(1)}%)</h2>
          <p style={{ marginTop: '0.5rem', fontSize: '1.2rem' }}>{reason}</p>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip formatter={(value) => `$${value}`} />
              <Line type="monotone" dataKey="value" stroke="#00c3ff" strokeWidth={3} dot={true} />
            </LineChart>
          </ResponsiveContainer>

          <p style={{ marginTop: '2rem', fontSize: '1.1rem', color: '#ddd' }}>🎉 Great job completing this simulation! More levels coming soon.</p>
        </div>
      )}
    </div>
  );
}
