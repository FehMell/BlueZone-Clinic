import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Estetica from "./pages/Estetica";
import Menu from "./components/menu";

function App() {
  return (
    <Router>
      {/* Menu aparece em todas as páginas */}
      <Menu />

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estetica" element={<Estetica />} />
      </Routes>
    </Router>
  );
}

export default App;
