//to-do - style these using tailwind

export default function GroceryItem({ name, quantity, category }) {
  return (
    <li className="w-125 m-4 p-4 border rounded">
      <div className="text-lg font-semibold">{name}</div>
      <div>Quantity: {quantity}</div>
      <div className="font-style: italic">Category: {category}</div>
    </li>
  );
}
