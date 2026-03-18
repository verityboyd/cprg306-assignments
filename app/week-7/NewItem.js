"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const categories = [
    "produce",
    "dairy",
    "bakery",
    "meat",
    "frozen foods",
    "canned goods",
    "dry goods",
    "beverages",
    "snacks",
    "household",
    "other",
  ];

  const initialState = {
    name: "",
    quantity: 1,
    category: "produce",
  };

  const [item, setItem] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { ...item, id: crypto.randomUUID() };
    onAddItem(newItem);
    setItem(initialState);
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
            name="name"
            value={item.name}
            onChange={handleChange}
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
            name="quantity"
            value={item.quantity}
            onChange={handleChange}
            min="1"
            max="99"
          />
          <label className="text-lg font-medium pl-10" htmlFor="category">
            Category:
          </label>
          <select
            className="border"
            id="category"
            value={item.category}
            name="category"
            onChange={handleChange}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
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
