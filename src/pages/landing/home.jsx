import React from "react";
import Header from "../../shared/header";
import Footer from "../../shared/footer";

import HeroImg from "../../assets/images/hero-banner.jpg";

const Home = () => {
    return (
        <div className="w-full overflow-hidden">
            <Header />

            {/* HeroPage */}
            <div
                className="relative bg-cover bg-center h-screen z-5 mx-auto bg-fixed"
                style={{ backgroundImage: `url(${HeroImg})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute font-bold mb-4 ml-20 flex inset-y-1/3 flex-col text-white">
                    <h1 className="text-7xl mb-5">Where Dreams Become Events</h1>
                    <h1 className="text-2xl w-2/3">Transforming dreams into unforgettable events. Our expert team crafts extraordinary experiences for your special moments.</h1>

                    <div className="relative inline-block text-lg group w-1/5 mt-10 text-center">
                        <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out  rounded-lg group-hover:text-white">
                            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span class="absolute left-0 w-72 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-fi-red group-hover:-rotate-180 ease"></span>
                            <span class="relative">Start your journey</span>
                        </span>
                        <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-fi-red rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </div>
                </div>
            </div>

            {/* Basic About */}
            <div className="about">
                Text
            </div>

            {/* Mini services */}

            {/* Mini content */}

            {/* Gallery */}

            {/* Testimonials */}

            <Footer />
        </div>
    );
};

export default Home;
