import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Estetica from "./pages/Estetica";
import Menu from "./components/menu";
import Emagrecimento from "./pages/Emagrecimento";
import Hipertrofia from "./pages/Hipertrofia";
import Menopausa from "./pages/Menopausa";
import ReposicaoHormonal from "./pages/ReposicaoHormonal";
import Implantes from "./pages/Implantes";
import TerapiasInjt from "./pages/TerapiasInjt";
import Sobre from "./pages/Sobre";
import Footer from "./components/footer"

function App() {
  return (
    <Router>
      
      <Menu />

     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estetica" element={<Estetica />} />
        <Route path="/emagrecimento" element={<Emagrecimento />} />
        <Route path="/hipertrofia" element={<Hipertrofia />} />
        <Route path="/menopausa" element={<Menopausa />} />
        <Route path="/reposicao-hormonal-masculina" element={<ReposicaoHormonal />} />
        <Route path="/implantes-hormonais" element={<Implantes />} />
        <Route path="/terapias-injetaveis" element={<TerapiasInjt />} />
        <Route path="/sobre" element={<Sobre />} />


      </Routes>
      
      < Footer/>
    </Router>
  );
}

export default App;
