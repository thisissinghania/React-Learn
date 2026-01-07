import { Routes, Route, Link } from "react-router-dom";
import UseStates from "@/use-states/UseStates.jsx";

const App = () => {
  
  return (
      <div>
         <Routes>
          <Route path="/" element={<UseStates />} />
        </Routes>
      </div>
  )
}

export default App


