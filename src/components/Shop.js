import React from "react";
import { ShopTile } from "./PotionTile";

function Shop({ potions, addToInventory }) {
  const potionList = potions.map((potion) => {
    return (
      <ShopTile key={potion.id} potion={potion} addToInventory={addToInventory}>
        <h4 className="potion-header">{potion.name}</h4>
      </ShopTile>
    );
  });

  return (
    <div className="shop">
      <div className="shop-header">
        <img
          className="torch"
          src="https://img.itch.zone/aW1nLzEzNDg2ODkuZ2lm/original/BEjCgg.gif"
          alt="torch"
        />
        <h1>Ye Olde Apothecary</h1>
        <img
          className="torch flipped"
          src="https://img.itch.zone/aW1nLzEzNDg2ODkuZ2lm/original/BEjCgg.gif"
          alt="torch"
        />
      </div>
      <div className="shop-cards">{potionList}</div>
    </div>
  );
}

export default Shop;
