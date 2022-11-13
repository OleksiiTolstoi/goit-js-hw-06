const newArrays = document.querySelector("ul").children.length;
console.log(`Number of categories:`, newArrays);

const items = document.querySelectorAll(".item");
items.forEach((element) => {
  const title = element.querySelector("h2").textContent;
  const itemsLength = element.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsLength}`);
});
