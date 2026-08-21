import { useState } from "react"


export default function App() {
  const [state, setState] = useState(1)
  console.count()

  const handleClick = () => {
    setState(state => state + 1)
  }

  return (
    <>
      {state}
      <button onClick={handleClick}>Click</button>
    </>
  )
}