import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bot, removeBot, fireBot }) {
  // console.log(bot)

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {
           bot
           .filter((bot) => {
             if (bot.enlist) {
               return bot.enlist
             }
           })
           .map((bot) => 
           <BotCard key={bot.id} bots={bot} handleClick={removeBot} fireBot={fireBot} />)
          }
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
