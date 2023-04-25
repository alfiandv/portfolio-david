import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    const [nav, setNav] = useState (true)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div id="main_navbar" className="w-full block">
        <div id="navbar" className="  flex w-full md:w-[60%] text-xl justify-between items-center">
            <div className="flex items-center">
                <span className=" font-semibold pl-20 md:pl-20 xl:pl-30 my-8 md:my-12">DAA.</span>
            </div>
            <div className="flex items-center pr-20 md:pr-10 relative ">
                    <ul className="flex gap-x-8 font-semibold">
                        <li>
                            <a href="#main_aboutme" className="hidden lg:flex hover:text-hijauA3B18A">About Me</a>
                        </li>
                        <li>
                            <a href="#main_skills" className="hidden lg:flex hover:text-hijauA3B18A">Skills</a>
                        </li>
                        <li>
                            <a href="#main_academic-history" className="hidden lg:flex hover:text-hijauA3B18A">History</a>
                        </li>
                        <li>
                            <a href="#mainPortfolio" className="hidden lg:flex hover:text-hijauA3B18A">Portfolio</a>
                        </li>
                    </ul>
                <button onClick={handleNav} id="sidebar" name="sidebar" type="button" className=" lg:hidden">
                {nav ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faTimes}/>}
                </button>
                <nav id="sidebar" className={nav ?  'hidden' : 'absolute bg-white shadow-lg rounded-lg max-w-[250px] w-full right-6 top-[125%] z-[9999]'}>
                        <ul className="block">
                            <li className="group my-4 ">
                                <a href="#main_aboutme" className="text-heading4   mx-6 group-hover:text-hijau3A5A40">About Me</a>
                            </li>
                            <li className="group my-4">
                                <a href="#main_skills" className="text-heading4  mx-6 group-hover:text-hijau3A5A40">Skills</a>
                            </li>
                            <li className="group my-4">
                                <a href="#main_academic-history" className="text-heading4  mx-6 group-hover:text-hijau3A5A40">History</a>
                            </li>
                            <li className="group my-4">
                                <a href="#mainPortfolio"  className="text-heading4 mx-6 group-hover:text-hijau3A5A40">Portofolio</a>
                            </li>
                        </ul>
                    </nav>
            </div>
        </div>
    </div>
        
        
    )
}

export default Navbar