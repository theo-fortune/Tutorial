const person = {
  name: "Fortune",
  age: 16,
  eyeColor: "black",
  gender: "Male",
  married: true,
  children: {
    Child1: "Anastasia",
    Child2: "Flourish",
    Child3: "Rose",
  },
  phones: ["Samsung s24 Ultra", "iPhone 15 Pro Max", "Google Pixel 8 Pro"],
};
person.car = "Bugatti Chiron";
console.log(person);

// * Mutable Objects
const x = person;
x.age = 20;
console.log(person.age);


const status = `${person.name} is ${person.age} years old ${
  person.married
    ? "and He is happily married"
    : "and He is single and searching..."
} and drives a ${person.car}`;
console.log(status);

delete person["eyeColor"];
// delete person["eyeColor"];
console.log(person);
console.log(person.children.Child2);
console.log(person.phones[1]);
// console.log(person.birthDay());