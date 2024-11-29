import React from 'react';
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function SuccessModal({ msg, setMsg }) {

    const modalRef = React.useRef(null);

    React.useEffect(() => {
        modalRef.current.className = "w-3/5 sm:w-[330px] h-14 absolute top-3 rounded-lg flex items-center bg-gray-200 animate-scModal"
        setTimeout(() => {
            modalRef.current.className = "w-3/5 sm:w-[330px] h-14 absolute top-3 rounded-lg flex items-center bg-gray-200 animate-scModalC"
            setTimeout(() => {
                setMsg(null)
            }, 730)
        }, 3300)


    }, [])


    return (
        <div ref={modalRef}>
            < div className="flex gap-3 w-[90% mx-auto" >
                <IoCheckmarkCircleOutline className='text-green-700 text-3xl' />
                <span className='text-gray-700 font-semibold'>{msg}</span>
            </div >
        </div >
    )
}

export default SuccessModal