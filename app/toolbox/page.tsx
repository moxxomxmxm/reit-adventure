'use client';
import Link from 'next/link';

export default function ToolboxPage() {
  return (
    <div className="min-h-screen bg-blue-50 px-6 py-12 flex flex-col items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-6">🧰 Toolbox Center</h1>

        <div className="space-y-4 text-left">
          <Link href="/simulation" className="block bg-white shadow p-4 rounded-xl hover:bg-gray-100">
            📈 <strong>Simulation Game</strong> – Practice growing $100 using different REITs.
          </Link>

          <Link href="/reit-quiz" className="block bg-white shadow p-4 rounded-xl hover:bg-gray-100">
            🧠 <strong>REIT Quiz</strong> – Check what you’ve learned so far.
          </Link>

          <Link href="/harderplay" className="block bg-white shadow p-4 rounded-xl hover:bg-gray-100">
            🔥 <strong>Harder Play Mode</strong> – Challenge yourself with historical data.
          </Link>
        </div>

        <div className="mt-10 border-t pt-6">
          <h2 className="text-xl font-semibold mb-3">Ready to connect with others?</h2>
          <Link href="/community">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-lg transition">
              🤝 Join Our Community
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
