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

// const user = {
//   name: "Johan",
//   address: {
//     city: "Stockholm",
//     street: "Main Street",
//     zipcode: "11122"
//   }
// };

// const updatedUser = {
//   ...user,
//   address: {
//     ...user.address,
//     zipcode: 70230
//   }
// }


// console.log(updatedUser)

// Exercise 3 — Computed property name

// const property = "email";
// const value = "john@example.com";

// console.log({
//   [property]: value
// })

// Exercise 4 — Make a generic update function

function updatePerson(person, property, value) {
  return {
    ...person,
    [property]: value
  }
}

console.log(updatePerson(person, "city", "Örebro"))

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
    formData: {
      ...state.formData,
      [property]: value
    }
  }
}

console.log(updateForm(state, "city", "Skåne"))

// Exercise 6 — Actions

function updateState(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      }
  }
}

console.log(updateState({ count: 4 }, { type: "increment" }))

// Exercise 7 — Form actions

// Now combine Exercises 5 and 6.

// What is meant by "combine 5 and 6"?
// What is 5 about?
// What is 6 about?

function updateState2(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        currentStep: state.currentStep + 1
      }

    case "decrement":
      return {
        ...state,
        currentStep: state.currentStep - 1
      }

    case "change":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.property]: action.value
        }
      }
  }
}

console.log("Hello from update 2", updateState2(state, {
  type: "change",
  property: "city",
  value: "London"
}));

// console.log("Hello from update state 2", updateState2(state, { type: "increment" }))
// console.log("Hello from update state 2", updateState2(state, { type: "decrement" }))



