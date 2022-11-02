import { Carousel, Image } from "react-bootstrap"
import { carouselItems } from "../dataLanding"

const CarouselProyects = () => {
  return (
    <Carousel variant="dark" className="text-center justify-content-center">
      {carouselItems.map((it, index) => <Carousel.Item key={index} >
          <Image
            className="w-75"
            src={`/img/${it.image_name}`}
            alt={`${it.image_name}`}
          />

          <Carousel.Caption>
            <h3>{it.caption_title}</h3>
            <p>{it.caption_description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )}
    </Carousel>
  )
}

export default CarouselProyects