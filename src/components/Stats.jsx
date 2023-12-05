import React from "react";

export const Stats = ({ items }) => {
  const numberItem = items.length;
  const itemPacked = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((itemPacked / numberItem) * 100);

  if (items.length === 0) {
    return (
      <>
        <em className="stats">Please add your item now...</em>
      </>
    );
  }

  return (
    <footer className="stats">
      {percentage === 100
        ? "you got everything"
        : `You have ${numberItem} items on your list and you already packed
      ${itemPacked} (${percentage}%)`}
    </footer>
  );
};
