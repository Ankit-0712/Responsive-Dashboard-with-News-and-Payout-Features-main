import { useState } from 'react';

export default function PayoutCalculator() {
  const [rate, setRate] = useState(10);
  const [total, setTotal] = useState(0);

  const calculatePayout = (articles) => {
    setTotal(articles.length * rate);
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="font-bold mb-2">Payout Calculator</h2>
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
        className="border p-2 rounded mb-2"
      />
      <button
        onClick={() => calculatePayout(news)}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Calculate Payout
      </button>
      <p className="mt-2">Total Payout: ${total}</p>
    </div>
  );
}