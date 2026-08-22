import { useState } from "react"

export default function App() {

  const stateArray = React.useState("initial state value")
  const state = stateArray[0]
  const setState = stateArray[1]

  // equivalent to:

const [state, setState] = useState("initial state value")

  return (
    <></>
  )
}