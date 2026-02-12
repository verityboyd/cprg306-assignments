export default function GroceryItem({ name, quantity, category }) {
  return (
    <li className="w-125 m-4 p-4 border rounded">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p>Quantity: {quantity}</p>
      <p className="italic">Category: {category}</p>
    </li>
  );
}
