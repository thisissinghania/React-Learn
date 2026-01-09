import { Routes, Route } from "react-router-dom";
import UseStates from "@/1-use-states/UseStates.jsx";
import UseReducer from "@/2-use-reducer/UseReducer";
import UseCallback from "@/3-use-callback/UseCallback";
import UseMemo from "@/4-use-memo/UseMemo";
import UseEffect from "@/5-use-effect/UseEffect";

const App = () => {
  
  return (
      <div>
         <Routes>
          <Route path="/" element={<UseStates />} />
          <Route path="/use-reducer" element={<UseReducer />} />
          <Route path="/use-callback" element={<UseCallback />} />
          <Route path="/use-memo" element={<UseMemo />} />
          <Route path="/use-effect" element={<UseEffect />} />
        </Routes>
      </div>
  )
}

export default App


