import React from "react";
import bannerLentera from '../../img/port1/bannerLentera.png';

const Portfolio = () => {

    return (
        <div id="mainPortfolio" className="h-full w-full flex flex-col pt-5 mt-20">
            <span className="text-heading2 text-hijau344E41 font-bold mx-auto">Case Studies</span>
                <div id="port" className="flex flex-row flex-wrap items-center justify-center px-32 mt-20 gap-8">
                    <div id="card" className="bg-[#ececec] text-hijau344E41 w-[450px] min-h-[12rem] mb-20 shadow-lg rounded-md overflow-hidden ">
                        <img src={bannerLentera} alt="" className="w-full h-full object-cover"></img>
                        <div id="desc" className="flex items-start flex-col bg-white">
                            <div id="badge" className="flex flex-row pl-5 pt-5 pr-5 gap-2">
                                <span className="font-bold px-3 py-1 rounded-full text-hijau344E41 bg-gray-100">desain UI/UX</span>
                                <span className="font-bold px-3 py-1 rounded-full text-hijau344E41 bg-gray-100">website</span>
                            </div>
                            <span className="font-semibold text-heading4 pl-5 pt-5 pb-2 text-hijau344E41">E-Commerce penjualan aplikasi</span>
                            <span className="font-normal text-heading4 pl-5 pb-2 text-hijau344E41">Lentera Teknologi Indonesia</span>
                            <a href="./portfolio" className="place-self-end pl-5 pt-8 pr-5 pb-5"><span className="font-normal text-hijauA3B18A text-heading4 underline italic">selengkapnya</span></a>    
                        </div>
                    </div>
                    
                </div>
                
        </div>
    )
}

export default Portfolio