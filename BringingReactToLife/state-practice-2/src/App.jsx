import { useState } from "react"

export default function App() {

  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)


    setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
  }

//   const stateArray = React.useState("initial state value")
//   const state = stateArray[0]
//   const setState = stateArray[1]

//   // equivalent to:

// const [state, setState] = useState("initial state value")


  return (
    <>
    {count}
     <button onClick={handleClick}>Add 1</button>
    </>
  )
}