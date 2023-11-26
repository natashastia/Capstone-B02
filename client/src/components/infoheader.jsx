import React from "react";

const InfoHeader = () => {
  return (
    <div className="max-w-[1640px] mx-auto">
      <div className="h-screen relative">
        <div className="absolute w-full h-full text-gray-200 bg-black/40 flex flex-col justify-center">
          <h1 className="px-6 text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Sistem Pendeteksi
          </h1>
          <h1 className="px-6 text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Biji Kopi
          </h1>
          <div className="w-full lg:w-1/2 p-9 space-x-5 font-medium">
            <p>
              Didirikan oleh sekelompok penggemar kopi dengan cinta mendalam
              terhadap biji kopi, Mr. Bean lahir dari keinginan untuk meningkatkan
              perjalanan kopi bagi setiap penggemar, mulai dari petani hingga
              barista dan pecinta kopi. Dengan komitmen terhadap kualitas dan
              keberlanjutan, kami memulai misi untuk memanfaatkan kekuatan
              kecerdasan buatan dan pembelajaran mesin untuk meningkatkan
              seluruh siklus hidup biji kopi.
            </p>
          </div>
        </div>
        <img
          className="w-full h-screen object-cover"
          src="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Coffee"
        />
      </div>
    </div>
  );
};

export default InfoHeader;
