import { useCallback, useState } from "react"
import SecondComp from "./SecondComp"

const UseCallback = () => {

  const [count, setCount] = useState(0)

  const handleChange = useCallback(()=> {
    console.log('Test Console')
    setCount(item => item + 1)
  }, [])

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleChange}>Submit</button>

      <br />
      <br />
      <SecondComp handleChange={handleChange} />
    </div>
  )
}

export default UseCallback
