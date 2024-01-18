/* ------------------------------ TASK 6 -----------------------------------
Turimas "products" masyvas. 

Parašykite funkcijas, kurios atliks nurodytas užduotis:
1. funkcija "getAveragePrice" - kaip argumentą priims masyvą ir duoto masyvo
atveju grąžins visų "products" vidutinę kainą kaip skaičių.
2. funkcija "getProductsNames" - kaip argumentą priims masyvą ir duoto masyvo
atveju grąžins visų "products" pavadinimus naujame masyve pvz., ['Product 1', 'Product 2', ...].
3. funkcija "getUniqueCategories" - kaip argumentą priims masyvą ir duoto masyvo
atveju grąžins visų unikalių "products" kategorijų sąrašą.
-------------------------------------------------------------------------- */

const products = [
  { id: "1", name: "Product 1", price: 10, category: "Electronics" },
  { id: "2", name: "Product 2", price: 20, category: "Books" },
  { id: "3", name: "Product 3", price: 30, category: "Clothing" },
  { id: "4", name: "Product 4", price: 40, category: "Electronics" },
  { id: "5", name: "Product 5", price: 50, category: "Books" },
];

//funkcija "getAveragePrice"

function getAveragePrice(products) {
  if (products.length === 0) return 0;
  const total = products.reduce((sum, product) => sum + product.price, 0); // sudedamos visos kainos
  return total / products.length; // gaunama vidutine kaina
}

//funkcija "getProductsNames"
function getProductsNames(products) {
  return products.map((product) => product.name);
}

//funkcija "getUniqueCategories"

function getUniqueCategories(products) {
  const categories = new Set();
  products.forEach((product) => categories.add(product.category));
  return Array.from(categories);
}

//console.log

const averagePrice = getAveragePrice(products);
console.log("Average Price:", averagePrice); // vidutine kaina

const productNames = getProductsNames(products);
console.log("Product Names:", productNames); //  pavaadinimai

const uniqueCategories = getUniqueCategories(products);
console.log("Unique Categories:", uniqueCategories); //  kategorijos
