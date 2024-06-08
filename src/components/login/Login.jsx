import React, { useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';

const Login = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");

    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross} alt="close"/>
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign Up" && <input type="text" placeholder='Enter name' />}
                    <input type="email" placeholder='Enter email'/>
                    <input type="password" placeholder='Enter password'/>
                </div>
                <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {currState === "Login" ? 
                    <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p> : 
                    <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    );
}

export default Login;
