import { Row, Col } from "react-bootstrap"

const quitarCaracteres = (telefono) => String(telefono).replace(/[^a-zA-Z0-9]/g, '')

const Footer = () => {
  return (
    <Row className="text-white bg-dark text-center py-4">
      <Col>
        © 2022
      </Col>
      <Col>
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