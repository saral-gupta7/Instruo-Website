import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Sponsor from "./Pages/Sponsor";
import Home from "./Pages/Home";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/sponsor" element={<Sponsor />} />
    </Routes>
  );
};

export default AllRoutes;
