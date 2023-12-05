import React from "react";
import { Item } from "./Item";

export const PackingList = ({ items, onDelete }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};
