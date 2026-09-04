
const action = {
  type: "remove",
  id: 2
};


console.log(removeItem(items, 2));

// Mini-assignment 6

const state = {
  items: [
    { id: 1, name: "Book", price: 20 },
    { id: 2, name: "Pen", price: 10 },
    { id: 3, name: "Chair", price: 30 }
  ],
  total: 60
};


const removeItem = (items, id) => {
  return items.filter(item => item.id !== id)
}

const newItems = removeItem(state.items, action.id)


const itemToRemove = state.items.find(item => item.id === action.id);
const priceToRemove = itemToRemove.price;

const newState = {
  ...state,
  items: newItems,
  total: state.total - priceToRemove
}


// mini assignments for add case

const action = {
  type: "add",
  item: { id: 4, name: "Sofa", price: 30 }
};

const newItems2 = [...state.items, action.item]
const newTotal = state.total + action.item.price

const newState2 = {
  ...state,
  items: [...state.items, action.item],
  total: state.total + action.item.price
}

function updateCart(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        items: [...state.items, action.item],
        total: state.total + action.item.price
      }

    case "remove":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
        total: state.total - state.items.find(item => item.id === action.id).price
      }
  }
}