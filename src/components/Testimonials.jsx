import React from 'react'

const Testimonials = () => {
    return (
        <section className='w-full h-full grid place-items-center py-3 md:py-6' id='testimonials'>
            <h1 className='text-3xl py-5'>TESTIMONIALS</h1>
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 mx-auto">
                {/* 1st */}
                <div className="w-full md:w-5/6 mx-auto text-center px-3 md:px-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-[#FFED00] mb-4" viewBox="0 0 975.036 975.036">
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="leading-relaxed text-gray-500 text-md md:text-lg">I was absolutely blown away by the impeccable craftsmanship and attention to detail at this tailoring shop. They transformed my vision into a breathtaking reality. The fit of my tailored suit was flawless, and I felt like a true gentleman wearing it. I highly recommend their services for anyone who seeks unparalleled quality and style.</p>
                    <span className="inline-block h-1 w-10 rounded bg-[#FFED00] mt-8 mb-6"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">- Michael R.</h2>
                </div>
                {/* 2nd */}
                <div className="w-full md:w-5/6 mx-auto text-center px-3 md:px-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-[#FFED00] mb-4" viewBox="0 0 975.036 975.036">
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="leading-relaxed text-gray-500 text-md md:text-lg">Choosing this tailoring shop was the best decision I made for my wedding dress. They listened to my ideas and brought them to life with exquisite precision. The gown fit like a dream, accentuating my figure in the most flattering way. The team's professionalism and passion for their work truly shone through. Thank you for making my special day even more magical!</p>
                    <span className="inline-block h-1 w-10 rounded bg-[#FFED00] mt-8 mb-6"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">- Emily S.</h2>
                </div>
                {/* 3rd */}
                <div className="w-full md:w-5/6 mx-auto text-center px-3 md:px-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-[#FFED00] mb-4" viewBox="0 0 975.036 975.036">
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="leading-relaxed text-gray-500 text-md md:text-lg">As a frequent customer, I can confidently say that this tailoring shop is unmatched in both craftsmanship and customer service. Whether it's altering my favorite dress or creating a custom piece, they consistently exceed my expectations. Their attention to detail is remarkable, and the result is always a garment that fits me perfectly and makes me feel like a fashion icon.</p>
                    <span className="inline-block h-1 w-10 rounded bg-[#FFED00] mt-8 mb-6"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">- Sarah L.</h2>
                </div>
            </div>
        </section>
    )
}

export default Testimonials