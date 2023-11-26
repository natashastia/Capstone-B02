import React from "react";
import Navbar from "../components/navbar.jsx";
import InfoHeader from "../components/infoheader.jsx";
import Article from "../components/article.jsx";
import Footer from "../components/footer.jsx";
import Table from "../components/table.jsx";

const Information = () => {
  return (
    <div>
      <Navbar />
      <InfoHeader />
      <Table />
      <Article />
      <Footer />
    </div>
  );
};

export default Information;
