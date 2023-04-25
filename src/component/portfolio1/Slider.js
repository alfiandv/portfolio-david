
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import satu from '../../img/ui1/1.png';
import dua from '../../img/ui1/2.png';
import tiga from '../..//img/ui1/3.png';
import empat from '../..//img/ui1/4.png';
import lima from '../../img/ui1/5.png';
import enam from '../../img/ui1/6.png';
import tujuh from '../../img/ui1/7.png';
import delapan from '../../img/ui1/8.png';

// import required modules
import { Navigation, Pagination, } from "swiper";

export default function App() {
  return (
    <div className="mx-auto h-fit w-10/12">
      <Swiper 
      autoHeight={true}
      slidesPerGroupSkip={1}
      navigation={true} 
      pagination={{clickable: true,}}
      modules={[Navigation, Pagination]} 
      className="mySwiper">
        <SwiperSlide><img src={satu} alt='satu'></img></SwiperSlide>
        <SwiperSlide><img src={dua} alt='dua'></img></SwiperSlide>
        <SwiperSlide><img src={tiga} alt='tiga'></img></SwiperSlide>
        <SwiperSlide><img src={empat} alt='empat'></img></SwiperSlide>
        <SwiperSlide><img src={lima} alt='lima'></img></SwiperSlide>
        <SwiperSlide><img src={enam} alt='enam'></img></SwiperSlide>
        <SwiperSlide><img src={tujuh} alt='tujuh'></img></SwiperSlide>
        <SwiperSlide><img src={delapan} alt='delapan'></img></SwiperSlide>
      </Swiper>
    </div>
  );
}





// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import { Navigation } from 'swiper';

// import 'swiper/css';
// import 'swiper/css/bundle';
// import 'swiper/css/navigation';


// import satu from '../img/ui1/1.png';
// import dua from '../img/ui1/2.png';
// import tiga from '../img/ui1/3.png';
// import empat from '../img/ui1/4.png';
// import lima from '../img/ui1/5.png';
// import enam from '../img/ui1/6.png';
// import tujuh from '../img/ui1/7.png';
// import delapan from '../img/ui1/8.png';

// function Slider() {
//     return (
//         <div className='w-full h-[860px] m-auto py-16 px-4 overflow-hidden'>
//                 <Swiper
//                navigation={true} modules={[Navigation]}
//                 >
//                     <SwiperSlide>
//                         <div>
//                             <img src={satu} alt='satu'></img>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div>
//                             <img src={dua} alt='dua'></img>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div>
//                             <img src={tiga} alt='tiga'></img>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div>
//                             <img src={empat} alt='empat'></img>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div>
//                             <img src={lima} alt='lima'></img>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div>
//                             <img src={enam} alt='enam'></img>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div>
//                             <img src={tujuh} alt='tujuh'></img>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div>
//                             <img src={delapan} alt='delapan'></img>
//                         </div>
//                     </SwiperSlide>
//                 </Swiper>
//             </div>
//     )
// }

// export default Slider