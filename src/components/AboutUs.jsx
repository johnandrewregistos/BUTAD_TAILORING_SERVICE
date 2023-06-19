import React from 'react'
import { Link } from 'react-scroll'


const AboutUs = () => {
    return (
        <section id='about'>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">Crafted Elegance,
                        <br /> Stitched to Perfection
                    </h1>
                    <p className="mb-8 leading-relaxed text-md md:text-lg">Experience the epitome of tailored elegance at our shop. With meticulous craftsmanship and an unwavering dedication to quality, we create bespoke garments that reflect your unique style. Trust us to bring your fashion vision to life, where artistry meets exceptional design.</p>
                    <div className="flex justify-start">
                        <Link to='contacts' smooth={true} spy={true} className="bg-[#FFED00] text-black tracking-wider px-4 py-2 hover:bg-amber-500 rounded-full cursor-pointer">Get In Touch</Link>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs