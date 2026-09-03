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

// 5

const state = {
  items: [{
    id: 1,
    name: "Pen",
    price: 20
  }],
  total: 10
};

const action = {
  type: "add",
  item: {
    id: 1,
    name: "Book",
    price: 20
  }
};

let newTotal = state.total + action.item.price

// 11

const newState = {
  ...state,
  items: [...state.items, action.item],
  total: state.total + action.item.price
}

// Mini-assignment 12 — One small step toward the reducer   

function updateCart(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        items: [...state.items, action.item],
        total: state.total + action.item.price
      }
  }
}

console.log(updateCart(state, action))

// Delete / filter practice

const numbers = [1, 2, 3, 4];
const newNumbers = numbers.filter(number => number !== 3)
console.log(newNumbers)

function numberFilter(numbersArray, numberToFilter) {
  return numbersArray.filter(number => number !== numberToFilter)
}

console.log(numberFilter([3, 4, 6], 4))

const items = [
  { id: 1, name: "Book" },
  { id: 2, name: "Pen" },
  { id: 3, name: "Chair" }
];

const newItems = items.filter(item => item.id !== 2)

const filterItems = (items, id) => {
  return items.filter(item => item.id !== id)
}

console.log(filterItems(items, 1))

// Mini-assignment 3 — Get the item ID from action

const action2 = {
  type: "remove",
  id: 2
};

const newItems2 = items.filter(item => item.id !== action2.id)

// Mini-assignment 5 — Remove from state

const state3 = {
  items: [
    { id: 1, name: "Book" },
    { id: 2, name: "Pen" },
    { id: 3, name: "Chair" }
  ],
  total: 50
};

const action3 = {
  type: "remove",
  id: 2
};

const newState3 = {
  ...state3,
  items: state3.items.filter(item => item.id !== action3.id)
}

console.log(newState3)

