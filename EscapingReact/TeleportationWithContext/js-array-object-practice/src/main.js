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

getProduct2("price",  700)


// Exercise 5 — Array of objects + function

function getProductName(id){
  const foundProduct = products.find(product => product.id === id)
   console.log(foundProduct.name)
}

getProductName(1)

