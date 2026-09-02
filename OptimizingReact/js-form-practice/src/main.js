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

const person = {
  name: "Johan",
  age: 32,
  city: "Stockholm"
};

const olderPerson = {
  ...person,
  city: "Örebro"
}

console.log("hello from olderPerson: ", olderPerson)

console.log("hello from : ",)


// Exercise 2 — Update a nested object

const user = {
  name: "Johan",
  address: {
    city: "Stockholm",
    street: "Main Street",
    zipcode: "11122"
  }
};

// Create a new object called updatedUser where:

const updatedUser = {
  ...user,
  address: {
    ...user.address,
    zipcode: 70230
  }
}

console.log("hello from updatedUser: ", updatedUser)

// Exercise 3 — Computed property name

const property = "email";
const value = "john@example.com";

console.log("hello from computed Property value: ", { [property]: value })

// Exercise 4 — Make a generic update function

// given const person = {
//   name: "Johan",
//   age: 32,
//   city: "Stockholm"
// };

// Create a function: updatePerson(person, property, value)
// that returns a new object with the specified property changed. For example:
// updatePerson(person, "name", "Alex");

function updatePerson(person, property, value){
  return {
    ...person,
    [property]: value
  }
}

console.log(updatePerson(person, "city", "Västerås"))

// Exercise 5 — Nested generic update

const state = {
  currentStep: 1,
  formData: {
    name: "",
    email: "",
    city: ""
  }
};

function updateForm(state, property, value) {
  return {
    ...state,
    formData : {
      ...state.formData,
      [property]: value
    }
  }
}

console.log(updateForm(state, "name", "Johan"))

// Exercise 6 — Actions

const state2 = {
  count: 5
};

const action = {
  type: "increment"
};

function updateState(state, action) {
  switch(action.type){
    case "increment":
      return {
        ...state,
        count: state.count + 1
      }
    case "decrement":
      return {
        ...state,
        count: state.count - 1
      }
    case "reset":
      return {
        ...state,
        count: 0
      }
  }
}

console.log(updateState(state2, {type: "increment"}))
console.log(updateState(state2, {type: "decrement"}))
console.log(updateState(state2, {type: "reset"}))

