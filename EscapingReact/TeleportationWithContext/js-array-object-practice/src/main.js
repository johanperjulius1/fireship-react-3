const users = {
  101: "Johan",
  102: "Anna",
  103: "Erik"
};

// Write a function called getUserName that 
// takes an id and returns the corresponding name.

function getUserName (id) {
  if(users[id] === undefined){
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

const getUserInfo = (username, property) => {
  if(users2[username]===undefined){
    return `No user by the username ${username} exist`
  }

  if(users2[username][property]===undefined){
    return `No propert like that exist`
  }
  // return `${users2[username][property]}`
  return `${username}s ${property} is ${users2[username][property]}`
}

// console.log(getUserInfo("anna", "age"))
console.log(getUserInfo("johan", "id"))
// console.log(getUserInfo("johan", "age"))

