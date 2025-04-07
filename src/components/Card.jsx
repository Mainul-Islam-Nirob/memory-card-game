import React from "react";

export default function Card({ id, url, title, onClick }) {
  return (
    <div
      className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition bg-white border border-gray-200 h-60 flex flex-col"
      onClick={() => onClick(id)}
    >
    <div className="flex-grow relative">
      <img src={url} alt="cat" className="w-full h-full object-cover" />
    </div>
    <div className="absolute bottom-0 w-full bg-white/80 text-gray-800 text-sm font-semibold text-center p-1 backdrop-blur-sm border-t border-gray-200">
      {title}
    </div>
  </div>
  );
}
