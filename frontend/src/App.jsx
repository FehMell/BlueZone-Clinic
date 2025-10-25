import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Estetica from "./pages/Estetica";
import Menu from "./components/menu";
import Emagrecimento from "./pages/Emagrecimento";

function App() {
  return (
    <Router>
      
      <Menu />

     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estetica" element={<Estetica />} />
        <Route path="/emagrecimento" element={<Emagrecimento />} />
      </Routes>
    </Router>
  );
}

export default App;
