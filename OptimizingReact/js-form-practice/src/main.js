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
    zipcode: 70230
  }
}


console.log(updatedUser)

// Exercise 3 — Computed property name

const property = "email";
const value = "john@example.com";

console.log({
  [property]: value
})