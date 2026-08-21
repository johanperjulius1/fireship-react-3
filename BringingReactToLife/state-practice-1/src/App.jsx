import { useState } from "react"


export default function App() {
  const [state, setState] = useState(1)
  console.count()

  let count = 0

  function counter() {
  
    count++
    return count
  }
  const handleClick = () => {
    // setState(state => state + 1)
    console.log(counter())
    console.log(counter())
    console.log(counter())
  }


  return (
    <>
      {count}
      <button onClick={handleClick}>Click</button>
    </>
  )
}