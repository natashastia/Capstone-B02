import React from "react";
import photo1 from "../assets/photo-1.jpg";
import photo2 from "../assets/photo-2.jpg";

function AboutUs() {
  return (
    <div
      id="section-3"
      name="aboutus"
      className="min-h-screen w-full overflow-hidden flex flex-col justify-center"
    >
      <div className="flex flex-col justify-center items-center pt-10">
        <div className="text-2xl md:text-4xl lg:text-5xl font-bold">
          About Us
        </div>
        <div className="w-11/12 md:w-2/3 lg:w-1/2 mt-5 md:mt-10 text-md md:text-xl lg:text-2xl text-center">
          Hallo! Kami adalah sekelompok mahasiswa dari Departemen Teknik Elektro
          dan Teknologi Informasi Universitas Gadjah Mada, yang sedang bekerja
          pada proyek Capstone kami tahun 2023. Kami memiliki minat yang besar
          terhadap kopi dan teknologi, dan kami telah menciptakan aplikasi
          pintar untuk membantu para produsen dan pecinta kopi. Aplikasi kami
          menggunakan teknologi pintar untuk menemukan biji kopi terbaik.
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="border-4 border-[#BE7656] border-rounded overflow-hidden">
          <img
            src={photo1}
            alt="Coffee 1"
            className="w-[250] h-[170px] px lg:w-[400px] lg:h-[320px]"
          />
        </div>
        <div className="border-4 border-[#BE7656] border-rounded overflow-hidden">
          <img
            src={photo2}
            alt="Coffee 2"
            className="w-[250] h-[170px] lg:w-[400px] lg:h-[320px]"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
