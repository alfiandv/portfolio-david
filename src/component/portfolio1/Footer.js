import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import logo from '../../img/port1/logo.png';

const Footer = () => {
    return (
        <div class=" w-full h-full flex justify-between items-center bg-[#ECECEC] mt-[50px] py-[50px] pl-[50px] pr-[50px] lg:pl-[100px] lg:pr-[100px] ">
            <div>
                <img src={logo} alt="" class="w-8/12"></img>
            </div>
            <div>
                <ul>
                    <li><a href="https://www.instagram.com/lentera_softhouse"><FontAwesomeIcon icon={faInstagram} /><span class="pl-5">lentera_softhouse</span></a></li> 
                    <li><a href="https://wa.me/+6285648153871"><FontAwesomeIcon icon={faWhatsapp} /><span class="pl-5">085648153871</span></a></li> 
                </ul>
            </div>
        </div>
    )
}

export default Footer