import React from "react";

const Pembukaan = () => {
    return (
        <div id="mainPembukaan"class="flex flex-col">
            <div id="aboutProject">
                <div class="mx-auto w-screen grid grid-rows-8 lg:grid-cols-8 text-hijau344E41 lg:px-[75px] xl:p-[100px]">
                    <div id="pembukaanKiri" class="row-span-4 lg:col-span-5 w-full h-full flex flex-col p-[50px] lg:px-0">
                        <span class="mb-[50px] text-center lg:text-start text-heading2 text-hijau344E41">E-Commerce Lentera Teknologi</span>
                        <span class="text-center lg:text-start text-base text-hijau344E41">" Merupakan penelitian Tugas Akhir tentang CV. Lentera Teknologi, dimana pihak Lentera Software house belum memiliki tempat untuk mewadahi aplikasi siap pakai untuk dijual ke pelanggan. "</span>
                    </div>
                    <div id="pembukaanKanan" class="row-span-4 lg:col-span-3 w-full h-full flex flex-col text-hijau344E41 lg:py-[50px] lg:px-10 xl:px-20 ">
                        <div id="roles" class="flex flex-col justify-center items-center lg:items-start p-[50px] lg:p-0 lg:pl-3 lg:pb-3">
                            <span class="mb-[50px] lg:mb-0 text-center text-heading3 lg:text-base lg:font-bold text-hijau344E41">Roles & Responsibilities</span>
                            <span class="text-base">" UI/UX Designer "</span>
                        </div>
                        <div id="roles" class="flex flex-col justify-center items-center lg:items-start p-[50px] lg:p-0 lg:pl-3 lg:pb-3" >
                            <span class="mb-[50px] lg:mb-0 text-center text-heading3 lg:text-base lg:font-bold text-hijau344E41">Scope & constraint</span>
                            <span>" Website E-Commerce "</span>
                        </div>
                        <div id="roles" class="flex flex-col justify-center items-center lg:items-start p-[50px] lg:p-0 lg:pl-3 lg:pb-3">
                        <span class="mb-[50px] lg:mb-0 text-center text-heading3 lg:text-base lg:font-bold text-hijau344E41">Tools</span>
                        <div class="flex justify-center items-center gap-10 lg:gap-5">
                            <span class="font-semibold text-hijau344E41">Figma</span>
                            <span class="font-semibold text-hijau344E41">PowerDesigner</span>
                            <span class="font-semibold text-hijau344E41">Draw.io</span>
                            <span class="font-semibold text-hijau344E41">UEQ</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div id="overview" class=" flex flex-col p-[50px] lg:px-[150px] xl:pt-0 xl:px-[200px]">
                    <span class="mb-[50px] text-center text-heading3 text-hijau344E41">OVERVIEW</span>
                    <span class="text-base text-center mb-[50px] mt-[50px] text-hijau344E41">" Merupakan penelitian Tugas Akhir tentang CV. Lentera Teknologi. Lentera Teknologi adalah perusahaan yang bergerak di bidang pengembangan aplikasi (software development). CV. Lentera Teknologi melayani pembuatan aplikasi website, desktop, dan android.  Terdapat dua jenis pesanan aplikasi, yaitu yang pertama adalah aplikasi proyek yang harus memerlukan analisa kebutuhan lebih dahulu sebelum membangun aplikasi, pemesanan aplikasi proyek ini, pelanggan bisa menghubungi Lentera Software House melalui email dan whatsapp, dan yang kedua adalah menjual aplikasi yang sudah jadi. "</span>
            </div>
        </div>
    </div>
    )
}

export default Pembukaan