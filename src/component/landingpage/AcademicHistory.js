import React from "react";

const AcademicHistory = () => {
    return (
    <div id="main_academic-history" className="min-w-[450px]">
        <div className="text-header2 flex flex-col justify-start xs:items-start xs:pl-20 md:pl-0 md:pb-12 md:items-center md:mb-[32px] mb-10 md:py-0">
            <span className="text-heading3 text-hijauA3B18A font-bold pb-2">Academic and Work</span>
            <span className="text-heading2 text-hijau344E41 font-bold" >History</span>
        </div>

          
          <div className="mx-auto w-full grid grid-cols-9 xs:pl-14 md:pl-0 ">
            <div id="kerja-kiri" className="col-span-4 w-full h-full xs:hidden md:flex">
                <div className="w-full h-full bg-[#f6f6f6] rounded-md md:p-5 md:flex flex-col justify-start items-end ">
                    <span className="text-hijau344E41 text-heading4 md:text-heading4 lg:text-heading3 font-bold pb-2">PT. Samudera Agung Mineral</span>
                    <span className="text-hijau344E41 text-heading5 md:text-heading4 font-normal pb-1">Administrative Staff</span>
                    <span className="text-hijau344E41 text-heading5 font-normal xs:pb-3 md:pb-0"> 17/Okt/2022 - 14/Des/2022 </span>
                </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-hijau344E41"></div>
                <div className="absolute w-6 h-6 rounded-full bg-hijau588157 z-10 text-white text-center">1</div>
            </div>

            <div id="kerja-kanan" className="md:col-span-4 xs:col-span-8 w-full h-full xs:flex md:hidden">
                <div className="w-full h-full bg-[#f6f6f6] rounded-md md:p-5 flex flex-col justify-start items-start ">
                    <span className="text-hijau344E41 text-heading4 md:text-heading4 lg:text-heading3 font-bold pb-2">PT. Samudera Agung Mineral</span>
                    <span className="text-hijau344E41 text-heading5 md:text-heading4 font-normal pb-1" >Administrative Staff</span>
                    <span className="text-hijau344E41 text-heading5 font-normal xs:pb-3 md:pb-0"> 17/Okt/2022 - 14/Des/2022 </span>
                </div>
            </div>
        </div>

      
       
         <div className="mx-auto w-full grid grid-cols-9 xs:pl-14 md:pl-0">
            <div id="kuliah-kiri" className="col-span-4 w-full h-full xs:hidden md:flex">
                
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-hijau344E41"></div>
                <div className="absolute w-6 h-6 rounded-full bg-hijau588157 z-10 text-white text-center">2</div>
            </div>

            <div id="kuliah-kanan" className="md:col-span-4 xs:col-span-8 w-full h-full ">
                <div className="w-full h-full bg-[#f6f6f6] rounded-md md:p-5 flex flex-col justify-start items-start">
                    <span className="text-hijau344E41 text-heading4 md:text-heading4 lg:text-heading3 font-bold pb-2">Universitas Dinamika</span>
                    <span className="text-hijau344E41 text-heading5 md:text-heading4 font-normal pb-1">S1 Sistem Informasi</span>
                    <span className="text-hijau344E41 text-heading5 font-normal xs:pb-3 md:pb-0">2017 - 2022</span>
                </div>
            </div>
        </div>
        

        
        <div className="mx-auto w-full grid grid-cols-9 xs:pl-14  md:pl-0 ">
            <div id="sma-kiri" className="col-span-4 w-full h-full xs:hidden md:flex" >
                <div className="w-full h-full bg-[#f6f6f6] rounded-md xs:p-5 md:flex flex-col justify-start items-end xs:hidden">
                    <span className="text-hijau344E41 text-heading4 md:text-heading4 lg:text-heading3 font-bold pb-2">SMAN 5 MADIUN</span>
                    <span className="text-hijau344E41 text-heading5 md:text-heading4 font-normal pb-1">Ilmu Pengetahuan Sosial</span>
                    <span className="text-hijau344E41 text-heading5 font-normal ">2014 - 2017</span>
                </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-hijau344E41"></div>
                <div className="absolute w-6 h-6 rounded-full bg-hijau588157 z-10 text-white text-center">3</div>
            </div>

            <div id="sma-kanan" className=" md:col-span-4 xs:col-span-8 w-full h-full ">
                <div className="w-full h-full bg-[#f6f6f6] rounded-md md:p-5 flex flex-col justify-start items-start md:hidden ">
                    <span className="text-hijau344E41 text-heading4 md:text-heading4 lg:text-heading3 font-bold pb-2">SMAN 5 Madiun</span>
                    <span className="text-hijau344E41 text-heading5 md:text-heading4 font-normal pb-1">Ilmu Pengetahuan Sosial</span>
                    <span className="text-hijau344E41 text-heading5 font-normal xs:pb-3">2014 - 2017</span>
                </div>
            </div>
        </div>
        
    </div>

    
    
    )
}

export default AcademicHistory