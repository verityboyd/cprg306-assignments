//to-do - style these using tailwind

export default function GroceryItem({ name, quantity, category }) {
  return (
    <li className="m-5 py-3 px-5 border rounded">
      {name}
      <div>Quantity: {quantity}</div>
      <div>Category: {category}</div>
    </li>
  );
}
