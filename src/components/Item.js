function Item({ item, onDeleteItem, onHandleCheck }) {
  console.log();
  const { id, description, quantity, packed } = item;
  return (
    <li value={id}>
      <input
        type="checkbox"
        name=""
        id={id}
        value={packed}
        checked={packed}
        onClick={() => onHandleCheck(id)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} <label htmlFor={id}> {description}</label>
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}
export default Item;
