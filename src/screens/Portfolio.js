import { Container } from "react-bootstrap"
import PortfolioSection from "../components/PortfolioSection"
import { portfolioItems } from "../dataLanding"

const Portfolio = () => {
  return (
    <Container fluid className="px-0 py-4">
      <Container>
        <h1>Portafolio</h1>
      </Container>

      {portfolioItems.map(item =>
        <PortfolioSection item={item} />
      )}

    </Container>
  )
}

export default Portfolio