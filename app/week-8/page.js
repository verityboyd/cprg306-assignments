"use client";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./MealIdeas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleItemSelect() {
    //extract the name of the selected item, clean it up, update selectedItemName state. passed down to the itemList component and called when an item in the list is clicked.
  }

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }
  return (
    <main className="flex flex-col items-center m-4">
      <h1 className="font-bold text-3xl">Add To Shopping List & Meal Ideas</h1>
      <div className="flex flex-row">
        <div className="flex flex-col items-start">
          <NewItem onAddItem={handleAddItem} />
          <ItemList onItemSelect={handleItemSelect} items={items} />
        </div>
        <div className="my-13 mx-5">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
