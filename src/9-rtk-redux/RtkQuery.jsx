import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmount, increment } from "./features/counterSlice";
import { useState } from "react";

const RtkQuery = () => {
    const dispatch = useDispatch()
    const count = useSelector((item)=> item.counter.value)
    const [num, setNum] = useState()

    return (
        <>
        <p>{count}</p>

        <button onClick={()=> {
            dispatch(increment())
        }}>
            Increase
        </button>

        <button onClick={()=> {
            dispatch(decrement())
        }}>
            Decrease
        </button>

        <input type="number" value={num} onChange={(e)=> setNum(Number(e.target.value))} />

        <button onClick={()=> {
            dispatch(increaseByAmount(num))
        }}>
            Double
        </button>
        </>
    )
}
export default RtkQuery;