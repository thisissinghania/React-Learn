import { useState } from "react"
import SecondComp from "./SecondComp"

const UseEffect = () => {
    const [count, setCount] = useState(0)
    function testRerender() {
        setCount((item) => item + 1)
    }   

    return (
        <div style={{ height: "200vh", padding: "20px" }}>
            <p>{count}</p>
            <button onClick={testRerender}>Click me</button>
            <br />
            <br />
            <SecondComp />
        </div>
    )
}

export default UseEffect