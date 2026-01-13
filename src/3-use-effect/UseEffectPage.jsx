import { useEffect, useState } from "react"

const UseEffectPage = () => {
    useEffect(()=> {
        const handleScroll = () => {
            console.log('Scrolling...')
        }
        
        console.log("Effect mounted");
        addEventListener('scroll', handleScroll)

        return ()=> {
            console.log("Cleanup called (listener removed)")
            removeEventListener('scroll', handleScroll)
        }

    }, [])  

    return (
        <div style={{ height: '200vh'}}>
            Scroll karo & Console dekho

            <SecondExample />
        </div>
    )
}
export default UseEffectPage



export const SecondExample = () => {
    const [count, setCount] = useState(0)

    function updateCount() {
        setCount(item => item + 1)
    }

    useEffect(() => {
        console.log('Count is increasing.....')
    }, [count])
    
    return (
        <div>
            <p>{count}</p>
            <button onClick={updateCount}>Click and check console</button>
        </div>
    )
}