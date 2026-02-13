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
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="pb-10">
          <label className="p-2 rounded-md text-lg font-medium" htmlFor="name">
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
        <div className="flex flex-row gap-2 p-2 rounded-md">
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
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex justify-center pt-10">
          <button
            className="w-30 m-1 p-1 border rounded text-xl font-medium bg-pink-200 hover:bg-pink-400 dark:hover:bg-blue-400 dark:bg-blue-600"
            type="submit"
          >
            + Add
          </button>
        </div>
      </form>
    </section>
  );
}
