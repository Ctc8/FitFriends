import { useState } from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path = "/HomePage" element={<HomePage/>}/>
            <Route path = "/CreatePage" element={<CreatePage/>}/>
            <Route path = "*" element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
