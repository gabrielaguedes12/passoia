import Header from "../src/components/Header/Header.jsx";
import Banner from "../src/components/Banner/Banner.jsx";
import Carrossel from "../src/components/Carrossel/Carrossel.jsx";
import Lancamentos from "../src/components/Lancamentos/Lancamentos.jsx";
import Novidades from "../src/components/Novidades/Novidades.jsx";
import Footer from "../src/components/Footer/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <Carrossel />
      <Lancamentos />
      <Novidades />
      <Footer />

    </>
  );
}