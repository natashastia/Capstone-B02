import React from "react";

const ArtikelItem = ({ imageUrl, judul, deskripsi, isImageFirst }) => {
  const createMarkup = () => {
    return { __html: deskripsi };
  };
  const hrStyle = {
    borderColor: "#BE7656",
  };
  return (
    <div className="p-0 m-0">
      <div className="mx-0">
        <div className="max-w-screen-xl mx-auto">
          <div
            className={`flex flex-wrap items-center ${
              isImageFirst ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-full md:w-1/2">
              <img src={imageUrl} alt={judul} className="w-full" />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-3xl font-bold mb-2">{judul}</h2>
              <hr style={hrStyle} className="my-4 border-b-2 w-12 " />
              <div dangerouslySetInnerHTML={createMarkup()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Article = () => {
  const artikelData = [
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
      judul: "Kopi",
      deskripsi:
        "Kopi adalah minuman yang dibuat dari biji kopi yang telah disangrai dan digiling. Biji kopi berasal dari pohon kopi dan memiliki rasa yang khas serta mengandung kafein, yang membuatnya menjadi minuman yang populer di seluruh dunia.",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/4264047/pexels-photo-4264047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      judul: "Pengolahan Kopi",
      deskripsi:
        "Proses pengolahan biji kopi melibatkan langkah-langkah berikut:\n\n<ol>\n<li>1. Pemetikan: Biji kopi dipetik saat sudah masak.</li>\n<li>2. Pemisahan Biji dari Buah: Buah kopi dipisahkan dari biji melalui berbagai metode.</li>\n<li>3. Fermentasi (Opsional): Biji kopi dapat difermentasi untuk membersihkannya.</li>\n<li>4. Pengeringan: Dilakukan dengan sinar matahari atau pengeringan mekanis.</li>\n<li>5. Pengupasan (Opsional): Biji kopi yang perlu diupas akan dikupas.</li>\n<li>6. Penggilingan: Biji kopi digiling menjadi bubuk kopi.</li>\n<li>7. Pembersihan dan Penyortiran: Biji kopi dibersihkan dan disortir.</li>\n</ol>",
    },
    {
      imageUrl:
        "https://www.astronauts.id/blog/wp-content/uploads/2022/08/Ini-Perbedaan-Kopi-Robusta-dan-Arabika-Penggemar-Kopi-Harus-Tahu-1200x675.jpg",
      judul: "Jenis Kopi",
      deskripsi:
        "Secara umum, terdapat dua jenis kopi, yaitu arabika dan robusta. Arabika memiliki rasa halus, asam, aroma bunga, dan rendah kafein, serta tumbuh di ketinggian tinggi. Sedangkan, robusta memiliki rasa kuat, pahit, aroma tanah, kacang, dan tinggi kafein, serta tumbuh di ketinggian lebih rendah dan lebih tahan penyakit.",
    },
  ];

  return (
    <div className="mx-0">
      {artikelData.map((artikel, index) => (
        <ArtikelItem key={index} {...artikel} isImageFirst={index % 2 === 0} />
      ))}
    </div>
  );
};

export default Article;
