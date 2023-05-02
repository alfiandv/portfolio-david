import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarker} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import Copyright  from "../portfolio1/Copyright";


import React from "react";


const ContactMe = () => {
    

    return (
       <div>
            <div className=" min-w-[450px] md:w-full xl:w-full bg-hijauDAD7CD flex flex-col mt-[100px] px-10 md:pl-32 pt-12 pb-1 md:pr-32">
                <span className="text-heading3 font-bold mb-3">Hook me up!</span>
                <div className="flex-row">
                    <a href="mailto:davealfian72@gmail.com"><FontAwesomeIcon icon={faEnvelope} /><span className="pl-5">Davealfian72@gmail.com</span></a>
                </div>
                <div className="flex-row">
                    <a href="https://www.google.com/maps/place/Jl.+Dawuhan+No.19,+Banjarejo,+Kec.+Taman,+Kota+Madiun,+Jawa+Timur+63137/@-7.6536785,111.5320156,20z/data=!4m6!3m5!1s0x2e79be82899aac57:0x89d89feba2c8a3ea!8m2!3d-7.6536582!4d111.5320763!16s%2Fg%2F11rkm8wq8w"><FontAwesomeIcon icon={faMapMarker} /><span className="pl-5">Jl. Dawuhan Rt. 05 Rw.02 Banjarejo Taman Madiun</span></a>
                </div>
                <div className="flex-row">
                    <a href="https://www.linkedin.com/in/david-alfian-58b332247/"><FontAwesomeIcon icon={faLinkedin} /><span className="pl-5">David Alfian</span></a>
                </div>
                <div className="flex-row">
                    <a href="https://wa.me/+6289680335085"><FontAwesomeIcon icon={faWhatsapp} /><span className="pl-5">089680335085</span></a>
                </div> 
                <span className="text-center mt-4"><Copyright /></span>
            </div>
        </div>
    )
}

export default ContactMe