import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmount, increment } from "./features/counterSlice";

const RtkQuery = () => {
    const dispatch = useDispatch()
    const count = useSelector((state)=> state.counter.value)

    return (
        <>
        <p>{count}</p>

        <button onClick={()=> {
            dispatch(increment())
        }}>Increase</button>

        <button onClick={()=> {
            dispatch(decrement())
        }}>Decrease</button>

        
        <button onClick={()=> {
            dispatch(increaseByAmount(10))
        }}>double</button>
        </>
    )
}
export default RtkQuery;