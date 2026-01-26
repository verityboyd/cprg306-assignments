//to-do - style these using tailwind

export default function GroceryItem({ name, quantity, category }) {
  return (
    <li className="w-125 m-4 p-4 border rounded">
      {name}
      <div>Quantity: {quantity}</div>
      <div>Category: {category}</div>
    </li>
  );
}
