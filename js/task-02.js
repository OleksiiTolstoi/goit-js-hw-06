const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");

const makeIngredientsList = (options) => {
  return options.map((option) => {
    const listEl = document.createElement("li");
    listEl.classList.add("item");
    listEl.textContent = option;
    return listEl;
  });
};

const elements = makeIngredientsList(ingredients);
console.log(elements);
listEl.append(...elements);
