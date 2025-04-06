// App.jsx
import React from "react";
import Card from "./components/Card";
import Scoreboard from "./components/Scoreboard";

 function App() {
 
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">😺 Cat Memory Game</h1>
      <Scoreboard />
      <div className="grid grid-cols-4 gap-4 mt-6">
        <Card />
      </div>
    </div>
  );
}

export default App;