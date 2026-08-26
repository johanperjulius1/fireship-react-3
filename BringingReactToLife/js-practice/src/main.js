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

// Exercise 11 — Update one user

console.log(users.map(user => {
  if (user.name === "Erik") {
    return {
      ...user,
      age: 40
    }
  }
  return user
}))

// Exercise 12 — Update a different property

console.log(users.map(user => user.name === "Lisa" ? {
  ...user,
  name: "Elizabeth"
} : user
))

// Level 5 — Mini CRUD challenge

// Exercise 13 — CREATE

console.log([...users, { id: 4, name: "Marcus", age: 35 }])

// Exercise 14 — DELETE

console.log(users.filter(user => user.id !== 2))

// Exercise 15 — UPDATE

console.log(users.map(user => user.id === 3 ? {
  ...user,
  age: 29
} : user))

// Exercise 16 — FILTER

const olderThan30 = users.filter(user => user.age >= 30)
console.log(olderThan30)

// 🔥 Level 6 — React-style challenge

const todos = [
  { id: 1, text: "Learn arrays", completed: true },
  { id: 2, text: "Learn objects", completed: false },
  { id: 3, text: "Learn React", completed: false }
]

// Exercise 17 — Add a todo

console.log([...todos, {
  id: 4,
  text: "Practice useReducer",
  completed: false
}])

// Exercise 18 — Complete a todo

console.log(todos.map(todo => todo.id === 3 ? {
  ...todo,
  completed: true
} : todo))

// Exercise 19 — Delete a todo

console.log(todos.filter(todo => todo.id !== 1))

// Exercise 20 — Show only incomplete todos

console.log(todos.filter(todo => todo.completed === false))

// ⭐ Final challenge

let products = [
  { id: 1, name: "Laptop", price: 1200, inStock: true },
  { id: 2, name: "Phone", price: 800, inStock: true },
  { id: 3, name: "Tablet", price: 500, inStock: false }
];

// A. Add

// Add:

console.log([...products, { id: 4, name: "Monitor", price: 300, inStock: true }])

// B. Update

console.log(products.map(product => product.name === "Laptop" ? {
  ...product,
  price: 1100
} : product))

// C. Delete

console.log(products.filter(product => product.name !== "Tablet" ))

// D. Filter

function productsInStock (product){
  return product.inStock === true
}

console.log(products.filter(productsInStock))

// E. Filter again

console.log(products.filter(product => product.price < 1000))