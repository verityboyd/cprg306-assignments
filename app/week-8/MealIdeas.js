"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
  );
  if (!response.ok) {
    throw new Error(`HTTP Error! Status: ${response.status}`);
  }
  const data = await response.json();
  //console.log(data.data);
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function loadMealIdeas() {
    try {
      const meals = await fetchMealIdeas(ingredient);
      setMeals(meals);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  //use useEffect to call loadMealIdeas whenever ingredient prop changes
  useEffect(() => {
    setLoading(true);
    loadMealIdeas();
  }, [ingredient]);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500 flex justify-center items-center p-8">
        <h2 className="text-3xl font-bold">ERROR!</h2>
        <p className="text-xl">{error}</p>
        <Link href="./" className="bg-amber-600 px-4 py-2 rounded-md">
          Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <header>
        <h2 className="text-2xl mx-2 font-semibold">
          {ingredient
            ? `Meal Ideas for "${ingredient}"`
            : "Meal Ideas (select an item)"}
        </h2>
      </header>
      {ingredient && (
        <div className="my-5">
          {meals.length === 0 ? (
            <p className="text-gray-500">No meals found.</p>
          ) : (
            <ol>
              {meals.map((meal) => (
                <li key={meal.idMeal} className="border rounded-lg p-3 m-2">
                  {meal.strMeal}
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
    </div>
  );
}
