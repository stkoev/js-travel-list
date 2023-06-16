function Item({ item }) {
  console.log();
  const { id, description, quantity, packed } = item;
  return (
    <li value={id}>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button>❌</button>
    </li>
  );
}
export default Item;
