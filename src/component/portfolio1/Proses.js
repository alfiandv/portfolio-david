import React from "react";

import analisisKompetitor from '../../img/port1/analisisKompetitor.png';
import hasilAnalisis from '../../img/port1/hasilAnalisis.png';
import kuisioner from '../../img/port1/kuisioner.png';
import userPersona from '../../img/port1/userPersona.png';
import kebutuhanPengguna from '../../img/port1/kebutuhanPengguna.png';

const Proses = () => {
    return (
        <div id="problemDefinition" class="flex flex-col p-[50px] lg:px-[150px] xl:pt-0 xl:px-[200px]">
            <span class="mb-[50px] text-center text-heading3 text-hijau344E41">Deklarasi Asumsi</span>
            <div class="flex flex-col ">
                <span class="mb-[50px] mt-[50px] font-normal text-heading4 text-hijau344E41">1. Masalah</span>
                <span class="text-base text-start mb-[50px] mt-[50px] text-hijau344E41">Tidak mempunyai website khusus e-commerce untuk menjual aplikasi siap pakai dan juga layanan membuat aplikasi proyek. "</span>
            </div>
            <div class="flex flex-col">
                <span class="mb-[50px] mt-[50px] text-heading4 text-hijau344E41">2. Analisis Tren </span>
                <img src={analisisKompetitor} alt="analisisKompetitor" class="mb-[50px] mt-[50px] mx-auto w-9/12 xl:w-6/12"></img>
                <span class="text-base text-start mb-[50px] mt-[50px] text-hijau344E41">" untuk mengetahui karakteristik suatu website
                    e-commerce yang khusus menjual software maka dilakukan survey website ecommerce yang khusus menjual software yang sudah ada di pasar dan mengerti fitur fitur apa saja yang ditawarkan serta informasi apa saja yang diberikan."</span>
                <img src={hasilAnalisis} alt="" class="mb-[50px] mt-[50px] mx-auto w-9/12 xl:w-6/12"></img>
                <span class="text-base text-start mb-[50px] mt-[50px] text-hijau344E41">" dari analisis konpetitor yang sudah dilakukan, didapatkan kebutuhan informasi dan fitur yang ada di website e-commerce yang khusus menjual aplikasi"</span>
            </div>
            <div class="flex flex-col">
                <span class="mb-[50px] mt-[50px] text-heading4 text-hijau344E41">3. Survey Kebutuhan Pengguna </span>
                <img src={kuisioner} alt="analisisKompetitor" class="mb-[50px] mt-[50px] mx-auto w-9/12 xl:w-6/12"></img>
                <span class="text-base text-start mb-[50px] mt-[50px] text-hijau344E41">" dilakukan survey menggunakan kuesioner untuk melakukan konfirmasi fitur fitur dan kebutuhan informasi pengguna serta mengumpulkan saran saran yang diberikan oleh responden. Hasil survey ini digunakan untuk membuat User Persona dan mendefinisikan kebutuhan pengguna"</span>
                <img src={userPersona} alt="analisisKompetitor" class="mb-[50px] mt-[50px] mx-auto w-9/12 xl:w-6/12"></img>
                <img src={kebutuhanPengguna} alt="a" class="mb-[50px] mt-[50px] mx-auto w-9/12 xl:w-6/12"></img>
            </div>
        </div>
    
    )
}

export default Proses