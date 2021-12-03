import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bot, enlistBot, fireBot }) {
  // console.log(bots)

  return (
    <div className="ui four column grid">
      <div className="row">
        {
          bot.map((bot) => <BotCard key={bot.id} bots={bot} handleClick={enlistBot} fireBot={fireBot} />)
        }
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
