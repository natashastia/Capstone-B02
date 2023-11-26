import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar.jsx";
import Loading from "../components/loading.jsx";
import ErrorHandling from "../components/error.jsx";

const Scanning = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [detectionDone, setDetectionDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [processingTime, setProcessingTime] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setDetectionDone(false);
    setProcessingTime(null);
  };

  const handleUpload = async () => {
    setIsLoading(true);
    setError(null);

    if (!selectedFile) {
      setError("Silakan pilih gambar terlebih dahulu.");
      setIsLoading(false);
      return;
    }

    const start = performance.now();
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      const response = await axios.post(
        // Edit dengan IP pada server backend contoh:
        // "http://192.168.100.14:5000/predict",
        formData,
        config
      );

      if (
        !response.data ||
        !response.data.classifications ||
        response.data.classifications.length === 0
      ) {
        setError("Tidak terdapat biji kopi terdeteksi.");
      } else {
        setPredictions(response.data.classifications);
        setUploadedImage(response.data.image_data);
        setDetectionDone(true);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Error uploading image");
    } finally {
      const end = performance.now();
      const duration = (end - start) / 1000;
      setProcessingTime(duration);
      setIsLoading(false);
    }
  };

  const calculateTotalDefects = () => {
    if (predictions) {
      const bentukTidakWajarCount = predictions.filter(
        (result) => result === "Bentuk Tidak Wajar"
      ).length;

      const warnaTidakWajarCount = predictions.filter(
        (result) => result === "Warna Tidak Wajar"
      ).length;

      const kelainanLainCount = predictions.filter(
        (result) => result === "Kelainan Lain"
      ).length;

      const bentukTidakWajarWeight = 0.2;
      const warnaTidakWajarWeight = 1.0;
      const kelainanLainWeight = 1.0;

      const totalDefects =
        bentukTidakWajarCount * bentukTidakWajarWeight +
        warnaTidakWajarCount * warnaTidakWajarWeight +
        kelainanLainCount * kelainanLainWeight;

      return totalDefects;
    }
    return 0;
  };

  const calculatePercentage = (category) => {
    if (predictions) {
      const totalDefects = calculateTotalDefects();
      const categoryCount = predictions.filter(
        (result) => result === category
      ).length;
      return (categoryCount / totalDefects) * 100 || 0;
    }
    return 0;
  };

  const getQuality = (totalDefects) => {
    if (totalDefects <= 11) {
      return "Mutu 1";
    } else if (totalDefects <= 25) {
      return "Mutu 2";
    } else if (totalDefects <= 44) {
      return "Mutu 3";
    } else if (totalDefects <= 60) {
      return "Mutu 4a";
    } else if (totalDefects <= 80) {
      return "Mutu 4b";
    } else if (totalDefects <= 150) {
      return "Mutu 5";
    } else if (totalDefects <= 225) {
      return "Mutu 6";
    } else {
      return "Mutu tidak terdefinisi";
    }
  };

  return (
    <div className="text-center max-w-screen mx-auto">
      <Navbar />
      <div className="text-center text-black text-2xl font-bold mt-2">
        Sistem Pendeteksi Biji Kopi
      </div>
      {isLoading && <Loading />}
      {!detectionDone && (
        <div>
          <div className="text-center text-black text-xl mt-2">
            Unggah atau Ambil Foto di sini!
          </div>
          <div className="w-[375px] h-[375px] lg:w-[500px] lg:h-[500px] mt-4 bg-black mx-auto relative flex items-center justify-center">
            {selectedFile ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected"
                className="w-full h-full object-fit-cover"
              />
            ) : (
              <div className="text-[#D3D3D3] text-center">
                Belum ada foto yang ditambahkan.
              </div>
            )}
          </div>
          <label className="text-center inline-flex text-white rounded-lg cursor-pointer mt-5 bg-[#BE7656] px-9 py-2 text-lg hover:bg-[#e8a587] hover:text-black">
            Tambahkan Foto
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          <button
            onClick={handleUpload}
            className="text-center inline-flex text-white rounded-lg cursor-pointer m-2 bg-[#BE7656] px-5 py-2 text-lg hover:bg-[#e8a587] hover:text-black"
          >
            Mulai Deteksi
          </button>
        </div>
      )}
      <div>
        {detectionDone && uploadedImage && predictions.length > 0 && (
          <div>
            <h2 className="text-center text-black text-2xl font-bold">Hasil</h2>
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="result-image">
                <img
                  src={`data:image/png;base64,${uploadedImage}`}
                  alt="Uploaded"
                  className="w-full h-full object-fit-cover"
                />
              </div>
              <div className="result-statistics">
                <h1 className="text-2xl mb-2 font-bold lg:my-3">Statistik</h1>

                <h2 className="font-base text-base text-center">
                  Jumlah total cacat: {calculateTotalDefects()}
                  <br />
                  Jenis kualitas: {getQuality(calculateTotalDefects())}
                </h2>
                {processingTime !== null && (
                  <p className="text-base m-1">
                    Durasi: {processingTime.toFixed(2)}s
                  </p>
                )}
                <ul className="pl-6 list-disc">
                  <li>
                    Normal:{" "}
                    {calculatePercentage("Normal").toFixed(2).toString()}%
                  </li>
                  <li>
                    Bentuk Tidak Wajar:{" "}
                    {calculatePercentage("Bentuk Tidak Wajar")
                      .toFixed(2)
                      .toString()}
                    %
                  </li>
                  <li>
                    Warna Tidak Wajar:{" "}
                    {calculatePercentage("Warna Tidak Wajar")
                      .toFixed(2)
                      .toString()}
                    %
                  </li>
                  <li>
                    Kelainan Lain:{" "}
                    {calculatePercentage("Kelainan Lain").toFixed(2).toString()}
                    %
                  </li>
                </ul>
                <h1 className="text-2xl mb-2 font-bold lg:my-3">Deskripsi</h1>
                <ul className="pl-6 list-disc">
                  <li>Bentuk Tidak Wajar: Biji Pecah (Bobot: 0.2)</li>
                  <li>
                    Warna Tidak Wajar: Biji Hitam, Biji Cokelat (Bobot: 1.0)
                  </li>
                  <li>Normal: Biji Kopi Normal </li>
                  <li>
                    Kelainan Lain: Kopi Gelondong, Kulit Biji Kopi (Bobot: 1.0)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      {error && (
        <div>
          <ErrorHandling message={error} onClose={() => setError(null)} />
        </div>
      )}
    </div>
  );
};

export default Scanning;
