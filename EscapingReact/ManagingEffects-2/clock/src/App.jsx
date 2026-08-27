import { useEffect, useState } from "react";


export default function Clock() {
  const [time, setTime] = useState(null);

  useEffect( () => {
   const id = setInterval(() => {
    setTime(new Date());
    },1000)

    return () => clearInterval(id)
  }, [])

  if (time === null) return null;

  return (
    <section>
      <h1>Current Time</h1>
      <p>{time.toLocaleTimeString()}</p>
    </section>
  );
}
