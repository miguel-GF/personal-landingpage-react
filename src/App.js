import { Container, Row, Col, Card } from "react-bootstrap";
// Components
import Footer from "./components/Footer";
import SocialNetworksInfo from "./components/SocialNetworksInfo";

const App = () => {
  return (
    <Container fluid className="px-0">
      {/* BANNER TOP */}
      <Container fluid className="bg-light">
        <Row>
          <Col>
            Esto es mi NAVBAR
          </Col>
        </Row>
      </Container>
      {/* BANNER TOP */}
      <Container fluid className="bg-success">
        <Row>
          <Col>
            Esto es mi BANNER TOP va una imagen
          </Col>
        </Row>
      </Container>
      {/* INFORMACION */}
      <Container fluid className="px-3 px-lg-5">
        <Row>
          <Col lg={9}>
            <Card>
              <Card.Body>Hola información</Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <SocialNetworksInfo />
          </Col>
        </Row>
      </Container>
      {/* FOOTER */}
      <Container fluid>
        <Footer />
      </Container>
    </Container>
  );
}

export default App