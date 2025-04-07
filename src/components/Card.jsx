import React from "react";

export default function Card({ id, url, onClick }) {
  return (
    <div
      className="cursor-pointer border rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
      onClick={() => onClick(id)}
    >
      <img src={url} alt="cat" className="w-full h-48 object-cover" />
    </div>
  );
}
