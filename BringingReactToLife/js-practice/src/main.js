import { setupCounter } from './counter.js'

// 1. Array - add item
// Level 1 — Arrays

const fruits = ["apple", "banana", "orange"];

console.log([...fruits, "mango", "pear"])

// Exercise 2 — Delete an item
console.log([...fruits, "mango", "pear"].filter(fruit => fruit !== "orange"))

// Exercise 3 — Filter
const numbers = [3, 8, 12, 5, 20, 7, 15];

function greaterThan10(number) {
  return number > 10
}

console.log(numbers.filter(greaterThan10))

// Level 2 — Objects
// Exercise 4 — Update an object

const person = {
  name: "Johan",
  age: 32,
  city: "Stockholm"
};

console.log({
  ...person,
  age: 33
})

function updateObject(object, property, value) {
  return {
    ...object,
    [property]: value
  }
}

console.log(updateObject(person, "zipcode", "70230"))

// Exercise 5 — Add a property

console.log({
  ...person,
  email: "Hotmail.com"
})

// 6 Delete a property

function deleteProperty(object, property) {
  if (object[property])
    delete object[property]
}

deleteProperty(person, "name")
console.log(person)

// Exercise 7 — Find something

const users = [
  { id: 1, name: "Anna", age: 25 },
  { id: 2, name: "Erik", age: 31 },
  { id: 3, name: "Lisa", age: 28 }
];

const id2 = users.find(user => user.id === 2)
console.log(id2)

// Exercise 8 — Filter objects

const above30 = users.filter(user => user.age >= 30)
console.log(above30)

function below30(user) {
  return user.age < 30
}

const usersBelow30 = users.filter(below30)
console.log(usersBelow30)

// Exercise 9 — Add an object

console.log([...users, { id: 3, name: "Jacob", age: 38 }])

// Exercise 10 — Delete an object

console.log(users.filter(user => user.id !== 2))