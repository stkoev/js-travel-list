function Item({ item, onDeleteItem }) {
  console.log();
  const { id, description, quantity, packed } = item;
  return (
    <li value={id}>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
export default Item;
