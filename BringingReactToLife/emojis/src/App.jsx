import emojis from "./emojis"

const selectRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function App () {
  const selected = selectRandomElement(emojis)

  const handleCopy = (e) => {
    console.log(e.target)
    if (e.target.innerText !== selected.emoji) {
      alert("Wrong emoji")
    } else if (e.timeStamp > 5000) {
      alert("Too slow. Reset and try again.")
    } else {
      alert("🎉 Winner!")
    }
  }

  return (
    <div>
      <h1>{selected.emoji}</h1>
      <p>copy this emoji</p>
      <ul>
        {emojis.map(({ id, emoji}) => {
          return (
            <li name="test name" onCopy={handleCopy} key={id}>
              {emoji}
            </li>
          )
        })}
      </ul>
      <button>Reset</button>
    </div>
  )
}
