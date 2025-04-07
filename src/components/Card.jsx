import React from "react";

export default function Card({ id, url, title, onClick }) {
  return (
    <div
      onClick={() => onClick(id)}
      className="cursor-pointer rounded-lg overflow-hidden shadow hover:shadow-lg transform hover:scale-105 transition bg-zinc-800 border border-zinc-700"
    >
      <div className="w-full h-32 sm:h-36">
        <img src={url} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="text-[0.65rem] sm:text-xs font-semibold text-center text-gray-200 bg-zinc-900 py-1 px-1 border-t border-zinc-700 truncate">
        {title}
      </div>
    </div>
  );
}
