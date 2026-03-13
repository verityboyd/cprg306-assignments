"use client";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./MealIdeas";
import { useUserAuth } from "@/app/contexts/AuthContext";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  async function handleClick() {
    await firebaseSignOut();
    router.push("/week-9");
  }

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

  if (!user) {
    return (
      <section className="flex flex-col items-center px-4 pt-4 w-full">
        <div className="m-5 my-15 p-10 border rounded">
          <p className="text-center font-medium text-2xl">
            You must be{" "}
            <Link href="/week-9" className="font-semibold hover:underline">
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
      <div>
        <h1 className="font-bold text-3xl text-center">
          Add To Shopping List & Meal Ideas
        </h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-start">
          <NewItem onAddItem={handleAddItem} />
          <ItemList onItemSelect={handleItemSelect} items={items} />
        </div>
        <div className="my-13 mx-5 w-60">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
      <div className="fixed bottom-6 right-4">
        <button
          onClick={handleClick}
          className="cursor-pointer p-1.5 border rounded-4xl text-md font-medium bg-pink-200 hover:bg-pink-400 dark:hover:bg-blue-400 dark:bg-blue-600"
        >
          <Icon icon="mdi:logout" width="24" height="24" />
        </button>
      </div>
    </main>
  );
}
