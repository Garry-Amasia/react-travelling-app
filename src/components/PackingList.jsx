import React from "react";
import { Item } from "./Item";

export const PackingList = ({ initialItems }) => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
};
