import { useEffect } from "react"

const SecondComp = () => {

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
        <div>Scroll karo & Console dekho</div>
    )
}

export default SecondComp