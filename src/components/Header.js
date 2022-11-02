import { Navbar, Nav, Container, Image } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const Header = () => {
  return (
    <Navbar bg="light" expand="md" sticky="top" fixed="top" className="py-0">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="p-0">
            <Image src="/img/logo.jpg" width={40} height={40} alt="" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu" className="justify-content-end">
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>
                Inicio
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portafolio">
              <Nav.Link>
                Portafolio
              </Nav.Link>
            </LinkContainer>
            <Nav.Link href="#contact">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header