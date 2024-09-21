import { BrowserRouter as Router } from "react-router-dom";
// import { AuroraBackgroundDemo } from "./aurora";
import AllRoutes from "./AllRoutes";
import Navbar from "./components/ui/Navbar";
import Home from "./Pages/Home";
function App() {
  return (
    <main className="">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </main>
  );
}

export default App;
Home;
