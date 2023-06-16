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
  const [items, setInitialItems] = useState(initialItems);
  function addTask(task) {
    setInitialItems([...items, task]);
  }
  return (
    <div className="App">
      <Logo />
      <Form addTask={addTask} />
      <PackingList initialItems={items} />
      <Stats />
    </div>
  );
}

export default App;
