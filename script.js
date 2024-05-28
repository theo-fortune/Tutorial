console.log("Hello World");

const fruits = ["mango", "apple", "pineapple", "grape"];
const show = fruits.toString();
console.log(show);

console.log(fruits.pop());
fruits.push("Strawberry");
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("kiwi");
console.log(fruits);
fruits[0] = "orange";
fruits[2] = "watermelon";
fruits[1] = "banana";
console.log(fruits);

const vegetables = ["Carrot", "Spinach", "Corn", "Okra", "Pepper", "Onions"];
const food = fruits.concat(vegetables);
console.log(food);

const recipes = ["Garlic", "Ginger", "Salt"];

const breakfast = fruits.concat(vegetables, recipes);
console.log(breakfast);
const modify = breakfast.concat("cheese", "water");
console.log(modify);

modify.splice(2, 0, "Lemon", "Cherry")
console.log(modify);

const clean = modify.slice(3)
console.log(clean);