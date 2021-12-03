import React, { useEffect, useState } from "react";
import BotsPage from "./BotsPage";

const API = 'http://localhost:8002/bots';

function App() {
  const [bots, setBots] = useState([])

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(json => setBots(json))
  }, [])

  function enlistBot(bot) {
    setBots(bots.map((b) => b.id === bot.id ? {...b, enlist: true} : b));
  }

  function removeBot(bot) {
    setBots(bots.map((b) => b.id === bot.id ? {...b, enlist: false} : b));
  }

  function fireBot(bot) {
    setBots(bots.filter((b) => b.id !== bot.id))
  }

  return (
    <div className="App">
      <BotsPage bot={bots} enlistBot={enlistBot} removeBot={removeBot} fireBot={fireBot} />
    </div>
  );
}

export default App;
