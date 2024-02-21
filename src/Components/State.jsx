import { useState } from "react"


const State = () => {
const [state,setState] = useState('Sarah')

const handleClick=()=> {
    setState('David')
}

  return (
    <div>
        <h1>{state}</h1>
        <button onClick={handleClick} className="bg-blue-600 text-white px-2 py-1 rounded-md">Click to change name</button>
    </div>
  )
}

export default State