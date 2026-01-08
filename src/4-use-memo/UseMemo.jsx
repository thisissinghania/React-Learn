import { useMemo, useState } from "react"
import SecondComp from "./SecondComp";

const UseMemo = () => {

  const [count, setCount] = useState(0);
  const [childData, setChildData] = useState([
        {
            name: 'pawan',
            age: 26
        }, 
        {
            name: 'suraj',
            age: 26
        }
    ]);

  const userData = useMemo(() => {
    return childData.filter((item) => item?.age > 25)
  }, [childData])


  function changeChildData() {
    setChildData(item => 
        item.map((item, index)=> {
           return index === 0 ? {...item, age: 20 } : item
        })
    )
  }

  return (
    <div>
        <p>{count}</p>
        <button onClick={()=> setCount(item => item + 1)}>Increase Count</button>
        <br />
        <br />
        <SecondComp userData={userData} />
        <br />
        <button onClick={changeChildData}>Change Child Data</button>
    </div>
  )
}

export default UseMemo
