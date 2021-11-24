import { getNutrition } from './recipeUtils.js';

test('getNutrition returns nutrition for a valid recipe', () => {
  const nutrition = getNutrition({
    servings: 4,
    ingredients: [
      { name: 'chocolate chips', calories: 300, fat: 30, sugar: 40 },
    ],
  });
  const expected = {
    calories: 75,
    fat: 7.5,
    sugar: 10,
    time: 20,
  };
  expect(nutrition).toEqual(expected);
});

test('getNutrition throws an error with an invalid recipe', () => {
  expect(() => getNutrition({ servings: 4 })).toThrow();
});
