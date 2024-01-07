import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo.png"

import "./login.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("")

    const validationCheck = () => {
        // Set initial error values to empty
        setEmailError("")
        setPasswordError("")

        // Check if the user has entered both fields correctly
        if ("" === email) {
            setEmailError("Please enter your email")
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email")
        }

        if ("" === password) {
            setPasswordError("Please enter a password")
        }

        if (password.length >= 1 && password.length < 7) {
            setPasswordError("The password must be 8 characters or longer")
        }
        // Authentication calls will be made here...    
    }

    useEffect(() => {
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
        }
    }, [password, confirmPassword]);

    const handleSubmit21 = (event) => {
        event.preventDefault();

        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        };

        fetch('/login', fetchOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    // Successful login
                    console.log('Login successful!');
                    // Redirect to homepage or other protected page
                } else {
                    // Failed login
                    setErrorMessage(data.message);
                }
            });
    };

    const navigate = useNavigate();

    const options = {
        method: 'post',
        url: 'http://localhost:8081/register',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            FirstName: fname,
            LastName: lname,
            PhoneNo: phone,
            Email: email,
            Password: password,
        },
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validationCheck();

        if (emailError === "" && passwordError === "") {
            axios(options)
                .then((res) => {
                    navigate('/login');
                })
                .catch((err) => console.log(err));
        }
    };


    return (
        <div className="registerForm">
            <img src={logo} alt="" width={300} />

            <h1 className="reg">Register</h1>
            <form className="" onSubmit={handleSubmit}>
                <label className="label">First Name:</label>
                <input type="fname" value={fname} className="details-input" onChange={(event) => setFname(event.target.value)} />

                <label className="label">Last Name:</label>
                <input type="lname" value={lname} className="details-input" onChange={(event) => setLname(event.target.value)} />

                <label className="label">Phone number:</label>
                <input type="phone" value={phone} className="details-input" onChange={(event) => setPhone(event.target.value)} />

                <label className="label">Email:</label>
                <input type="email" value={email} className="details-input" onChange={(event) => setEmail(event.target.value)} />
                {emailError && <p className="error">{emailError}</p>}

                <label className="label">Password:</label>
                <input type="password" value={password} className="details-input" onChange={(event) => setPassword(event.target.value)} />

                <label className="label">Confirm Password:</label>
                <input type="password" value={confirmPassword} className="details-input" onChange={(event) => setConfirmPassword(event.target.value)} />
                {passwordError && <p className="error">{passwordError}</p>}

                <button type="submit" className="button">Register</button>

                {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
        </div>
    )
}