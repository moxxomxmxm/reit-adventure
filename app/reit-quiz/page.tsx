'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const questions = [
  {
    question: 'If you could invest in real estate right now, you’d want to...',
    options: [
      { emoji: '🏢', text: 'Own a piece of a building that grows over time', value: 'equity' },
      { emoji: '🏦', text: 'Make money from the interest people pay on loans', value: 'mortgage' },
      { emoji: '⚖️', text: 'Do both — I want the best of both worlds', value: 'hybrid' },
    ],
  },
  {
    question: "What's your money personality?",
    options: [
      { emoji: '🧱', text: 'Slow and steady builder', value: 'equity' },
      { emoji: '⚡', text: 'Quick and tactical', value: 'mortgage' },
      { emoji: '🔀', text: 'Balanced and flexible', value: 'hybrid' },
    ],
  },
  {
    question: 'What kind of investor would your friends say you are?',
    options: [
      { emoji: '🧘‍♀️', text: 'The calm one who plays the long game', value: 'equity' },
      { emoji: '🎯', text: 'The sharp one who spots opportunity', value: 'mortgage' },
      { emoji: '🤹', text: 'The mix-it-up type who likes options', value: 'hybrid' },
    ],
  },
  {
    question: 'If you had to describe your REIT strategy in one word:',
    options: [
      { emoji: '🔒', text: 'Stable', value: 'equity' },
      { emoji: '🚀', text: 'Aggressive', value: 'mortgage' },
      { emoji: '🧠', text: 'Smart', value: 'hybrid' },
    ],
  },
];

const resultsMap = {
  equity: {
    title: 'You’re an Equity REIT Investor',
    description: 'A long-term builder who values stability and growth.',
  },
  mortgage: {
    title: 'You’re a Mortgage REIT Investor',
    description: 'Fast-thinking, numbers-savvy, and always spotting opportunities.',
  },
  hybrid: {
    title: 'You’re a Hybrid REIT Investor',
    description: 'Smart, balanced, and ready for anything.',
  },
};

export default function REITQuizPage() {
  const [answers, setAnswers] = useState<string[]>([]);
  const router = useRouter();

  const handleAnswer = (value: string) => {
    setAnswers([...answers, value]);
  };

  const getResult = () => {
    const count: Record<string, number> = {};
    answers.forEach((a) => {
      count[a] = (count[a] || 0) + 1;
    });

    return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0] as keyof typeof resultsMap;
  };

  const result = answers.length === questions.length ? getResult() : null;

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', background: '#0f2027', color: 'white', minHeight: '100vh' }}>
      {answers.length < questions.length ? (
        <div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{questions[answers.length].question}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {questions[answers.length].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                style={{
                  padding: '1rem',
                  fontSize: '1.2rem',
                  backgroundColor: '#00c3ff',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                {option.emoji} {option.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        result && (
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{resultsMap[result].title}</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>{resultsMap[result].description}</p>
            <button
              onClick={() => router.push('/harderplay')}
              style={{
                padding: '1rem 2rem',
                fontSize: '1.2rem',
                backgroundColor: '#00c3ff',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              ➡️ Try a Real Simulation
            </button>
          </div>
        )
      )}
    </div>
  );
}
