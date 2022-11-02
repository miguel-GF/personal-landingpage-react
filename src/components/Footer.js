import { Row, Col } from "react-bootstrap"

const quitarCaracteres = (telefono) => String(telefono).replace(/[^a-zA-Z0-9]/g, '')

const Footer = () => {
  return (
    <Row className="text-white bg-dark text-center py-4">
      <Col className="col-12 col-sm-4">
        © 2022 Derechos reservados
      </Col>
      <Col className="col-12 col-sm-4 pt-4 pt-sm-0">
        <h6>Links</h6>
        <a href="https://reactjs.org/" className="link-light text-decoration-none">
          <i className="bi bi-envelope pe-2"></i>
          React
        </a>
        <br />
        <a href="https://react-bootstrap.github.io/" className="link-light text-decoration-none">
          <img className="pe-2" src="/img/react_bootstrap_icon.svg" width={25} height={25} alt="" />
          React Bootstrap
        </a>
        <br />
        <a href="https://getbootstrap.com/" className="link-light text-decoration-none">
          <i className="bi bi-bootstrap pe-2"></i>
          Bootstrap
        </a>
      </Col>
      <Col className="col-12 col-sm-4 pt-4 pt-sm-0">
        <h6>Contacto</h6>
        <a href={`mailto:${process.env.REACT_APP_EMAIL ? process.env.REACT_APP_EMAIL : '#'}`} className="link-light text-decoration-none">
          <i className="bi bi-envelope pe-2"></i>
          {process.env.REACT_APP_EMAIL ? process.env.REACT_APP_EMAIL : '--'}
        </a>
        <br />
        <a href={`tel:${process.env.REACT_APP_TELEFONO ? quitarCaracteres(process.env.REACT_APP_TELEFONO) : '#'}`} className="link-light text-decoration-none">
          <i className="bi bi-telephone pe-2"></i>
          {process.env.REACT_APP_TELEFONO ? process.env.REACT_APP_TELEFONO : '--'}
        </a>
      </Col>
    </Row>
  )
}

export default Footer