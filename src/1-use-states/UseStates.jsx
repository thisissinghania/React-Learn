import { useState } from 'react'

export const UseStates = () => {
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
    setState({ ...state, loading: state.loading == false ? true : false })
}

  return (
    <div>
        <p>Count {count}</p>
        <p>Time {time}</p>
        <p>Object Data {JSON.stringify(state)}</p>
        <button onClick={calculate}>Click</button>
    </div>
  )
}


const DestructureUseStates = () => {
    const arrVal = useState(0)
    const arrayState = arrVal[0]
    const arrayFunc = arrVal[1]

    function setArrayVal() {
        arrayFunc(item => item + 1)
    }

    return (
        <div>
            <UseStates />

            {/* state destructure */}
            <br />
            --------------------------------------------------------
            <br />

            <p>{arrayState}</p>
            <button onClick={setArrayVal}>Click</button>
        </div>
    )
}

export default DestructureUseStates;