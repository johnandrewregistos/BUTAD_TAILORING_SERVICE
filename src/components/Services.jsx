import React from 'react'
import { Link } from 'react-scroll'

const Services = () => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center px-3 py-6' id='services'>
            <h1 className='text-3xl my-2 md:my-6'>SERVICES</h1>
            <div className="w-full h-full flex flex-col md:flex-row justify-evenly items-center">
                {/* 1st */}
                <div className="w-5/6 md:w-1/4 h-[420px] md:h-[540px] flex flex-col  items-center px-3">
                    <img src='https://images.pexels.com/photos/4792060/pexels-photo-4792060.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" className='w-4/5 h-36 mt-6 mb-3 rounded-md' />
                    <h1 className='my-3 text-2xl'>Custom Tailoring</h1>
                    <p className='text-lg flex justify-evenly items-center mb-3'>We provide custom tailoring service so that you can choose all details you want, from buttons to pockets and lapels, we can do everything.</p>
                    <Link to='contacts' smooth={true} spy={true} className="bg-[#FFED00] text-black tracking-wider px-4 py-2 hover:bg-amber-500 rounded-full cursor-pointer">INQUIRE</Link>
                </div>
                {/* 2nd */}
                <div className="w-5/6 md:w-1/4 h-[420px] md:h-[540px] flex flex-col  items-center px-3">
                    <img src='https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" className='w-4/5 h-36 mt-6 mb-3 rounded-md' />
                    <h1 className='my-3 text-2xl'>Altering/Repair</h1>
                    <p className='text-lg flex justify-evenly items-center mb-3'>The perfect cut for your outfit is something we believe in. We are engaged in offering best altering options helping you look more classy.</p>
                    <Link to='contacts' smooth={true} spy={true} className="bg-[#FFED00] text-black tracking-wider px-4 py-2 hover:bg-amber-500 rounded-full cursor-pointer">INQUIRE</Link>
                </div>
                {/* 3rd */}
                <div className="w-5/6 md:w-1/4 h-[420px] md:h-[540px] flex flex-col  items-center px-3">
                    <img src='https://images.pexels.com/photos/6766286/pexels-photo-6766286.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" className='w-4/5 h-36 mt-6 mb-3 rounded-md' />
                    <h1 className='my-3 text-2xl'>Home Visit Tailor Services</h1>
                    <p className='text-lg flex justify-evenly items-center mb-3'>
                        We truly understand your busy schedule. Our master experts are available to visit at your place for taking the necessary measurements.
                    </p>
                    <Link to='contacts' smooth={true} spy={true} className="bg-[#FFED00] text-black tracking-wider px-4 py-2 hover:bg-amber-500 rounded-full cursor-pointer">INQUIRE</Link>
                </div>
                {/* 4rth */}
                <div className="w-5/6 md:w-1/4 h-[420px] md:h-[540px] flex flex-col  items-center px-3">
                    <img src='https://images.pexels.com/photos/6833688/pexels-photo-6833688.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" className='w-4/5 h-36 mt-6 mb-3 rounded-md' />
                    <h1 className='my-3 text-2xl'>Uniforms</h1>
                    <p className='text-lg flex justify-evenly items-center mb-3'>
                        We help you make your everyday job very special by providing unique and creative designs of stitching making you look as professional as you are.
                    </p>
                    <Link to='contacts' smooth={true} spy={true} className="bg-[#FFED00] text-black tracking-wider px-4 py-2 hover:bg-amber-500 rounded-full cursor-pointer">INQUIRE</Link>
                </div>
            </div>
        </div>
    )
}

export default Services