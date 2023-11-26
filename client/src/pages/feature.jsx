import React from "react";
import Barista from "../assets/barista.png";
import Worker from "../assets/worker.png";
import Office from "../assets/office-worker.png";
import Photo from "../assets/take-a-photo.png";
import Detection from "../assets/recognition.png";

const Feature = () => {
  return (
    <div className="feature-section" id="section-2" name="feature">
      <div className="feature-item">
        <div className="feature-content">
          <img
            src={Barista}
            className="feature-icon"
            alt="Coffee stickers created by paulalee - Flaticon"
          />
          <h1 className="feature-title">Apa Itu Mr. Bean?</h1>
          <p className="feature-description">
            Mr. Bean adalah aplikasi canggih yang dirancang khusus untuk para
            penggemar kopi. Dengan teknologi mutakhir, aplikasi ini dapat
            mendeteksi kualitas biji kopi, termasuk kondisi normal, bentuk yang
            tidak biasa, warna yang tidak biasa, dan kelainan lainnya.
          </p>
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-content">
          <img
            src={Office}
            className="feature-icon"
            alt="Coffee stickers created by paulalee - Flaticon"
          />
          <h1 className="feature-title">Mengapa Mr. Bean?</h1>
          <p className="feature-description">
            Aplikasi ini membantu Anda menghindari biji kopi berkualitas rendah,
            memastikan Anda hanya menggunakan yang terbaik. Dengan deteksi yang
            akurat, Anda akan selalu menemukan biji kopi berkualitas tinggi
            sesuai standar Anda. Jangan pernah mengorbankan rasa kopi Anda lagi.
          </p>
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-content">
          <img
            src={Worker}
            className="feature-icon"
            alt="Coffee stickers created by paulalee - Flaticon"
          />
          <h1 className="feature-title">Cara Penggunaan Mr. Bean</h1>
          <p className="feature-description">
            <div className="flex items-center">
              <img
                src={Photo}
                className="h-[75px] "
                alt="Take a pic icons created by Dooder - Flaticon"
              ></img>
              Ambil foto atau unggah gambar biji kopi.
            </div>
            <div className="flex items-center">
              Identifikasi kualitas biji kopi.
              <img
                src={Detection}
                className="h-[75px] "
                alt="Take a pic icons created by Dooder - Flaticon"
              ></img>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
