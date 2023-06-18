import Logo from "./components/Logo";
import Form from "./components/Form";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Shoes", quantity: 1, packed: true },
];

function App() {
  const [items, setItems] = useState(initialItems);
  function handleAddItem(item) {
    setItems((c) => [...c, item]);
  }
  function handleDeleteItem(itemId) {
    setItems((items) => items.filter((item) => item.id !== itemId));
  }
  function handleCheck(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm("You are about to clear the list");
    if (confirmed) setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onHandleCheck={handleCheck}
        handleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
