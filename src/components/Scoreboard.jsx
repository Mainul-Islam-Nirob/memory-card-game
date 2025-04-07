import React from "react";

export default function Scoreboard({ score, bestScore }) {
  return (
    <div className="flex justify-center gap-8 text-lg font-semibold text-gray-800">
      <p>Score: <span className="text-blue-600">{score}</span></p>
      <p>Best Score: <span className="text-green-600">{bestScore}</span></p>
    </div>
  );
}