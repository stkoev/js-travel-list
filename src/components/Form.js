import { useState } from "react";

function Form({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };
    onAddItem(newItem);
    setQuantity(1);
    setDescription("");
  }

  function handleQuantityChange(e) {
    setQuantity(Number(e.target.value));
  }

  function handleItemChange(e) {
    setDescription(e.target.value);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip.</h3>
      <select name="" id="" onChange={handleQuantityChange} value={quantity}>
        {Array.from({ length: 20 }, (_, idx) => idx + 1).map((num, idx) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        onChange={handleItemChange}
        value={description}
      />
      <button type="submit">add</button>
    </form>
  );
}

export default Form;
