import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/navbar.jsx";

const NotFoundPage = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex items-center justify-center h-3/4">
        <div className="text-center">
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className="text-6xl text-red-500 mb-4"
            style={{ color: "#be7656" }}
          />
          <h1 className="text-4xl font-bold mb-2">404 Not Found</h1>
          <p className="text-gray-600">Halaman yang anda cari tidak ada.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
