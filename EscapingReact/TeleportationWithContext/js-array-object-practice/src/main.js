const users = {
  101: "Johan",
  102: "Anna",
  103: "Erik"
};

// Write a function called getUserName that 
// takes an id and returns the corresponding name.

function getUserName(id) {
  if (users[id] === undefined) {
    return `no user with id ${id} exist`
  }
  return `The name of the user with id ${id} is ${users[id]}`
}

// console.log(getUserName(102))
// console.log(getUserName(105))

// 2 — Object inside object

const users2 = {
  johan: {
    age: 32,
    city: "Stockholm"
  },
  anna: {
    age: 28,
    city: "Gothenburg"
  }
};

// Create: getUserInfo(username, property) so that
// getUserInfo("johan", "age");
// 32

// 3

const getUserInfo = (username, property) => {
  if (users2[username] === undefined) {
    return `No user by the username ${username} exist`
  }

  if (users2[username][property] === undefined) {
    return `No propert like that exist`
  }
  // return `${users2[username][property]}`
  return `${username}s ${property} is ${users2[username][property]}`
}

// console.log(getUserInfo("anna", "age"))
console.log(getUserInfo("johan", "id"))
// console.log(getUserInfo("johan", "age"))

// Exercise 4 — Array of objects

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 }
];

function getProduct(name) {
  console.log(products.find(product => product.name === name))
}

getProduct("Tablet")

function getProduct2(propertyKey, value) {
  return console.log(products.find(product => product[propertyKey] === value))
}

getProduct2("price", 700)


// Exercise 5 — Array of objects + function

function getProductName(id) {
  const foundProduct = products.find(product => product.id === id)
  console.log(foundProduct.name)
}

getProductName(1)

// Exercise 6 — Object containing arrays

const categories = {
  computers: ["Laptop", "Desktop", "Monitor"],
  phones: ["iPhone", "Pixel", "Galaxy"],
  gaming: ["PS5", "Xbox", "Switch"]
};

// create getCategory(category)

// getCategory("phones");
// ["iPhone", "Pixel", "Galaxy"]

function getCategory(category) {
  return categories[category]
}

console.log(getCategory("computers"))

// Exercise 7 — Object → array → object

// create getDeveloper(department, name) so getDeveloper("frontend", "Anna");

// returns { name: "Anna", years: 5 } 

const departments = {
  frontend: [
    { name: "Johan", years: 3 },
    { name: "Anna", years: 5 }
  ],
  backend: [
    { name: "Erik", years: 4 },
    { name: "Lisa", years: 2 }
  ]
};

function getDeveloper(department, name) {
  return departments[department].find(developer => developer.name === name)
}

console.log(getDeveloper("backend", "Lisa"))

// Exercise 8 — This is basically your translation problem

// Now recreate the pattern from your React assignment without React.

const translations = {
  en: {
    hello: "Hello!",
    goodbye: "Goodbye!"
  },
  es: {
    hello: "¡Hola!",
    goodbye: "¡Adiós!"
  },
  fr: {
    hello: "Bonjour !",
    goodbye: "Au revoir !"
  }
};

//write translate(language, key)

function translate(language, phrase) {
  return translations[language]?.[phrase] ?? phrase
}



console.log(translate("es", "hello"))

// Exercise 9

function getTranslations(language){
  return translations[language]
}
console.log(getTranslations("en"))

const english = getTranslations("en")
console.log(english.hello)

