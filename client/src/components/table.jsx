import React from "react";

const Table = () => {
  const mutuData = [
    { mutu: "Mutu 1", persyaratan: "Jumlah nilai cacat maksimum 11" },
    { mutu: "Mutu 2", persyaratan: "Jumlah nilai cacat 12 sampai dengan 25" },
    { mutu: "Mutu 3", persyaratan: "Jumlah nilai cacat 26 sampai dengan 44" },
    { mutu: "Mutu 4a", persyaratan: "Jumlah nilai cacat 45 sampai dengan 60" },
    { mutu: "Mutu 4b", persyaratan: "Jumlah nilai cacat 61 sampai dengan 80" },
    { mutu: "Mutu 5", persyaratan: "Jumlah nilai cacat 81 sampai dengan 150" },
    { mutu: "Mutu 6", persyaratan: "Jumlah nilai cacat 151 sampai dengan 225" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center font-bold text-2xl">
        Tabel Peringkat Mutu Biji Kopi Atas Dasar Jumlah Nilai Cacat
      </h1>
      <table className="min-w-full my-3 bg-white border border-gray-300 divide-y divide-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border border-gray-300">Mutu</th>
            <th className="py-2 px-4 border border-gray-300">Persyaratan</th>
          </tr>
        </thead>
        <tbody>
          {mutuData.map((data, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="py-2 px-4 border border-gray-300">{data.mutu}</td>
              <td className="py-2 px-4 border border-gray-300">
                {data.persyaratan}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <p className="text-sm text-center">
          Source: Standar Nasional Indonesia Biji kopi ICS 67.140.20 Badan
          Standardisasi Nasional
          <a
            href="https://www.cctcid.com/wp-content/uploads/2018/08/SNI_2907-2008_Biji_Kopi-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline pl-1"
          >
            [Online]
          </a>
        </p>
      </div>
    </div>
  );
};

export default Table;
