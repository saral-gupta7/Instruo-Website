import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import Navbar from "./Navbar";
function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </main>
  );
}

export default App;
