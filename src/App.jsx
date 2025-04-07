// App.jsx
import React, {useEffect, useState} from "react";
import Card from "./components/Card";
import Scoreboard from "./components/Scoreboard";

 function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);


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
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">😺 Cat Memory Game</h1>
      <Scoreboard score={score} bestScore={bestScore} />
      <div className="grid grid-cols-4 gap-4 mt-6">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} url={card.url} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;