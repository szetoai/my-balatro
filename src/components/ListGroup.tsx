import { useState } from "react";

// ListGroup: Null -> Fragment
// Creates an interactable ListGroup that highlights the most recently clicked element
function ListGroup() {
  const items = ["Ace", "King", "Queen", "Jack", "Ten"];
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>This is a list!</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
