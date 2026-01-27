import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="flex flex-col items-center m-4">
      <h1 className="font-bold text-3xl">Shopping List</h1>
      <GroceryItemList />
    </main>
  );
}
