import { useContext } from "react"
import AuthContext from '@/8-use-context/context/AuthContext.jsx';

const UseContextPage = () => {
  const {theme, changeTheme} = useContext(AuthContext)

  return (
    <div>
      {theme}
      <button onClick={changeTheme}>Hey</button>
    </div>
  )
}

export default UseContextPage
