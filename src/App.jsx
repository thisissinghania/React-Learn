import { Routes, Route } from "react-router-dom";
import UseStates from "@/1-use-states/UseStates.jsx";
import UseReducer from "@/2-use-reducer/UseReducer";
import UseEffectPage from "@/3-use-effect/UseEffectPage";
import UseMemo from "@/4-use-memo/UseMemo";
import UseCallback from "@/5-use-callback/UseCallback";
import UseRefPage from "@/6-use-ref/UseRefPage";

const App = () => {
  
  return (
      <div>
         <Routes>
          <Route path="/" element={<UseStates />} />
          <Route path="/use-reducer" element={<UseReducer />} />
          <Route path="/use-effect" element={<UseEffectPage />} />
          <Route path="/use-callback" element={<UseCallback />} />
          <Route path="/use-memo" element={<UseMemo />} />
          <Route path="/use-ref" element={<UseRefPage />} />
        </Routes>
      </div>
  )
}

export default App


