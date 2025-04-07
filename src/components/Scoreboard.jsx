import React from "react";

export default function Scoreboard({ score, bestScore }) {
  return (
    <div className="flex justify-center gap-6 text-lg font-medium">
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
}