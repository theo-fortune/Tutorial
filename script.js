for (let i = 0; i < 5; i++) {
  console.log(i);
}

const fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

const siblings = ["Jesse", "Mark", "Luis"];
for (let j = 0; j < siblings.length; j++) {
  console.log(siblings[j] + "");
}

const person = {
  name: "Grace",
  gender: "Female",
  siblings: siblings,
  age: 21,
  isMarried: false,
  city: "New York",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

const array = [1, 2, 3, 4, 5];
for (let value of array) {
  console.log(value);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((number) => console.log(number));

const user = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};
user.greet();

const prop = Object.keys(person)
console.log(prop);

const anything = Object.values(person)
console.log(anything);

const personCopy = { ...person, children: ["Joyce", "Jane", "Jamie"] }
console.log(personCopy);