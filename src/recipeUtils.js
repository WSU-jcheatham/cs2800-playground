export function getNutrition(recipe) {
  let calories = 0;
  let fat = 0;
  let sugar = 0;

  for (const ingredient of recipe.ingredients) {
    calories += ingredient.calories;
    fat += ingredient.fat;
    sugar += ingredient.sugar;
  }

  return {
    calories: calories / recipe.servings,
    fat: fat / recipe.servings,
    sugar: sugar / recipe.servings
  };
}
