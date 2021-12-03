import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({ bot, enlistBot, removeBot, fireBot }) {
  // console.log(bots)

  return (
    <div>
      <YourBotArmy bot={bot} enlistBot={enlistBot} removeBot={removeBot} fireBot={fireBot}/>
      <BotCollection bot={bot} enlistBot={enlistBot} fireBot={fireBot} />
    </div>
  )
}

export default BotsPage;
