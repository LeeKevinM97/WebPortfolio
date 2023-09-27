import React from 'react'
import Image404 from '../images/404.svg';

function Render404() {
    return (
        <>
            <div class="min-h-screen w-screen bg-first flex items-center justify-center">
                <div class="flex flex-col md:flex-row items-center justify-center px-5 text-gray-700 space-y-6 md:space-y-0 md:space-x-6 max-w-5xl">
                    <div class="flex-none lg:w-1/2 max-w-xs md:max-w-md lg:max-w-xl">
                        <div class="text-7xl text-green-500 font-dark font-extrabold mb-8">404</div>
                        <p class="text-2xl md:text-3xl font-light leading-normal mb-8 text-second">
                            Sorry, we couldn't find the page you're looking for.
                        </p>
                        <a href="#" class="px-5 py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700">back to homepage</a>
                    </div>
                    <div class="flex-none lg:w-1/2 my-12 max-w-xs md:max-w-md lg:max-w-xl">
                        <img src={Image404} alt="Page Not Found Image" class="w-full h-auto" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Render404