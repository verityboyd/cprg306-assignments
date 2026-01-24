//to-do - style these using tailwind

export default function GroceryItem({ name, quantity, category }) {
  return (
    <ul>
      <li>{name} </li>
      <li>Quantity: {quantity}</li>
      <li>Category: {category}</li>
    </ul>
  );
}
