import { Routes, Route } from "react-router-dom";
import "./index.css";
import Landing from "./pages/landing.jsx";
import NotFound from "./pages/notfound.jsx";
import Information from "./pages/information";
import Scanning from "./pages/scan.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/info" element={<Information />} />
        <Route path="/scan" element={<Scanning />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
