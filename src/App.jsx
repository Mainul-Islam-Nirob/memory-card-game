import React, {useEffect, useState} from "react";
import Card from "./components/Card";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

 function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      setLoading(true);
      const images = await fetchCatImages();

      const catNames = [
        "Mittens", "Whiskers", "Luna", "Simba",
        "Chloe", "Oreo", "Nala", "Milo",
        "Bella", "Leo", "Zoe", "Max"
      ];

      const namedImages = images.slice(0, 12).map((img, index) => ({
        ...img,
        title: catNames[index] || "Cute Cat"
      }));

      setCards(shuffle(namedImages));
      setLoading(false);
    }
    loadImages();
  }, []);
  
   async function fetchCatImages() {
    const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=cat&limit=12`
    );
    const data = await res.json();
    console.log(data)
    return data.data.map((img) => ({
      id: img.id,
      url: img.images.original.url,
      title: img.slug.replace(/-giphy|-gif/gi, '').replace(/-/g, ' ') || "Cute Cat"
    }));
  }

  function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  
  function handleCardClick(id) {
    if (clickedCards.includes(id)) {
      setScore(0);
      setClickedCards([]);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setClickedCards([...clickedCards, id]);
      if (newScore > bestScore) setBestScore(newScore);
    }
    setCards(shuffle(cards));
  }


  return (
    <div className="app-container">
    <div className="text-center mb-4">
      <h1 className="text-4xl font-extrabold text-blue-800">😺 Cat Memory Game</h1>
      <Scoreboard score={score} bestScore={bestScore} />
    </div>
    {loading ? (
      <div className="flex justify-center items-center text-xl font-semibold text-gray-700 h-full">Loading Cats...</div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} url={card.url} title={card.title} onClick={handleCardClick} />
        ))}
      </div>
    )}
  </div>
  );
}

export default App;