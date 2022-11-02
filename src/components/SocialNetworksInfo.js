import { Card, Row, Col } from "react-bootstrap"

const SocialNetworksInfo = () => {
  return (
    <Card body className="bg-light text-center h-100">
      <Row>
        <h5 className="mb-4">Redes sociales</h5>
        <Col className="mb-4 mb-sm-0 mb-md-4">
          <Row className="">
            <Col sm={12}>
              <i className="bi bi-github pe-3"></i>
              Github
            </Col>
            <Col>
              <a href={`${process.env.REACT_APP_GITHUB ? process.env.REACT_APP_GITHUB : '#'}`} className="link-primary">
                {process.env.REACT_APP_GITHUB ? process.env.REACT_APP_GITHUB : '--'}
              </a>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col sm={12}>
              <i className="bi bi-linkedin pe-3"></i>
              Linkedin
            </Col>
            <Col>
              <a href={`${process.env.REACT_APP_LINKEDIN ? process.env.REACT_APP_LINKEDIN : '#'}`} className="link-primary">
                {process.env.REACT_APP_LINKEDIN ? process.env.REACT_APP_LINKEDIN : '--'}
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default SocialNetworksInfo