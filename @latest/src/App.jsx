import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase-config"
import { useEffect, useState } from "react"

import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import CommunityPage from "./pages/CommunityPage"
import Login from "./pages/Login"
import EditPage from "./pages/EditPage"

import HomeIcon from "@mui/icons-material/Home"
import CreateIcon from "@mui/icons-material/Create"
import PeopleIcon from "@mui/icons-material/People"
import LogoutIcon from "@mui/icons-material/Logout"
import Divider from "@mui/material/Divider"
import EditLocationIcon from "@mui/icons-material/EditLocation"

import "./App.css"

function App() {
	const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
	const [currentUser, setCurrentUser] = useState({})

	useEffect(() => {
		// Update current user data
		onAuthStateChanged(auth, user => {
			setCurrentUser(user)
			if (isAuth) {
				console.log(currentUser.displayName)
			}
		})
	})

	const LogOut = () => {
		signOut(auth).then(() => {
			localStorage.clear()
			setIsAuth(false)
			window.location.pathname = "/login"
		})
	}

	return (
		<BrowserRouter>
			{isAuth && (
				<div className="navbar-container">
					<div className="navbar-top">
						<div className="currentUser-info-container">
							<img
								className="navbar-profile-picture"
								src={currentUser.photoURL}
								alt="profilePic"
							/>
							<div className="username-email-container">
								<div className="navbar-username">{currentUser.displayName}</div>
								<div className="navbar-email">{currentUser.email}</div>
							</div>
						</div>
						<nav className="navbar-links">
							<Link to="/" className="navbar-clickable">
								<HomeIcon />
								<div>Home</div>
							</Link>
							<Link to="/CreatePage" className="navbar-clickable">
								<CreateIcon />
								<div>Create</div>
							</Link>
							<Link to="/Community" className="navbar-clickable">
								<PeopleIcon />
								<div>Community</div>
							</Link>
							<Link to="/EditPage" className="navbar-clickable">
								<EditLocationIcon />
								<div>Edit</div>
							</Link>
						</nav>
					</div>
					<div className="navbar-bottom">
						<Divider />
						<button onClick={LogOut} className="logout-button">
							<LogoutIcon />
							<div className="logout-button-text">Logout</div>
						</button>
					</div>
				</div>
			)}
			<div className="pages">
				<Routes>
					<Route path="/CreatePage" element={<CreatePage />} />
					<Route path="/Community" element={<CommunityPage />} />
					<Route path="/EditPage" element={<EditPage />} />
					<Route path="/" element={<HomePage isAuth={isAuth} />} />
				</Routes>
			</div>
			<Routes>
				<Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
