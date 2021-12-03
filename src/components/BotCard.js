import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bots, handleClick, fireBot }) {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bots.id}
        onClick={() => handleClick(bots)}
      >
        <div className="image">
          <img alt="oh no!" src={bots.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bots.name}
            <i className={botTypeClasses[bots.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bots.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bots.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bots.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bots.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={(e) => {
                  e.stopPropagation();
                  fireBot(bots);
                }
              }
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
