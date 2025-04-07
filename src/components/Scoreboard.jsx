import React from "react";

export default function Scoreboard({ score, bestScore }) {
  return (
    <div className="flex justify-center gap-8 text-lg font-semibold text-gray-200">
    <p>Score: <span className="text-blue-400">{score}</span></p>
    <p>Best Score: <span className="text-green-400">{bestScore}</span></p>
  </div>  
  );
}