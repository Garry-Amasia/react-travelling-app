import React from "react";

export const Item = ({ item, onDelete, onToggle }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggle(item);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} - {item.description}
      </span>
      <button onClick={() => onDelete(item)}>❌</button>
    </li>
  );
};
