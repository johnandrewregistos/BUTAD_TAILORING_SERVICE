import React from 'react'
import { Link } from 'react-scroll'

const Landing = () => {
    const containerStyle = {
        height: `calc(100vh - 48px)`,
        marginTop: '48px'
    };
    return (
        <div className='w-full' style={containerStyle} id='home'>
            <div className="w-full h-full grid place-items-center bg-black/40">
                <div className="w-auto h-[10vh] grid place-items-center">
                    <h1 className='text-md sm:text-2xl md:text-[3rem] text-white font-semibold tracking-wider mb-2 md:mb-6'>Best and Reliable Tailoring Services</h1>
                    <Link to='contacts' smooth={true} spy={true} className='text-sm sm:text-lg md:text-xl bg-[#FFED00]  text-black tracking-wider px-3 md:px-4 py-1 md:py-2 rounded-lg hover:rounded-full cursor-pointer'>
                        INQUIRE NOW
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing