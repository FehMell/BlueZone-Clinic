import { HashRouter, Routes, Route } from "react-router-dom";
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
import Footer from "./components/footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (localStorage.getItem("scrollToDuvidas") === "true") {
      const section = document.getElementById("duvidas");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        localStorage.removeItem("scrollToDuvidas");
      }
    }

    if (localStorage.getItem("scrollToTratamentos") === "true") {
      const section = document.getElementById("tratamentos");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        localStorage.removeItem("scrollToTratamentos");
      }
    }
  }, []);

  return (
    <HashRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estetica" element={<Estetica />} />
        <Route path="/emagrecimento" element={<Emagrecimento />} />
        <Route path="/hipertrofia" element={<Hipertrofia />} />
        <Route path="/menopausa" element={<Menopausa />} />
        <Route
          path="/reposicao-hormonal-masculina"
          element={<ReposicaoHormonal />}
        />
        <Route path="/implantes-hormonais" element={<Implantes />} />
        <Route path="/terapias-injetaveis" element={<TerapiasInjt />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
 
      <Footer />
    </HashRouter>
  );
}

export default App;
