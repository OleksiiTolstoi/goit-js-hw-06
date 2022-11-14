const newArrays = document.querySelectorAll(".item");
console.log(`Number of categories:`, newArrays.length);

newArrays.forEach(newFunction);

function newFunction(category) {
  const newTitleEl = category.firstElementChild;
  console.log("Category:", newTitleEl.textContent);
  const newElement = category.lastElementChild;
  console.log("Elements:", newElement.childElementCount);
}
