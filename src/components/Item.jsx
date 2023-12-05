import React from "react";

export const Item = ({ item, onDelete }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} - {item.description}
      </span>
      <button onClick={() => onDelete(item)}>❌</button>
    </li>
  );
};
