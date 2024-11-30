import React, { useState } from 'react'

function Login({ setIsLogin }) {
    //States
    const [input, setInput] = useState({
        emailValue: "",
        passwordValue: "",
    })
    const [errorMessage, setErrorMessage] = useState("")
    const newErrorMessage = { ...errorMessage };

    //Set Values
    function setValuesHandler(e) {
        const { value, type } = e.target;
        const newValues = { ...input }

        if (type === "text") {
            newValues.emailValue = value;
        } else {
            newValues.passwordValue = value;
        }
        setInput(newValues)

    }


    async function formSubmitHandler(e) {
        e.preventDefault();

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
        console.log(result.message)
    }


    return (
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
                    </div>
                    <div className='h-20'>
                        <input
                            className='outline-none bg-transparent border-b-2 border-b-gray-300 w-full px-2 py-2 mb-2'
                            placeholder='Password *'
                            type="password"
                            maxLength={18}
                            value={input.passwordValue}
                            onChange={setValuesHandler}
                        />
                        {errorMessage && <span className='text-red-500 text-sm'>{errorMessage}</span>}
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

    )
}

export default Login