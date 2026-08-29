const users = {
  101: "Johan",
  102: "Anna",
  103: "Erik"
};

// Write a function called getUserName that 
// takes an id and returns the corresponding name.

function getUserName (id) {
  if(users[id] === undefined){
    return ("user does not exist")
  }
  return `The name of the user with id ${id} is ${users[id]}`
}

console.log(getUserName(102))
console.log(getUserName(105))

