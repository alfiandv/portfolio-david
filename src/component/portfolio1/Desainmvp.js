import React from 'react';

import Slider from './Slider';
import storyBoard from '../../img/port1/storyBoard.png';
import siteMap from '../../img/port1/siteMap.png';
import wireFrame from '../../img/port1/wireFrame.png';
import ueq from '../../img/port1/ueq.png';


const Desainmvp = () => {
    return (
        
        <div id="desainMVP" class="w-full h-full min-w-[475px] flex flex-col p-[50px] lg:px-[150px] xl:pt-0 xl:px-[200px]">
            <span class="mb-[50px] text-center text-heading3 text-hijau344E41">Desain MVP</span>
            <div class="flex flex-col ">
                <span class="mb-[50px] mt-[50px] font-normal text-heading4 text-hijau344E41">1. StoryBoard</span>
                <img src={storyBoard} alt="" class="mb-[50px] mt-[50px] mx-auto w-9/12 xl:w-6/12"></img>
                <span class="text-base text-start mb-[50px] mt-[50px] text-hijau344E41">" Gambar diatas merupakan storyboard yaitu alur yang akan dilalui user secara keseluruhan. "</span>
            </div>
            <div class="flex flex-col ">
                <span class="mb-[50px] mt-[50px] font-normal text-heading4 text-hijau344E41">2. SiteMap</span>
                <img src={siteMap} alt="" class="mb-[50px] mt-[50px] mx-auto w-9/12"></img>
                <span class="text-base text-start mb-[50px] mt-[50px] text-hijau344E41">" Berdasarkan kebutuhan user maka dibuat site map untuk menentukan apa saja yang ada di dalam website e-commerce. "</span>
            </div>
            <div class="flex flex-col ">
                <span class="mb-[50px] mt-[50px] font-normal text-heading4 text-hijau344E41">3. Wireframe</span>
                <img src={wireFrame} alt="" class="mb-[50px] mt-[50px] mx-auto w-10/12"></img>
                <span class="text-base text-start mb-[50px] mt-[50px] text-hijau344E41">" Berdasarkan kebutuhan user maka dibuat site map untuk menentukan apa saja yang ada di dalam website e-commerce. "</span>
            </div>
            <div class="flex flex-col ">

                <span class="mb-[50px] mt-[50px] font-normal text-heading4 text-hijau344E41">4. Prototype</span>
                <Slider />
            </div>
            <div class="flex flex-col ">
                <span class="mb-[50px] mt-[50px] font-normal text-heading4 text-hijau344E41">5. Evaluasi Usabilitas UEQ</span>
                <span class="text-base text-start mb-[50px] mt-[50px] text-hijau344E41">" Evaluasi usability dengan mengunakan metode User Experience Questionnaire (UEQ) dengan menyebarkan kuisoner kepada calon pengguna untuk melihat penilaian dari calon pengguna kepada desain yang sudah dibuat. "</span>
                <img src={ueq} alt="" class="mb-[50px] mt-[50px] mx-auto w-5/12 xl:w-3/12"></img>
                <span class="text-base text-start mb-[50px] mt-[50px] text-hijau344E41">" Berdasarkan dari hasil, dapat diketahui hasil akhir dari perhitungan UEQ. Nilai skala “daya tarik” mendapat nilai Mean 1,210. Niai skala “kejelasan” mendapat nilai Mean 1,149. Nilai skala “efisiensi” mendapat nilai Mean 1,083. Nilai skala “ketepatan” mendapat nilai Mean 1,220. Nilai skala “stimulasi” mendapat nilai Mean 1,107. Nilai skala “kebaruan” mendapat nilai Mean 1,210. Dapat dilihat bahwa semua skala evalulasi sudah memenuhi poin kriteria yaitu diatas 0,8 yang berarti nilai akhir diatas rata-rata(above average). "</span>
            </div>
        </div>
    )
}

export default Desainmvp