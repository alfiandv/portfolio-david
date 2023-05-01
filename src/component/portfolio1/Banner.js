import React from "react";

import bannerLentera from '../../img/port1/bannerLentera.png';

const Banner = () => {
    return (
        // banner
        <>
         <div id="banner-container" class=" w-full flex-col bg-[#ECECEC] min-w-[475px]">
                <div id="bannerNavbar" class="flex flex-row justify-between pl-20 pr-20 pt-10 ">
                    <div class="flex ">
                        <span class="font-semibold text-hijau344E41">DAA.</span>
                    </div>
                    <div class="flex">
                        <a href="./" class="font-normal underline text-hijau344E41 hover:text-hijauA3B18A">kembali</a>
                    </div>
                </div>
                <div id="gambarNavbar" class="w-full h-full p-[50px] ">
                    <img src={bannerLentera} alt="" class=" mx-auto"></img>
                </div>
            </div>
        </>
           

       //pembukaan
       

    
            
     

    )
}

export default Banner