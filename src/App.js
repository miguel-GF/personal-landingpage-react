import { Container } from "react-bootstrap";
import Banner from "./components/Banner";
// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Home";

const App = () => {
  return (
    <Container fluid className="px-0">
      <Banner />
      <Header />

      <Home />

      <Container fluid id="contact">
        <Footer />
      </Container>
    </Container>
  );
}

export default App