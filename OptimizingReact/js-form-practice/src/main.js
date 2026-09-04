
const action = {
  type: "remove",
  id: 2
};

// Mini-assignment 6

const state = {
  items: [
    { id: 1, name: "Book", price: 20, quantity: 1 },
    { id: 2, name: "Pen", price: 10, quantity: 2 },
    { id: 3, name: "Chair", price: 30, quantity: 1 }
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

const action2 = {
  type: "add",
  item: { id: 4, name: "Sofa", price: 30, quantity: 1 }
};

const newItems2 = [...state.items, action2.item]
const newTotal = state.total + action2.item.price

const newState2 = {
  ...state,
  items: [...state.items, action2.item],
  total: state.total + action2.item.price
}

function updateCart(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        items: [...state.items, action.item],
        total: state.total + action.item.price
      };

    case "remove":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
        total:
          state.total -
          state.items.find(item => item.id === action.id).price
      };

    case "update": {
      const updatedItems = state.items.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            quantity: action.quantity
          };
        }

        return item;
      });

      const newTotal = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        ...state,
        items: updatedItems,
        total: newTotal
      };
    }
  }
}

const item = {
  id: 2,
  name: "Pen",
  price: 10,
  quantity: 2
};

const updatedItem = {
  ...item,
  quantity: 5
}

// Mini-assignment 2
// Create a new array where every item has its quantity increased by 1.

const items = [
  { id: 1, name: "Book", price: 20, quantity: 1 },
  { id: 2, name: "Pen", price: 10, quantity: 2 },
  { id: 3, name: "Chair", price: 30, quantity: 1 }
];

console.log(items.map(item => {
  return {
    ...item,
    quantity: item.quantity + 1
  }
}))

const action3 = {
  type: "update",
  id: 2,
  quantity: 5
};

console.log(items.map(item => {
  if (item.id === action3.id) {
    return {
      ...item,
      quantity: action3.quantity
    }
  }
  return item;
}))

// Mini-assignment 4
// Now let's make the exact same logic, but put it into a variable:

const updatedItems = items.map(item => {
  if (item.id === action3.id) {
    return {
      ...item,
      quantity: action3.quantity
    }
  }
  return item;
})


// Mini-assignment 5

const newTotal = updatedItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

const newState5 = {
  ...state,
  items: updatedItems,
  total: newTotal
}