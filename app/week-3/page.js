import GroceryItem from "./GroceryItem";
import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="flex flex-col items-center m-4">
      <h1 className="font-bold text-xl">Shopping List</h1>
      <GroceryItemList />
    </main>
  );
}
