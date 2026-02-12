"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Added: ${item.name}, quantity: ${quantity}, category: ${category} `);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }
  return (
    <section className="m-15 p-10 border rounded">
      <form onSubmit={handleSubmit}>
        <div className="pb-10">
          <label
            className="w-full p-2 rounded-md text-lg font-medium"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            className="border w-87"
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="flex gap-2 w-full p-2 rounded-md">
          <label className="text-lg font-medium" htmlFor="quantity">
            Quantity:
          </label>
          <input
            className="border text-center"
            type="number"
            id="quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            min="1"
            max="99"
          />
          <label className="text-lg font-medium pl-10" htmlFor="category">
            Category:
          </label>
          <select
            className="border"
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozenFoods">Frozen Foods</option>
            <option value="cannedGoods">Canned Goods</option>
            <option value="dryGoods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col items-center pt-10">
          <button
            className="w-20 m-1 p-1 border rounded text-xl font-bold bg-pink-300"
            type="submit"
          >
            +
          </button>
        </div>
      </form>
    </section>
  );
}
