import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {

    const [emailValue, setEmailValue] = useState("");
    const [userNameValue, setUserNameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");


    const [errorMessage, setErrorMessage] = useState({
        emailError: "",
        userNameError: "",
        passwordError: "",
    })
    //set input values functions
    function emailValueHandler(e) {
        const value = e.target.value;
        setEmailValue(value);
    }

    function userNameValueHandler(e) {
        const value = e.target.value;
        setUserNameValue(value);
    }

    function passwordValueHandler(e) {
        const value = e.target.value;
        setPasswordValue(value);
    }
    //send form data
    function formSubmitHandler(e) {
        e.preventDefault();
        let valid = true;
        const newErrorMessage = { ...errorMessage };

        if (emailValue.trim().length >= 8) {
            newErrorMessage.emailError = ""
        } else {
            // newErrorMessage.emailError = "Email is not valid"
            valid = false;
            setEmailValue("")
        }

        if (userNameValue.trim().length >= 8) {
            newErrorMessage.userNameError = ""
        } else {
            valid = false
            // newErrorMessage.userNameError = "Username is not valid"
            setUserNameValue("")

        }
        if (passwordValue.trim().length >= 8) {
            newErrorMessage.passwordError = ""
        } else {
            valid = false;
            // newErrorMessage.passwordError = "Password is not valid"
            setPasswordValue("");
        }

        setErrorMessage(newErrorMessage);

        if (valid) {
            sendUserData();
        } else {
            console.log("we have error")//test
        }
    }

    async function sendUserData() {
        try {
            const data = {
                email: emailValue,
                userName: userNameValue,
                password: passwordValue,
            }
            const result = await axios.post('http://localhost:5000/api/auth/register', data);
            
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form className='w-[85%] sm:w-[450px]  bg-[rgba(0,0,0,.5)] rounded-xl py-11 text-center' action="" onSubmit={formSubmitHandler}>
            <div className="container w-4/5 m-auto">
                <h1 className='py-5 text-3xl font-bold mb-4'>Register</h1>
                <div className='input-items text-gray-400 mb-5 text-start'>
                    <div className='h-20'>
                        <input
                            className='outline-none bg-transparent border-b-2 border-b-gray-300 w-full px-2 py-2 mb-2'
                            placeholder='Email *'
                            type="text"
                            maxLength={50}
                            value={emailValue}
                            onChange={emailValueHandler}
                        />
                        {errorMessage.emailError && <span className='text-red-500 text-sm'>{errorMessage.emailError}</span>}
                    </div>
                    <div className='h-20'>
                        <input
                            className='outline-none bg-transparent border-b-2 border-b-gray-300 w-full px-2 py-2 mb-2'
                            placeholder='Username *'
                            type="text"
                            maxLength={18}
                            value={userNameValue}
                            onChange={userNameValueHandler}
                        />
                        {errorMessage.userNameError && <span className='text-red-500 text-sm'>{errorMessage.userNameError}</span>}
                    </div>
                    <div className='h-20'>
                        <input
                            className='outline-none bg-transparent border-b-2 border-b-gray-300 w-full px-2 py-2 mb-2'
                            placeholder='Password *'
                            type="password"
                            maxLength={18}
                            value={passwordValue}
                            onChange={passwordValueHandler}
                        />
                        {errorMessage.passwordError && <span className='text-red-500 text-sm'>{errorMessage.passwordError}</span>}
                    </div>
                </div>
                <input
                    className='w-2/5 text-[#289bb8] border-l-4 border-l-[#289bb8] h-10 cursor-pointer bg-[rgba(0,0,0,.1)] mb-7 hover:bg-[rgba(0,0,0,.3)] transition-all'
                    type="submit"
                    placeholder='Register'
                /><br />
                <div className='text-sm font-semibold space-x-2'>
                    <span className='text-gray-300'>Already registred? </span><Link className='text-[#289bb8]' to=""> Login</Link>
                </div>
            </div>
        </form>
    )
}

export default Register;