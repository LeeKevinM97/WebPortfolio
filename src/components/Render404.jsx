import React from 'react'
import Image404 from '../images/404.svg';

function Render404() {
    return (
        <>
            <div class="h-screen w-screen bg-first flex items-center">
                <div class="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                    <div class="w-full lg:w-1/2 mx-8">
                        <div class="text-7xl text-green-500 font-dark font-extrabold mb-8"> 404</div>
                        <p class="text-2xl md:text-3xl font-light leading-normal mb-8 text-second">
                            Sorry, we couldn't find the page you're looking for.
                        </p>

                        <a href="#" class="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700">back to homepage</a>
                    </div>
                    <div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                        <img src={Image404} class="" alt="Page Not Found Image"/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Render404