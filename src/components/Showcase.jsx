import { useState } from "react"

function Showcase() {
    const [name, setName] = useState('Billy')

  return (
    <div>Hello {name}</div>
  )
}

export default Showcase