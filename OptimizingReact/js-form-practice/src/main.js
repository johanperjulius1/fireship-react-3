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

const book = {
  title: "Dune",
  author: "Frank Herbert",
  year: 1965
};

function updateBook(book, property, value) {
  return {
    ...book,
    [property]: value
  }
}

console.log(updateBook(book, "year", 1970))

// Exercise 2 — Nested object

const user = {
  name: "Anna",
  preferences: {
    language: "English",
    theme: "light"
  }
};

function updatePreference(user, property, value) {
  return {
    ...user,
    preferences: {
      ...user.preferences,
      [property]: value
    }
  }
}

console.log(updatePreference(user, "theme", "dark"));

// Exercise 3 — Computed property

const property = "color";
const value = "blue";

console.log({
  [property]: value
})