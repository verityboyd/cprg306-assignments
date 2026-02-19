"use client";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }
  return (
    <main className="flex flex-col items-center m-4">
      <h1 className="font-bold text-3xl">Add To Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
