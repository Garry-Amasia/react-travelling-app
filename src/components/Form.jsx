import React, { useState } from "react";

export const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (!description) return;
    // if (description.length < 1) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);

    // console.log(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleOnSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="type item ..."
        value={description}
        onChange={(e) => {
          // console.log(e.target.value);
          setDescription(e.target.value);
        }}
      />
      <button>add</button>
    </form>
  );
};

//we can use onClick event on button, but it wont work when we press enter, it ONLY work on which button is pressed

//onChange={(e) => setQuantity(e.target.value)} inside seleect element, the value come from option!! and the value always string, so we need to convert it to number
