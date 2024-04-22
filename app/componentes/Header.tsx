'use client'

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../globals.css'
// import '../scripts/script'
import AnimatedTitle from './AnimatedTitle';
import WhyChoose from './WhyChoose';

export default function Header() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    
    return (
        <>
            <div className="w-full bg-gradient-to-b from-blue-950 via-slate-950 to-slate-950 flex flex-col md:flex-row md:px-32 py-20 items-center align-items justify-center">
                <div className="flex flex-col">
                    <h1 className="font-bold text-4xl md:text-6xl text-title pb-2 px-5 text-white">Construyendo un Futuro Digital</h1>
                    <AnimatedTitle />
                    {/* <h1 className="font-bold text-4xl md:text-5xl title-animated px-5 h-10 md:h-16" id="title-animated"></h1> */}
                    <div className='flex flex-col md:flex-row items-start'>
                        <a className="btn md:w-60 text-xl md:text-lg mt-10 mx-5 font-medium rounded-full border-blue-900 border-4 bg-blue-900 text-white hover:bg-gray-900" href="https://api.whatsapp.com/send/?phone=%2B541156260023&text&type=phone_number&app_absent=0" target="_blank">Contratar servicio</a>
                        <a className="btn md:w-60 text-xl md:text-lg mt-5 md:mt-10 mx-5 font-medium rounded-full border-sky-50 border-4 bg-transparent text-sky-50 hover:bg-gray-900" href="/servicios">Ver servicios</a>
                    </div>
                </div>
                <Slider {...settings} className="mt-10 md:mt-0 w-80 md:w-[50rem]">
                    <div>
                        <img src="/diseno-app.png" alt="Imagen 1" className='imagenheader' />
                    </div>
                    <div>
                        <img src="/diseno-web.png" alt="Imagen 2" className='imagenheader' />
                    </div>
                    <div>
                        <img src="/servidores.png" alt="Imagen 3" className='imagenheader' />
                    </div>
                    <div>
                        <img src="/vigilancia.png" alt="Imagen 4" className='imagenheader' />
                    </div>
                </Slider>
            </div>
        </>
    );
}
