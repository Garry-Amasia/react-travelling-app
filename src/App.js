import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Logo } from "./components/Logo";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

function App() {
  const [items, setItems] = useState([]);

  //ADD ITEM TO THE LIST
  const handleAddItems = (obj) => {
    setItems([...items, obj]);
  };

  //DELETE ITEM FROM THE LIST
  const handleOnDelete = (obj) => {
    setItems(items.filter((item) => item.id !== obj.id));
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDelete={handleOnDelete} />
      <Stats />
    </div>
  );
}

export default App;
