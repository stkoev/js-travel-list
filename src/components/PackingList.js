import { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onHandleCheck }) {
  const [sortBy, setSortBy] = useState("input");

  function handleSortChange(e) {
    setSortBy(e.target.value);
  }
  const sortedList = () => {
    if (sortBy === "input") {
      return items;
    } else if (sortBy === "reverseInput") {
      return items.slice().sort((a, b) => b.id - a.id);
    } else if (sortBy === "description") {
      return items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortBy === "packed") {
      return items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    } else if (sortBy === "number") {
      return items.slice().sort((a, b) => a.quantity - b.quantity);
    }
  };

  const renderedList = sortedList().map((item) => {
    return (
      <Item
        item={item}
        key={item.id}
        onDeleteItem={onDeleteItem}
        onHandleCheck={onHandleCheck}
      />
    );
  });

  return (
    <div className="list">
      <ul>{renderedList} </ul>
      <div className="action">
        <select name="" id="" onChange={handleSortChange} value={sortBy}>
          <option value="input">Sort by Input order</option>
          <option value="description">Sort by description</option>
          <option value="number">Sort by number of items</option>
          <option value="packed">Sort by packed status</option>
          <option value="reverseInput">Reversed Input</option>
        </select>
      </div>
    </div>
  );
}

export default PackingList;
