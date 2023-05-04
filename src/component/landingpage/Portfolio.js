import React from "react";
import bannerLentera from '../../img/port1/bannerLentera.png';

const Portfolio = () => {

    return (
        <div id="mainPortfolio" className="min-w-[450px] h-full w-full flex flex-col mt-20">
            <span className="text-heading2 text-hijau344E41 font-bold mx-auto">Case Studies</span>
                <div id="port" className="flex flex-row flex-wrap items-center justify-center px-[50px] md:px-32 mt-20 gap-8">
                    <div id="card" className="bg-[#ececec] text-hijau344E41 max-w-[350px] lg:max-w-[450px] min-h-[12rem] mb-20 shadow-lg rounded-md overflow-hidden ">
                        <img src={bannerLentera} alt="" className="w-full h-full object-cover"></img>
                        <div id="desc" className="flex items-start flex-col bg-white">
                            <div id="badge" className="flex flex-row pl-5 pt-5 pr-5 gap-2">
                                <span className="font-semibold px-3 py-1 rounded-full text-heading5 text-hijau344E41 bg-gray-100">desain UI/UX</span>
                                <span className="font-semibold px-3 py-1 rounded-full text-heading5 text-hijau344E41 bg-gray-100">website</span>
                            </div>
                            <span className="font-semibold text-heading5 md:text-heading4 pl-5 pt-5 pb-2 text-hijau344E41">E-Commerce penjualan aplikasi</span>
                            <span className="font-normal text-heading5 md:text-heading4 pl-5 pb-2 text-hijau344E41">Lentera Teknologi Indonesia</span>
                            <a href="./portfolio" className="place-self-start pl-5 pt-8 pr-5 pb-5"><span className="font-normal text-hijauA3B18A text-heading5 underline">selengkapnya</span></a>    
                        </div>
                    </div>
                    
                </div>
                
        </div>
    )
}

export default Portfolio