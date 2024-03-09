import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import CommunityPage from "./pages/CommunityPage";
import Login from "./pages/Login";
import { useEffect, useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [currentUser, setCurrentUser] = useState({});


  useEffect(() => {
    // Update current user data
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (isAuth) {
        console.log(currentUser.displayName);
      }
    });
  });

  const LogOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <BrowserRouter>
      {isAuth && (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/CreatePage">Create</Link>
          <Link to="/Community">Community</Link>
          <button onClick={LogOut}>Logout</button>
        </nav>
      )}
      <Routes>
        <Route path="/CreatePage" element={<CreatePage />} />
        <Route path="/Community" element={<CommunityPage />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
