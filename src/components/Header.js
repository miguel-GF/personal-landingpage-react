import { Navbar, Nav, Container, Image } from "react-bootstrap"

const Header = () => {
  return (
    <Navbar bg="light" expand="md" sticky="top" fixed="top" className="py-0">
      <Container>
        <Navbar.Brand href="#" className="p-0">
          <Image src="/img/logo.jpg" width={40} height={40} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu" className="justify-content-end">
          <Nav>
            <Nav.Link href="#">
              Inicio
            </Nav.Link>
            <Nav.Link href="#">
              Portafolio
            </Nav.Link>
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