export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="w-125 m-4 p-4 border rounded hover:bg-pink-100 dark:hover:bg-blue-900"
    >
      <h3 className="text-lg font-semibold">{name}</h3>
      <p>Quantity: {quantity}</p>
      <p className="italic">Category: {category}</p>
    </li>
  );
}
