import React from 'react'

const Gallery = () => {
    return (
        <div className='w-full h-full sm:h-[70vh] md:h-[60vh] bg-black grid place-items-center' id='gallery'>
            <h1 className='text-3xl text-white mt-4 md:mt-6'>GALLERY</h1>
            <div className='w-full h-[100vh] sm:h-[70vh] md:h-[50vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-3 place-items-center items-center'>
                <div className='w-full sm:w-[800px] md:w-[300px] h-5/6 sm:h-5/6 md:h-4/6 rounded-lg overflow-hidden img1'></div>
                <div className='w-full sm:w-[800px] md:w-[300px] h-5/6 sm:h-5/6 md:h-4/6 rounded-lg overflow-hidden img2'></div>
                <div className='w-full sm:w-[800px] md:w-[300px] h-5/6 sm:h-5/6 md:h-4/6 rounded-lg overflow-hidden img3'></div>
                <div className='w-full sm:w-[800px] md:w-[300px] h-5/6 sm:h-5/6 md:h-4/6 rounded-lg overflow-hidden img4'></div>
            </div>
        </div>
    )
}

export default Gallery