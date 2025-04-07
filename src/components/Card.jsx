import React from 'react'

function Card({id, url}) {
  return (
    <div
    className="cursor-pointer border rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
    <img src={url} alt="cat" className="w-full h-48 object-cover" />
  </div>
  )
}

export default Card
