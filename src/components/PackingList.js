import Item from "./Item";

function PackingList({ initialItems }) {
  const renderedList = initialItems.map((item) => {
    return <Item item={item} key={item.id} />;
  });

  return (
    <div className="list">
      <ul>{renderedList} </ul>
    </div>
  );
}

export default PackingList;
