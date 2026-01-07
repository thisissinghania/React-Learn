import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(10)

  const [state, setState] = useState({
    loading: false,
    data: null,
    error: null
  });

  const calculate = () => {
    setCount(prev => prev + 1)
    setTime(prev => prev + 1)
    setState({ ...state, loading: true })
  }

  return (
      <div>
        <p>Count {count}</p>
        <p>Time {time}</p>
        <p>Last Default {JSON.stringify(state)}</p>
        <button onClick={calculate}>Click</button>
      </div>
  )
}

export default App


