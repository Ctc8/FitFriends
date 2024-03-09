import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider, db } from "../../firebase-config";
import { addDoc, getDocs, collection, query, where } from "firebase/firestore";

import "./styles/Login.css";

import Logo from "../assets";

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const userListRef = collection(db, "Users");

  const addUser = async (user) => {
    await addDoc(userListRef, {
      uid: user.uid,
      username: user.displayName,
      email: user.email,
    });
  };

  const SignIn = () => {
    signInWithPopup(auth, provider).then(async (result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);

      const postsID = query(
        collection(db, "Users"),
        where("uid", "==", result.user.uid)
      );

      const snap = await getDocs(postsID);

      if (snap.docs.length == 0) {
        addUser(result.user);
      } else {
        console.log("Welcome back " + result.user.displayName);
      }

      navigate("/");
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-prompt-container">
        <div className="auth-signup-text">Sign up</div>
        <div className="auth-welcome-container">
          <div>Welcome to Fit Friends!</div>
          <div>Click below to sign in or sign up!</div>
        </div>
      </div>
      <button onClick={SignIn} className="auth-login-button">
        Sign in
      </button>
      <img src={Logo} alt="logo" className="auth-logo" />
    </div>
  );
};

export default Login;
