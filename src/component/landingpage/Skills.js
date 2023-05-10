import React from "react";
import ui from '../../img/ui.png';
import web from '../../img/web.jpg';

const Skills = () => {
    return (
        
        <div id="main_skills" className="mx-auto min-w-[450px] w-full pt-20 mb-20">
                <div className="flex flex-col pb-20">
                        <span className="text-heading3 text-hijauA3B18A font-bold mx-auto  pb-2">Area Of</span>
                        <span className="text-heading2 text-hijau344E41 font-bold mx-auto">Experties</span>
                </div>
                <div id="port" className="flex flex-row flex-wrap items-center justify-center md:px-32 gap-20">
                    <div id="card" className=" max-w-[350px] md:max-w-[450px] duration-700 shadow-lg rounded-md overflow-hidden relative group">
                        <img src={ui} alt="" className="  w-full h-full min-h-[400px] object-cover"></img>
                        <div className="w-full absolute inset-x-0 -bottom-[123px] group group-hover:bottom-0 duration-500 bg-white rounded-t-lg">
                            <div className="flex flex-col">
                                <span className="text-heading3 p-2 pl-6 font-bold">UI Design</span>
                                <span className="text-heading4 p-2 pl-6 font-base">Figma</span>
                                <span className="text-heading4 p-2 pl-6 font-base">Miro</span>
                                <span className="text-heading4 p-2 pl-6 pb-3 font-base">Notion</span>
                            </div>
                        </div>
                    </div>
                    
                    <div id="card" className=" max-w-[350px] md:max-w-[450px] duration-700 shadow-lg rounded-md overflow-hidden relative group">
                        <img src={web} alt="" className=" w-full h-full min-h-[400px] object-cover"></img>
                        <div className="w-full absolute inset-x-0 -bottom-[121px] group group-hover:bottom-0 duration-500 bg-white rounded-t-lg">
                            <div className="flex flex-col">
                                <span className="text-heading3 p-2 pl-6 font-semibold">Web Developer</span>
                                <span className="text-heading4 p-2 pl-6 font-base">Html</span>
                                <span className="text-heading4 p-2 pl-6 font-base">Css</span>
                                <span className="text-heading4 p-2 pl-6 pb-3 font-base">Tailwind Css</span>

                            </div>
                        </div>
                    </div>
                </div>
        </div>

        
       
        
    )
}

export default Skills


{/* <div id="main_skills" className="mx-auto min-w-[450px] w-full grid md:grid-cols-9 sm:grid-rows-9 md:mt-[36px]">
            <div id="ux" className="sm:row-span-4 md:col-span-4 w-full h-full ">
                <div className="px-20 py-20 md:-mr-[80px] lg:-mr-[120px] md:pt-24 md:pb-32  lg:px-32 lg:pt-24 lg:pb-24">
                    <div className="flex flex-col">
                        <span className="text-heading4 text-hijauA3B18A font-bold mx-auto md:mx-0 pb-2">Area Of</span>
                        <span className="text-heading2 text-hijau344E41 font-bold mx-auto md:mx-0">Experties</span>
                        <span className="text-heading3 text-hijau344E41 font-semibold mt-12 pb-3">UI / UX Design</span>
                    </div>
                    <div id="figma" className="mt-[10px] ">
                        <div className="flex justify-between mb-1">
                            <span className="text-heading4 font-semibold text-hijauA3B18A">Figma</span>
                            <span className="text-heading4 font-semibold text-hijauA3B18A pb-3">80%</span>
                        </div>
                        <div className="w-full bg-abudad7cd rounded-full h-2 ">
                            <div  className="bg-hijau588157 h-2 rounded-full" style={{ width: '80%'}} ></div>
                        </div>
                    </div>
                    <div id="miro" className="mt-[20px]">
                        <div className="flex justify-between mb-1">
                            <span className="text-heading4 font-semibold text-hijauA3B18A">Miro</span>
                            <span className="text-heading4 font-semibold text-hijauA3B18A pb-3">75%</span>
                        </div>
                        <div className="w-full bg-abudad7cd rounded-full h-2 ">
                            <div className="bg-hijau588157 h-2 rounded-full" style={{ width: '75%'}} ></div>
                        </div>
                    </div>
                    <div id="miro" className="mt-[20px]">
                        <div className="flex justify-between mb-1">
                            <span className="text-heading4 font-semibold text-hijauA3B18A">Notion</span>
                            <span className="text-heading4 font-semibold text-hijauA3B18A pb-3">75%</span>
                        </div>
                        <div className="w-full bg-abudad7cd rounded-full h-2 ">
                            <div className="bg-hijau588157 h-2 rounded-full" style={{ width: '75%'}} ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="line" className="sm:row-span-1 md:col-span-1 flex justify-center items-center pl-20 pr-20 md:pb-8  md:pt-16 md:px-0">
                <div className="w-full md:w-[1px] bg-abu344e41 h-[1px] md:h-full"></div>
            </div>
            <div id="Web" className=" md:col-span-4 w-full h-full">
                <div className=" md:-ml-[80px] lg:-ml-[120px] px-20 py-20 md:px-20 md:pt-24 md:pb-32 lg:px-32 lg:pt-24 lg:pb-24">
                    <div className="flex flex-col -mt-[120px] md:mt-0">
                        <span className="text-heading4 text-hijauA3B18A font-bold mx-auto md:mx-0 invisible pb-2">Area Of</span>
                        <span className="text-heading2 text-hijau344E41 font-bold mx-auto md:mx-0 invisible">Experties</span>
                        <span className="text-heading3 text-hijau344E41 font-semibold mt-12 pb-3">Web Developing</span>
                    </div>
                    <div id="html" className="mt-[10px]">
                        <div className="flex justify-between mb-1">
                            <span className="text-heading4 font-semibold text-hijauA3B18A">Html </span>
                            <span className="text-heading4 font-semibold text-hijauA3B18A pb-3">65%</span>
                        </div>
                        <div className="w-full bg-abudad7cd rounded-full h-2 ">
                            <div className="bg-hijau588157 h-2 rounded-full" style={{ width: '65%'}} ></div>
                        </div>
                    </div>
                    <div id="miro" className="mt-[20px]">
                        <div className="flex justify-between mb-1">
                            <span className="text-heading4 font-semibold text-hijauA3B18A">CSS</span>
                            <span className="text-heading4 font-semibold text-hijauA3B18A pb-3">65%</span>
                        </div>
                        <div className="w-full bg-abudad7cd rounded-full h-2 ">
                            <div className="bg-hijau588157 h-2 rounded-full" style={{ width: '65%'}} ></div>
                        </div>
                    </div>
                    <div id="miro" className="mt-[20px]">
                        <div className="flex justify-between mb-1">
                            <span className="text-heading4 font-semibold text-hijauA3B18A">Javascript</span>
                            <span className="text-heading4 font-semibold text-hijauA3B18A pb-3">25%</span>
                        </div>
                        <div className="w-full bg-abudad7cd rounded-full h-2 ">
                            <div className="bg-hijau588157 h-2 rounded-full" style={{ width: '25%'}} ></div>
                        </div>
                    </div>
                </div>
            </div>            
        </div> */}