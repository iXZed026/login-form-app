import React, { useState } from 'react';
import SuccessModal from '../SuccessModal';

function Login({ setIsLogin }) {
    //States
    const [input, setInput] = useState({
        emailValue: "",
        passwordValue: "",
    })

    const [errorMessage, setErrorMessage] = useState({
        emailError: "",
        notFoundError: "",
        passwordError: "",
    });
    const [msg, setMsg] = useState("")

    let newValues = { ...input }

    //Set Values
    function setValuesHandler(e) {
        const { value, type } = e.target;

        if (type === "text") {
            newValues.emailValue = value;
        } else {
            newValues.passwordValue = value;
        }
        setInput(newValues)

    }


    async function formSubmitHandler(e) {
        e.preventDefault();

        let newErrorMessage = { ...errorMessage };

        const data = {
            email: input.emailValue,
            password: input.passwordValue,
        }
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.status === 404) {
            newErrorMessage.notFoundError = result.message;
            newErrorMessage.emailError = "";
            newErrorMessage.passwordError = "";
        } else if (result.status === 400) {
            newErrorMessage.notFoundError = '';
            if (result.data.length > 0) {
                const isEmail = result.data.some(err => err.path === "email");
                const isPassword = result.data.some(err => err.path === "password");
                if (isEmail) {
                    result.data.forEach(err => {
                        if (err.path === 'email') {
                            newErrorMessage.emailError = err.message
                        }
                    })
                } else {
                    newErrorMessage.emailError = "";
                }
                if (isPassword) {
                    result.data.forEach(err => {
                        if (err.path === 'password') {
                            newErrorMessage.passwordError = err.message
                        }
                    })
                } else {
                    newErrorMessage.passwordError = "";
                }
            }
        } else {
            //status code 200
            setMsg(result.message);
            //set empty errors
            for (let key in errorMessage) {
                errorMessage[key] = "";
            }
            setErrorMessage(errorMessage)
            //clear inputs value
            for (let key in input) {
                input[key] = "";
            }
            setInput(input)
        }
    }


    return (
        <>
            {msg && <SuccessModal msg={msg} setMsg={setMsg} />}
            <form className='w-[85%] sm:w-[450px]  bg-[rgba(0,0,0,.5)] rounded-xl py-11 text-center' action="" onSubmit={formSubmitHandler}>
                <div className="container w-4/5 m-auto">
                    <h1 className='py-5 text-3xl font-bold mb-4'>Login</h1>
                    <div className='input-items text-gray-400 mb-5 text-start'>
                        <div className='h-20'>
                            <input
                                className='outline-none bg-transparent border-b-2 border-b-gray-300 w-full px-2 py-2 mb-2'
                                placeholder='Email *'
                                type="text"
                                maxLength={50}
                                value={input.emailValue}
                                onChange={setValuesHandler}
                            />
                            {errorMessage.emailError && <span className='text-red-500 text-sm'>{errorMessage.emailError}</span>}
                        </div>
                        <div className='h-20'>
                            <input
                                className='outline-none bg-transparent border-b-2 border-b-gray-300 w-full px-2 py-2 mb-2'
                                placeholder='Password *'
                                type="password"
                                maxLength={20}
                                value={input.passwordValue}
                                onChange={setValuesHandler}
                            />
                            {errorMessage.passwordError && <span className='text-red-500 text-sm'>{errorMessage.passwordError}</span>}
                            {errorMessage.notFoundError && <span className='text-red-500 text-sm'>{errorMessage.notFoundError}</span>}

                        </div>
                    </div>
                    <input
                        className='w-2/5 text-[#289bb8] border-l-4 border-l-[#289bb8] h-10 cursor-pointer bg-[rgba(0,0,0,.1)] mb-7 hover:bg-[rgba(0,0,0,.3)] transition-all'
                        type="submit"
                        placeholder='login'
                    /><br />
                    <div className='text-sm font-semibold space-x-2'>
                        <span className='text-gray-300'>Don't have an account? </span><a href='#' className='text-[#289bb8]' onClick={() => setIsLogin(false)}>Register</a>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login