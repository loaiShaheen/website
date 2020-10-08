import React from 'react'
import ContactUs from '../components/ContactUs'
import Services from '../components/Services'

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="flex flex-row h-screen w-screen bg-white">
                <div className="absolute left-0 h-full w-2/3">
                    <img className="absolute z-0 object-cover h-full" src="https://res.cloudinary.com/drridy4yi/image/upload/v1601947480/Website/Gavel_atzfyc.jpg" />
                    <svg className=" sm:absolute left-0 top-0 h-full w-full bg-white bg-opacity-50" fill="#fff" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="27,0 100,0 100,100 27,0" />
                    </svg>
                </div>

                <div className="absolute top-0 mt-24 ml-60 h-56 w-9/20 bg-gradient-to-l from-red-1 to-red-2 z-0" />
                <div className="h-screen w-2/3 py-10 bg-transparent z-10">
                    <div className="mt-10 top-1/2 lg:top-1/5 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left lg:ml-16">
                            <h2 className="text-5xl tracking-tight leading-10 font-extrabold text-gray-800 sm:text-10xl sm:leading-none">
                                Shaheen
                            </h2>
                            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-800 sm:text-5xl sm:leading-none">
                                Paralegal Services
                            </h2>
                            <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto lg:mt-5 lg:text-2xl lg:mx-0">
                                Paralegal and Notary Public Services
                            </p>
                        </div>
                    </div>
                    <Services />
                </div>
                <div className="h-screen w-1/3 bg-gray-1 z-10">
                    <ContactUs />
                </div>
            </div>
        )
    }
}