import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { AuroraBackgroundDemo } from "./aurora";
import AllRoutes from "./AllRoutes";
import Navbar from "./components/ui/navbar";
import AboutUs from "./Pages/AboutUs";
import Sponsor from "./Pages/Sponsor";
import Home from "./Pages/Home";
function App() {
  return (
    <main className="">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
      {/* <Home /> */}
    </main>
  );
}

export default App;
Home;
