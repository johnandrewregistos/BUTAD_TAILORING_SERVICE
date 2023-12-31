import React from 'react'
import { LuPhoneCall } from 'react-icons/lu'

const Contacts = () => {
    return (
        <div className='w-full h-[15vh] md:h-[10vh] bg-black grid grid-cols-1 md:grid-cols-2 place-items-center' id='contacts'>
            <div className='w-full md:w-[500px] h-[50px] grid place-items-center'>
                <h1 className="text-xl md:text-4xl text-[#FFED00]">Contact Us Now</h1>
            </div>
            <div className='w-full md:w-[300px] h-[50px] grid place-items-center'>
                <h2 className='text-md md:text-2xl text-[#FFED00] flex'><LuPhoneCall className='mr-3' /> 0981-777-9863 - TnT</h2>
            </div>
        </div>
    )
}

export default Contacts