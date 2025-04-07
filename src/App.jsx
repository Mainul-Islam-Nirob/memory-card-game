// App.jsx
import React, {useEffect, useState} from "react";
import Card from "./components/Card";
import Scoreboard from "./components/Scoreboard";

 function App() {
  const [cards, setCards] = useState([]);

    useEffect(() => {
      async function loadImages() {
        const images = await fetchCatImages();
        setCards(shuffle(images));
      }
      loadImages();
    }, []);
  
   async function fetchCatImages() {
    const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=cat&limit=12`
    );
    const data = await res.json();
    return data.data.map((img) => ({
      id: img.id,
      url: img.images.original.url
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
  

  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">😺 Cat Memory Game</h1>
      <div className="grid grid-cols-4 gap-4 mt-6">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} url={card.url} />
        ))}
      </div>
    </div>
  );
}

export default App;