import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Types from "./pages/types";
import Equipment from "./pages/equipment";
import Safety from "./pages/safety";
import FAQ from "./pages/faq";

export default function NavbarMenu() {
  return (
    <div className="NavbarMenu">
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="home" element={<Home />} />
            <Route path="types" element={<Types />} />
            <Route path="equipment" element={<Equipment />} />
            <Route path="safety" element={<Safety />} />
            <Route path="faq" element={<FAQ />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}
