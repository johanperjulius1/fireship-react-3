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