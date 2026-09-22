// 1 
const runFunction = (callback) => {
  return callback()
}

const sayHello = () => {
  return "Hello!";
};

console.log(runFunction(sayHello))

// 2. callback with argument

const calculate = (a, b, callback) => {
  return callback(a, b)
}


const add = (a, b) => {
  return a + b
}

console.log(calculate(1, 2, add))

console.log(
  calculate(1, 2, (a, b) => {
    return a * b
  })
)

// 3. Function that transforms an array

const numbers = [1, 2, 3, 4];

function transformArray(arr, callback) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result = [...result, (callback(arr[i]))]
  }
  return result
}

const double = (number) => {
  return number * 2;
};

console.log(transformArray(numbers, double));

// const double = (numbers) => {
//   return numbers.map(n => n * 2);
// };

// 1. Deterministic

// A deterministic function gives you the same result when given the same inputs.

// 2. Pure
// Purity is about whether the function affects the outside world.


// A pure function has two important properties:

// Same inputs → same output
// AND
// No side effects

// Immutability is about whether existing data is changed.

function filterArray(arr, callback) {
  // Takes an array.
  // Takes a callback.
  // Keeps an item if the callback returns true.
  // Returns a new array.
  let updatedArr = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      updatedArr = [...updatedArr, arr[i]]
    }
  }
  return updatedArr
}

const isEven = (number) => {
  return number % 2 === 0;
};

console.log(filterArray(numbers, isEven));

// 5. Callback that works with objects

const users = [
  { name: "Anna", age: 25 },
  { name: "John", age: 17 },
  { name: "Maria", age: 32 }
];

// Create a function called findUsers that:

// Takes the users array.
// Takes a callback.
// Returns a new array containing only the users for whom the callback returns true.

const findUsers = (arr, callback) => {
  let filteredUsers = []
  for(let i = 0; i < arr.length; i ++){
    if(callback(arr[i])){
      filteredUsers = [...filteredUsers, arr[i]]
    }
  }
  return filteredUsers
}

const isAdult = (user) => {
  if (user.age >= 18){
    return true
  }
}

// console.log(findUsers(users, isAdult))
console.log(findUsers(users, (user) => {
  if(user.age >= 18){
    return true
  }
}))
