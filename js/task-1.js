const listCategories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${listCategories.length} `);

listCategories.forEach((item) => {
  const category = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li").length;

  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements}`);
});
