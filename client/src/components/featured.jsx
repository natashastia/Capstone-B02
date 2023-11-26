import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Featured = () => {
  const borderStyle = {
    borderColor: "#BE7656",
  };
  return (
    <div className="flex justify-center my-20 flex-col sm:flex-row items-center">
      <div
        style={borderStyle}
        className="w-3/4 sm:w-1/3 p-4 border m-2 shadow-lg"
      >
        <div className="text-center">
          <FontAwesomeIcon
            className="text-5xl mb-4 text-[#BE7656]"
            icon={faCircleCheck}
          />
          <h2 className="text-xl font-bold">Fitur 1</h2>
          <p>
            Ini adalah deskripsi yang menarik dan informatif. Ini adalah
            deskripsi yang menarik dan informatif.
          </p>
        </div>
      </div>
      <div
        style={borderStyle}
        className="w-3/4 sm:w-1/3 p-4 border m-2 shadow-lg"
      >
        <div className="text-center">
          <FontAwesomeIcon
            className="text-5xl mb-4 text-[#BE7656]"
            icon={faCircleCheck}
          />
          <h2 className="text-xl font-bold">Fitur 2</h2>
          <p>
            Ini adalah deskripsi yang menarik dan informatif. Ini adalah
            deskripsi yang menarik dan informatif.
          </p>
        </div>
      </div>
      <div
        style={borderStyle}
        className="w-3/4 sm:w-1/3 p-4 border m-2 shadow-lg"
      >
        <div className="text-center">
          <FontAwesomeIcon
            className="text-5xl mb-4 text-[#BE7656]"
            icon={faCircleCheck}
          />
          <h2 className="text-xl font-bold">Fitur 3</h2>
          <p>
            Ini adalah deskripsi yang menarik dan informatif. Ini adalah
            deskripsi yang menarik dan informatif.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
