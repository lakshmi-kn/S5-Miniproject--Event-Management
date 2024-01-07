import React, { useState } from 'react';
import logo from "../../assets/logo.png"

import "./login.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("")

    const navigate = useNavigate();

    const validationCheck = () => {
        // Set initial error values to empty
        setEmailError("")
        setPasswordError("")

        // Check if the user has entered both fields correctly
        if ("" === email) {
            setEmailError("Please enter your email")
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Invalid email")
        }

        if ("" === password) {
            setPasswordError("Please enter a password")
        }

        if (password.length >= 1 && password.length < 7) {
            setPasswordError("Incorrect password or email")
        }
        // Authentication calls will be made here...    
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        validationCheck();


        if (emailError === "" && passwordError === "") {
            const options = {
                method: 'POST',
                url: 'http://localhost:8081/login',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    "Email": email,
                    "Password": password,
                },
            };
            console.log(options)
            axios(options)
                .then((res) => {
                    if (res.data && res.data.user) {
                        navigate('/');
                    }
                    else {
                        alert("No record existed");
                    }
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <div className="loginForm">
            <img src={logo} alt="" width={300} />

            <h1 className="log">Login</h1>
            <form className="" onSubmit={handleSubmit}>
                <label className="label">Email:</label>
                <input type="email"
                    placeholder='Enter regsitered EmailID'
                    value={email} className="details-input"
                    onChange={ev => setEmail(ev.target.value)} />
                {emailError && <p className="error">{emailError}</p>}

                <label className="label">Password:</label>
                <input type="password"
                    placeholder='Enter password'
                    value={password} className="details-input"
                    onChange={ev => setPassword(ev.target.value)} />
                {passwordError && <p className="error">{passwordError}</p>}

                <button type="submit" className="button">Login</button>

            </form>
            <div className="register_option">Not a user? <Link to={'/register'}>Register</Link> yourself.</div>
        </div>
    );
};

export default LoginForm;