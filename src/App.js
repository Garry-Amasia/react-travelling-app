import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Logo } from "./components/Logo";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  //ADD ITEM TO THE LIST
  const handleAddItems = (obj) => {
    setItems((current) => [...current, obj]);
  };

  //DELETE ITEM FROM THE LIST
  const handleOnDelete = (obj) => {
    setItems((current) => current.filter((item) => item.id !== obj.id));
  };

  //TOGGLE CHECKBOX
  const handleToggleItem = (obj) => {
    setItems((current) =>
      current.map((item) =>
        item.id === obj.id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  // CLEAR THE LIST
  const handleOnClear = () => {
    setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDelete={handleOnDelete}
        onToggle={handleToggleItem}
        onClear={handleOnClear}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
