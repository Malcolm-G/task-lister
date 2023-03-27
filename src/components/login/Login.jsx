import React,{ useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../stylesheets/Login.css';
// import image from "../../images/download.png"
import { BsPersonCircle } from 'react-icons/bs';
import { UserContext } from "../UserDataProvider";
// import image from "../../random-acts-kindness-day.png";

function Login({users,setIsLoggedIn,setCurrentUser}){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate();
    const [user,setUser,API] = useContext(UserContext)

    // const input = {email:email, password:password}

    function loginClicked(e){
        e.preventDefault()
        if (username){
            setUser(user=>user = {username:username})
            localStorage.setItem('user', JSON.stringify(user))
            navigate('/')
        }
        else{
            window.alert("Input a username")
        }
    }

    return(
        <form
        className="log-form"
        onSubmit={(e)=>loginClicked(e)}
         method="#">
            <div className="log-imgcontainer">
                {/* <img src={image} alt="Avatar" className="log-avatar"/> */}
                <BsPersonCircle size={140} />
            </div>

            <div className="container login-container bg-body-tertiary">
                <label htmlFor="username"><b>Username</b></label>
                <input
                onChange={(e)=>setUsername(e.target.value)}
                value={username}
                type="text" placeholder="Enter Username" name="email" required/>

                <label htmlFor="psw"><b>Password</b></label>
                <input
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                type="password" placeholder="Enter Password" name="psw" required/>
                
                <button type="submit">Login</button>
                {/* <label>
                <input type="checkbox" checked="" name="remember"/> Remember me
                </label> */}
            </div>

            <div className="container  d-flex" style={{backgroundColor:"#f1f1f1"}}>
                <Link type="login-button" className="btn log-cancelbtn mx-auto" to="/signup" >Register?</Link>
                {/* <span className="psw">Forgot <a href="#">password?</a></span> */}
            </div>
        </form>
    )
}

export default Login;