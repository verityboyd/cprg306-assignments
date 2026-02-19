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
  return (
    <div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl">Sort List By:</h3>
        <div className="flex flex-row justify-center">
          <button
            onClick={() => setSortBy("name")}
            className={`border rounded m-2 px-3 py-1 bg-pink-200 hover:bg-pink-400 ${sortBy === "name" ? "font-semibold bg-pink-400" : ""}`}
          >
            Name
          </button>
          <button
            onClick={() => setSortBy("category")}
            className={`border rounded m-2 px-3 py-1 bg-pink-200 hover:bg-pink-400 ${sortBy === "category" ? "font-semibold bg-pink-400" : ""}`}
          >
            Category
          </button>
        </div>
      </div>
      <ul>
        {sorted.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
