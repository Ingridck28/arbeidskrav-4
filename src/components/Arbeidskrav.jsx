import { useEffect, useState } from "react"
import client from "../client"

export default function Arbeidskrav() {
  const [krav, setKrav] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == "arbeidskrav"]`)
      .then((data) => setKrav(data))
  }, [])

  return (
    <section>
      <h2>Arbeidskrav</h2>

      {krav.map((item) => (
        <article key={item._id}>
          <h3>{item.tittel}</h3>
          <p>{item.beskrivelse}</p>
        </article>
      ))}
    </section>
  )
}