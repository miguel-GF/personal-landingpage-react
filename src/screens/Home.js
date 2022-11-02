import { Container, Row, Col, Card, Accordion } from "react-bootstrap"
import CarouselProyects from "../components/CarouselProyects"
import SocialNetworksInfo from "../components/SocialNetworksInfo"
import { experienceItems } from "../dataLanding"

const Home = () => {
  return (

    <Container fluid className="px-3 px-lg-5 py-5">
      <Row>
        <Col lg={9}>
          <Card className="h-100">
            <Card.Body>
              <h3>Resumen</h3>
              <p>
                Feugiat scelerisque varius morbi enim nunc faucibus a. Sed risus ultricies tristique nulla aliquet enim tortor. Diam vel quam elementum pulvinar etiam. Iaculis urna id volutpat lacus laoreet non curabitur. Orci phasellus egestas tellus rutrum tellus. Vestibulum lectus mauris ultrices eros in cursus turpis. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Nulla facilisi cras fermentum odio eu feugiat. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Arcu bibendum at varius vel pharetra vel turpis. Vitae tortor condimentum lacinia quis vel.
              </p>

              <Container className="py-4">
                <CarouselProyects />
              </Container>

              <h3>Experiencia</h3>
              <div className="py-3">
                <Accordion defaultActiveKey="0">
                  {experienceItems.map(ei => 
                    <Accordion.Item key={ei.key} eventKey={ei.key}>
                      <Accordion.Header>{ei.title}</Accordion.Header>
                      <Accordion.Body>
                        {ei.description}
                      </Accordion.Body>
                    </Accordion.Item>
                  )}                  
                </Accordion>
              </div>

              <h3>Tecnologías</h3>
              <p>
                Feugiat scelerisque varius morbi enim nunc faucibus a. Sed risus ultricies tristique nulla aliquet enim tortor. Diam vel quam elementum pulvinar etiam. Iaculis urna id volutpat lacus laoreet non curabitur. Orci phasellus egestas tellus rutrum tellus. Vestibulum lectus mauris ultrices eros in cursus turpis. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Nulla facilisi cras fermentum odio eu feugiat. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Arcu bibendum at varius vel pharetra vel turpis. Vitae tortor condimentum lacinia quis vel.
              </p>

            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} className="pt-4 pt-lg-0">
          <SocialNetworksInfo />
        </Col>
      </Row>
    </Container>
  )
}

export default Home