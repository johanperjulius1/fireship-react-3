const button = document.getElementById("button")
button.addEventListener("click", increaseByOne)

let count = 0
console.log(button)

function increaseByOne() {
  console.log("count button was clicked")
  return count = count + 1
}

console.log(count)

// mini assignments.

const fruits = ["apple", "banana"];
const newFruit = "orange";
const newFruits = [...fruits, newFruit]

const items = [
  { id: 1, name: "Book" }
];

// const newItem = {
//   id: 2,
//   name: "Pen"
// };

// const newItems = [...items, newItem]

const action = {
  type: "add",
  item: {
    id: 1,
    name: "Book",
    price: 20
  }
};

console.log(action["type"])

const newItems = [...items, action.item]

const state = {
  items: []
}; 

[...state.items, action.item]

const newState = {
  ...state,
  action.item
};