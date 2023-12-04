import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot, deleteBot }) {
  // Check if bots is defined and has length before mapping
  const armyItem = bots && bots.length > 0 ? (
    bots.map((bot) => (
      <BotCard
        key={bot.id}
        bot={bot}
        clickEvent={removeBot}
        deleteBot={deleteBot}
      />
    ))
  ) : (
    <p>No bots in the army.</p>
  );

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {armyItem}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
