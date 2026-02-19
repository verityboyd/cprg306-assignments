import Item from "./Item";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  const sorted = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });
  //style buttons later
  return (
    <div>
      <div>
        <button onClick={() => setSortBy("name")}>Name</button>
        <button onClick={() => setSortBy("category")}>Category</button>
      </div>
      <ul>
        {sorted.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
