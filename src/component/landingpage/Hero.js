import React from "react";
import foto from '../../img/foto.png';
import crop from '../../img/crop.png';

const Hero = () => {
    const salam = ('HELLO WORLD/>');

    return (
    <div id="main_hero" className="min-w-[450px] md:h-[500px] xl:h-630 w-full md:w-full xl:w-full md:inline-flex">
        <div id="hero_kiri" className=" md:w-[60%] flex flex-col pl-20 pr-20 pb-10 pt-10 xl:pl-30 md:pl-20  xl:pt-24 ">
            <span className="text-heading2 block sm:text-heading2 md:text-heading2 lg:text-heading1 xl:text-display2 font-semibold mb-5 text-hijau344E41">{salam}</span>
            <span className="text-heading3 block sm:text-heading3 md:text-heading3 lg:text-heading2 font-bold text-hijau344E41">DAVID ALFIAN ARIYOGA</span>
            <span className="text-heading3 block sm:text-heading3 md:text-heading3 lg:text-heading2 font-bold text-hijau344E41">HERE!</span>
            <span className="text-heading3 block sm:text-heading3 md:text-heading3 lg:text-heading3 font-normal mt-5 text-hijauA3B18A ">I'am a UI/UX Designer</span>
            
            <div className="mt-11 lg:mt-16 md:mt-11">
            <a href="mailto:davealfian72@gmail.com" ><span className="group hover:bg-hijau588157 transition text-heading4 font-bold bg-hijau3A5A40  text-white py-4 place-self-start sm:place-self-start md:place-self-start px-60px lg:mr-16 xl:mr-6">Hook Me Up!</span></a>
            </div>
            
        </div>
        <div id="hero_kanan" className=" md:w-[40%] relative min-w-[320px]">
            <img src={crop} className="mx-auto my-10 rounded-full w-80 h-80 sm:left-28 drop-shadow-md md:hidden" alt="crop"></img>
            <img src={foto} className="object-cover  sm:w-48 w-0 md:w-72 md:left-3% nv988:left-15% xl:w-96 xl:h-[660px] -top-32 xl:left-[15%] sm:absolute md:absolute lg:absolute invisible sm:invisible md:visible lg:visible" alt=""></img>
        </div>
    </div>
    )
}

export default Hero