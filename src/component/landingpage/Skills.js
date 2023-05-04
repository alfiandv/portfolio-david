import React from "react";

const Skills = () => {
    return (
        <div id="main_skills" className="mx-auto min-w-[450px] w-full grid md:grid-cols-9 sm:grid-rows-9 md:mt-[36px]">
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
        </div>
       
        
    )
}

export default Skills