import React from 'react';
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function SuccessModal() {
    return (
        <div className="w-[330px] h-14 absolute top-3 rounded-lg flex items-center bg-gray-100">
            <div className="flex w-[90%] mx-auto">
                <IoCheckmarkCircleOutline className='text-green-700 text-3xl'/>
            </div>
        </div>
    )
}

export default SuccessModal