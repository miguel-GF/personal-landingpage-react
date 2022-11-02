import { Container, ListGroup } from "react-bootstrap"
import Banner from "./Banner"

const PortfolioSection = ({ item }) => {
  return (
    <div className="mt-4" key={item.key}>
      <Banner imagen={item.image_banner} />
      <Container className="mt-3">
        <p>{item.description}</p>
        <ListGroup>
          {item.detailList.map((pt, index) => 
            <ListGroup.Item key={index}>
              {pt}
            </ListGroup.Item>
          )}
        </ListGroup>
      </Container>
    </div>
  )
}

export default PortfolioSection