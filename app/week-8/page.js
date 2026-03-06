"use client";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./MealIdeas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function cleanItem(itemName) {
    //remove emoji
    let cleaned = itemName.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      "",
    );
    cleaned = cleaned.split(",")[0];
    cleaned = cleaned.trim();
    return cleaned;
  }

  function handleItemSelect(item) {
    //extract the name of the selected item, clean it up, update selectedItemName state. passed down to the itemList component and called when an item in the list is clicked.
    const cleanName = cleanItem(item.name);
    setSelectedItemName(cleanName);
  }

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }
  return (
    <main className="flex flex-col items-center m-4 w-full">
      <h1 className="font-bold text-3xl text-center">
        Add To Shopping List & Meal Ideas
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-start">
          <NewItem onAddItem={handleAddItem} />
          <ItemList onItemSelect={handleItemSelect} items={items} />
        </div>
        <div className="my-13 mx-5 w-60">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
