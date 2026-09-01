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
  age: 33
}

console.log("olderPerson: ", olderPerson)

// Exercise 2 — Update a nested object

const user = {
  name: "Johan",
  address: {
    city: "Stockholm",
    street: "Main Street",
    zipcode: "11122"
  }
};

const updatedUser = {
  ...user,
  address: {
    ...user.address,
    zipcode: 12345
  }
}

console.log("Updated user: ", updatedUser)

// Exercise 3 — Computed property name

const property = "email";
const value = "john@example.com";

console.log({ [property]: value })

// Exercise 4 — Make a generic update function

function updatePerson(person, property, value) {
  return {
    ...person,
    [property]: value
  }
}

console.log(updatePerson(person, "name", "Anders"))

// Exercise 5 — Nested generic update

const state = {
  currentStep: 1,
  formData: {
    name: "",
    email: "",
    city: ""
  }
};

// function updateForm(state, property, value) {
//   return {
//     ...state,
//     formData: {
//       ...state.formData,
//       [property]: value
//     }
//   }
// }

function updateForm2(state, property, value) {
  return {
    ...state,
    formData: {
      ...state.formData,
      [property]: value
    }
  }
}

console.log("update form: ", updateForm2(state, "name", "Jacob"))

// Exercise 6 — Actions

const state2 = {
  count: 2
};

// function updateState(state, action) {
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         count: state.count + 1
//       }
//   }
// }

// console.log(updateState(state2, { type: "increment" }));

function updateState2(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      }
  }
}

console.log(updateState2({ count: 8 }, { type: "increment" }))