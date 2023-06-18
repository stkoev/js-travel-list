function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Nothing to pack</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((i) => i.packed).length;
  const percentage = Math.round((100 * numPacked) / numItems);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <p>
          <em>ALL DONE</em>
        </p>
      ) : (
        <p>
          You have <em>{numItems}</em> items on your list, and you already
          packed {numPacked} ({percentage}%)
        </p>
      )}
    </footer>
  );
}

export default Stats;
