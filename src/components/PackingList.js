import Item from "./Item";

function PackingList({ items, onDeleteItem }) {
  const renderedList = items.map((item) => {
    return <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />;
  });

  return (
    <div className="list">
      <ul>{renderedList} </ul>
    </div>
  );
}

export default PackingList;
