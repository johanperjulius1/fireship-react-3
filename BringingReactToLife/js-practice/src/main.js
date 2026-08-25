import { setupCounter } from './counter.js'

// 1. Array - add item

const fruits = ["apple", "banana", "orange"];

console.log([...fruits, "mango", "pear"])

// Exercise 2 — Delete an item

const fruits2 = ["apple", "banana", "orange", "mango"]

// delete orange

console.log(fruits2.filter(fruit => fruit !== "orange"))

// Exercise 3 — Filter

const numbers = [3, 8, 12, 5, 20, 7, 15];

const above10 = (value) => {
  return value > 10
}

console.log(numbers.filter(above10))

// Exercise 4 — Update an object

const person = {
  name: "Johan",
  age: 32,
  city: "Stockholm"
};

const older = {
  ...person,
  age: 33
}

console.log(older)

// Exercise 5 — Add a property

const me = {
  name: "Johan",
  age: 32
};

me.city = "Orebro"

console.log(me)

// Exercise 6 — Delete a property

delete me.name;
console.log(me)

// Exercise 7 — Find something

const users = [
  { id: 1, name: "Anna", age: 25 },
  { id: 2, name: "Erik", age: 31 },
  { id: 3, name: "Lisa", age: 28 }
];

const user2 = users.find(user => user.id === 2)

console.log(user2)

// Exercise 8 — Filter objects

const users30 = users.filter(user => user.age >= 30)
console.log(users30)

// Exercise 9 — Add an object

const moreUsers = [{ id: 4, name: "Tisa", age: 25 }, ...users,]

console.log(moreUsers)

// Exercise 10 — Delete an object

const fewerUsers = users.filter(user => user.id > 1)
console.log(fewerUsers)

// Exercise 11 — Update one user

const updateUser = (user) => {
  if (user.id === 2) {
    return {
      ...user,
      age: 32,
    }
  }
  return user;
}

console.log(users.map(updateUser))
