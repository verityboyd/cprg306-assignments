"use client";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import { useState, useEffect } from "react";
import MealIdeas from "./MealIdeas";
import { useUserAuth } from "@/app/contexts/AuthContext";
import Link from "next/link";
import { getItems, addItem } from "../_services/ShoppingListService";
import Navbar from "../components/Navbar";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  async function loadItems() {
    if (user?.uid) {
      const dbItems = await getItems(user.uid);
      setItems(dbItems);
    } else {
      return;
    }
  }

  useEffect(() => {
    loadItems();
  }, [user]);

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

  async function handleAddItem(newItem) {
    if (!user?.uid) return;
    const id = await addItem(user.uid, newItem);
    setItems((prev) => [...prev, { ...newItem, id }]);
  }

  if (!user) {
    return (
      <section className="flex flex-col items-center px-4 pt-4 w-full">
        <div className="m-5 my-15 p-10 border rounded">
          <p className="text-center font-medium text-2xl">
            You must be{" "}
            <Link href="/week-10" className="font-semibold hover:underline">
              logged in
            </Link>{" "}
            to view this page.
          </p>
        </div>
      </section>
    );
  }
  return (
    <main className="flex flex-col items-center px-4 pt-4 w-full">
      <div className="flex flex-col w-full justify-between items-center pt-5">
        <h1 className="font-bold text-4xl px-8">Shopping List & Meal Ideas</h1>
        <Navbar />
      </div>
      <div className="flex flex-col md:flex-row pt-10">
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
