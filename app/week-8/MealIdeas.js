"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
  );
  const data = await response.json();
  //console.log(data.data);
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals);
  }

  //use useEffect to call loadMealIdeas whenever ingredient prop changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <header>
        <h2 className="text-2xl mx-2">Meal Ideas</h2>
      </header>
      <div className="my-5">
        {meals.length === 0 ? (
          <p>No meals found.</p>
        ) : (
          <ol>
            {meals.map((meal) => (
              <li key={meal.idMeal} className="border-2 rounded-lg p-3 m-2">
                {meal.strMeal}
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
