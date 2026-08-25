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

// Exercise 12 — Update a different property: name

console.log(users.map(user => {
  if (user.name === "Lisa") {
    return {
      ...user,
      name: "Elizabeth"
    }
  }
  return user;
}))

// 13 Create user

console.log([...users, { id: 4, name: "Marcus", age: 35 }])

// Exercise 14 — DELETE

console.log(users.filter(user => user.id !== 2))

// Exercise 15 — UPDATE

console.log(users.map(user => {
  if (user.id === 3) {
    return {
      ...user,
      age: 29
    }
  }
  return user;
}))

// Exercise 16 — FILTER

const filteredArr = users.filter(user => user.age >= 30)
console.log(filteredArr)

// Exercise 17

const todos = [
  { id: 1, text: "Learn arrays", completed: true },
  { id: 2, text: "Learn objects", completed: false },
  { id: 3, text: "Learn React", completed: false }
]

console.log([...todos, {
  id: 4,
  text: "Practice useReducer",
  completed: false
}])

// Exercise 18 — Complete a todo

const updatedTodo = todos.map(todo => {
  if (todo.id === 2) {
    return {
      ...todo,
      completed: true,
    }
  }
  return todo;
})

console.log(updatedTodo)

// Exercise 19 — Delete a todo

console.log(todos.filter(todo => todo.id !== 1))

// Exercise 20 — Show only incomplete todos

console.log(todos.filter(todo => todo.completed !== true))

// ⭐ Final challenge

  let products = [
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Phone", price: 800, inStock: true },
    { id: 3, name: "Tablet", price: 500, inStock: false }
  ];

// A. Add
console.log([...products, { id: 4, name: "Monitor", price: 300, inStock: true }])

// B. Update

console.log(products.map(product => {
  if (product.name === "Laptop") {
    return {
      ...product,
      price: 1100
    }
  }
  return product;
}))

// C. Delete

console.log(products.filter(product => product.name !== "Tablet"))

// D. Filter

const productsInStock = products.filter(product => product.inStock === true)
console.log(productsInStock)

const cheapInStock = products.filter(product => product.inStock === true && product.price < 1000)
console.log(cheapInStock)