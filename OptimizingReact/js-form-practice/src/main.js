const button = document.getElementById("button")
button.addEventListener("click", increaseByOne)

let count = 0
console.log(button)

function increaseByOne() {
  console.log("count button was clicked")
  return count = count + 1
}

console.log(count)

// --------------------------------------

// exercise 1

const book = {
  title: "Dune",
  author: "Frank Herbert",
  year: 1965
};

function updateBook(book, property, value) {
  return {
    ...book,
    [property]: value
  }
}

console.log(updateBook(book, "year", 1970))

// Exercise 2 — Nested object

const user = {
  name: "Anna",
  preferences: {
    language: "English",
    theme: "light"
  }
};

function updatePreference(user, property, value) {
  return {
    ...user,
    preferences: {
      ...user.preferences,
      [property]: value
    }
  }
}

console.log(updatePreference(user, "theme", "dark"));

// Exercise 3 — Computed property

const property = "color";
const value = "blue";

console.log({
  [property]: value
})

// Exercise 4 — Array of objects

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 }
];

// const updatePrice = (products, id, newPrice) => {
//   return products.map(product => {
//     if(product.id === id){
//       return {
//         ...product,
//         price: newPrice
//       }
//     }
//     return product
//   })
// }

const updatePrice = (products, id, newPrice) => (products.map(product => product.id === id ? {
  ...product,
  price: newPrice
} : product))

console.log("hello from updated price ", updatePrice(products, 2, 450))

// Exercise 5 — Actions

// Now introduce action.

// Given:

const initialState = {
  count: 0
};

function updateCounter(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      }
    case "decrement":
      return {
        count: state.count - 1
      }
    case "reset":
      return {
        count: 0
      }
  }
}

console.log(updateCounter(initialState, { type: "increment" }))
console.log(updateCounter({ count: 5 }, { type: "increment" }))
console.log(updateCounter({ count: 10 }, { type: "decrement" }))
console.log(updateCounter({ count: 10 }, { type: "reset" }))

// Exercise 6 — Nested state + actions

const initialState2 = {
  user: {
    name: "",
    email: ""
  },
  loggedIn: false
};

const updateUser = (state, action) => {
  switch (action.type) {
    case "change":
      return {
        ...state,
        user: {
          ...state.user,
          [action.property]: action.value
        }
      }
    case "login":
      return {
        ...state,
        loggedIn: true
      }
    case "logout":
      return {
        ...state,
        loggedIn: false
      }
  }
}

console.log(updateUser(initialState2, {
  type: "change",
  property: "name",
  value: "Johan"
}))
console.log(updateUser(initialState2, { type: "login" }))
// console.log(updateUser(initialState2, { type: "logout" }))