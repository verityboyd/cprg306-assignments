import items from "./items.json";
import Item from "./item";

export default function ItemList() {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
}
