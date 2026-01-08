import { Routes, Route, Link } from "react-router-dom";
import UseStates from "@/1-use-states/UseStates.jsx";
import UseReducer from "@/2-use-reducer/UseReducer";
import UseCallback from "@/3-use-callback/UseCallback";

const App = () => {
  
  return (
      <div>
         <Routes>
          <Route path="/" element={<UseStates />} />
          <Route path="/use-reducer" element={<UseReducer />} />
          <Route path="/use-callback" element={<UseCallback />} />
        </Routes>
      </div>
  )
}

export default App


