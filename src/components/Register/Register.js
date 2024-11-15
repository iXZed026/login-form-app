import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {

    const [emailValue, setEmailValue] = useState("");
    const [userNameValue, setUserNameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    return (
        <form className='w-[85%] sm:w-[450px]  bg-[rgba(0,0,0,.5)] rounded-xl py-11 text-center' action="">
            <div className="container w-4/5 m-auto">
                <h1 className='py-5 text-3xl font-bold mb-4'>Register</h1>
                <div className='input-items text-gray-400 mb-5'>
                    <div className='h-20'>
                        <input
                            className='outline-none bg-transparent border-b-2 border-b-gray-300 w-full px-2 py-2'
                            placeholder='Email *'
                            type="text"
                            maxLength={50}
                            value={emailValue}
                        />
                    </div>
                    <div className='h-20'>
                        <input
                            className='outline-none bg-transparent border-b-2 border-b-gray-300 w-full px-2 py-2'
                            placeholder='Username *'
                            type="text"
                            maxLength={18}
                            value={userNameValue}
                        />
                    </div>
                    <div className='h-20'>
                        <input
                            className='outline-none bg-transparent border-b-2 border-b-gray-300 w-full px-2 py-2'
                            placeholder='Password *'
                            type="password"
                            maxLength={18}
                            value={passwordValue}
                        />
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