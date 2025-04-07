import React from "react";

export default function Card({ id, url, title, onClick }) {
  return (
    <div
      onClick={() => onClick(id)}
      className="cursor-pointer rounded-lg overflow-hidden shadow hover:shadow-lg transform hover:scale-105 transition bg-white border border-gray-200"
    >
      {/* Image container with fixed height */}
      <div className="w-full h-32 sm:h-36">
        <img
          src={url}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <div className="text-sm sm:text-xs font-semibold text-center text-gray-800 bg-white py-1 px-1 border-t border-gray-200 truncate">
        {title}
      </div>
    </div>
  );
}
