import React, { useState } from 'react';

// import axios from 'axios';

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
    async function formSubmitHandler(e) {
        e.preventDefault();
        try {
            const newErrorMessage = { ...errorMessage };
            const data = {
                email: emailValue,
                userName: userNameValue,
                password: passwordValue,
            }
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            // console.log(result.data)

            checkErrorStatus(result, newErrorMessage)

            setErrorMessage(newErrorMessage)

        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    //This function for set errors message
    function checkErrorStatus(result, newErrorMessage) {
        if (result.status === 400) {
            const emailCheck = result.data.some(item => item.path === "email");
            const userNameCheck = result.data.some(item => item.path === "userName");
            const passwordCheck = result.data.some(item => item.path === "password");
            if (emailCheck) {
                const findEmail = result.data.find(item => item.path === "email");
                newErrorMessage.emailError = findEmail.message
            } else {
                newErrorMessage.emailError = "";
            }
            if (userNameCheck) {
                const findUserName = result.data.find(item => item.path === "userName");
                newErrorMessage.userNameError = findUserName.message
            } else {
                newErrorMessage.userNameError = "";
            }
            if (passwordCheck) {
                const findPassword = result.data.find(item => item.path === "password");
                newErrorMessage.passwordError = findPassword.message
            } else {
                newErrorMessage.passwordError = "";
            }
        }

        if (result.status === 200) {
            console.log("Register Successfuly")
            newErrorMessage.emailError = "";
            newErrorMessage.userNameError = "";
            newErrorMessage.passwordError = "";
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
                    <span className='text-gray-300'>Already registred? </span><a href='#' className='text-[#289bb8]'> Login</a>
                </div>
            </div>
        </form>
    )
}

export default Register;