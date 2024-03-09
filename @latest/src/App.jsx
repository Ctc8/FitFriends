import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import CommunityPage from "./pages/CommunityPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/CreatePage">Create</Link>
        <Link to="/Community">Community</Link>
        <button>Logout</button>
      </nav>
      <Routes>
        <Route path="/CreatePage" element={<CreatePage />} />
        <Route path="/Community" element={<CommunityPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
