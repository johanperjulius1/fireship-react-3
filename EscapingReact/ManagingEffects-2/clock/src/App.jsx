import { useEffect, useState } from "react";


export default function Clock() {
  const [time, setTime] = useState(Date.now);

  useEffect( () => {
    id = setInterval(() => {
      setTime(time => time + 1)
    },1000)

    return () => clearInterval(id)
  }, [])

  return (
    <section>
      <h1>Current Time</h1>
      <p>{time.toLocaleTimeString()}</p>
    </section>
  );
}
