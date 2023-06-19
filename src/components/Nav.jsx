import React, { useState, useEffect } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { CiCircleRemove } from 'react-icons/ci'
import { Link } from 'react-scroll';

const Nav = () => {
    const [isMenuOpen, setMenuOpen] = useState(true);

    const toogleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            setMenuOpen(true);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className='fixed top-0 w-full h-12 px-3 md:px-6 py-2 md:py-3 flex justify-between items-center bg-black'>
            {/* Icon Logo */}
            <Link to='home' activeClass='active' smooth={true} spy={true} className='w-[100px] h-[40px] icon cursor-pointer'>
            </Link>
            {/* Nav list */}
            <div className="w-3/6 flex justify-end items-center">
                <ul className='w-5/6 hidden md:flex justify-between'>
                    <Link to='services' activeClass='active' smooth={true} spy={true} offset={-200} className='list-none text-sm uppercase text-[#FFED00] hover:text-white cursor-pointer'>Services</Link>
                    <Link to='gallery' activeClass='active' smooth={true} spy={true} className='list-none text-sm uppercase text-[#FFED00] hover:text-white cursor-pointer'>Gallery</Link>
                    <Link to='about' activeClass='active' smooth={true} spy={true} className='list-none text-sm uppercase text-[#FFED00] hover:text-white cursor-pointer'>About Us</Link>
                    <Link to='testimonials' activeClass='active' smooth={true} spy={true} className='list-none text-sm uppercase text-[#FFED00] hover:text-white cursor-pointer'>Testimonials</Link>
                    <Link to='contacts' activeClass='active' smooth={true} spy={true} className='list-none text-sm uppercase text-[#FFED00] hover:text-white cursor-pointer'>Contacts</Link>
                </ul>
            </div>
            <button className='flex md:hidden text-3xl text-[#FFED00] hover:text-white' onClick={() => toogleMenu()}>
                {isMenuOpen ? <BiMenuAltRight /> : <CiCircleRemove />}
            </button>
            {/* Toogle Navlist */}
            <ul className={`w-[10rem] h-60 bg-black absolute top-12 right-4 ${isMenuOpen ? 'hidden' : 'flex'} flex-col justify-evenly items-center rounded-b-md transition-opacity duration-300`}>
                <Link to='services' activeClass='active' smooth={true} spy={true} offset={-200} className='list-none text-sm md:text-lg uppercase text-[#FFED00] hover:text-white tracking-wider cursor-pointer'>Services</Link>
                <Link to='gallery' activeClass='active' smooth={true} spy={true} className='list-none text-sm md:text-lg uppercase text-[#FFED00] hover:text-white tracking-wider cursor-pointer'>Gallery</Link>
                <Link to='about' activeClass='active' smooth={true} spy={true} className='list-none text-sm md:text-lg uppercase text-[#FFED00] hover:text-white tracking-wider cursor-pointer'>About Us</Link>
                <Link to='testimonials' activeClass='active' smooth={true} spy={true} className='list-none text-sm md:text-lg uppercase text-[#FFED00] hover:text-white tracking-wider cursor-pointer'>Testimonials</Link>
                <Link to='contacts' activeClass='active' smooth={true} spy={true} className='list-none text-sm md:text-lg uppercase text-[#FFED00] hover:text-white tracking-wider cursor-pointer'>Contacts</Link>
            </ul>
        </header >
    )
}

export default Nav