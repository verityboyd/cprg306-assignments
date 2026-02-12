import NewItem from "./NewItem";

export default function Page() {
  return (
    <main className="flex flex-col items-center m-4">
      <h1 className="font-bold text-3xl">Add To Shopping List</h1>
      <NewItem />
    </main>
  );
}
