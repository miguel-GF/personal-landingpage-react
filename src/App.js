import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";

const App = () => {
  return (
    <Container fluid className="px-0">
      <Banner imagen="home_banner.jpg" />
      <Header />
      
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portafolio" element={<Portfolio />} />
        </Routes>
      </section>

      <Container fluid id="contact">
        <Footer />
      </Container>
    </Container>
  );
}

export default App