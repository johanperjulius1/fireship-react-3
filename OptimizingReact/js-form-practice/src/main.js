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



// console.log("Hello from update state 2", updateState2(state, { type: "increment" }))
// console.log("Hello from update state 2", updateState2(state, { type: "decrement" }))



