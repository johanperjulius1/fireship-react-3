const button = document.getElementById("button")
button.addEventListener("click", increaseByOne)

let count = 0
console.log(button)

function increaseByOne() {
  console.log("count button was clicked")
  return count = count + 1
}

console.log(count)

// mini assignments. 1

const fruits = ["apple", "banana"]

const newFruit = "orange"
const newFruits = [...fruits, newFruit]

// 2

const person = {
  name: "Johan",
  age: 32
}

const newAge = 33

const olderPerson = {
  ...person,
  age: newAge
}

// 3

const items = [
  {
    id: 1,
    name: "book",
    price: 100
  }
]

const newItem = {
  id: 2,
  name: "pen",
  price: 200
}

const moreItems = [...items, newItem]

// 4

const action = {
  type: "add",
  item: {
    id: 2,
    name: "Pen",
    price: 200
  }
};

action.item

// 5

const newItems = [...items, action.item ]