import { Image } from "react-bootstrap"

const styleImgBanner = {
  objectFit: "cover",
  height: "130px",
}

const Banner = ({ imagen, props }) => {
  console.log(imagen)
  console.log(props)
  return (
    <Image className="w-100" fluid src={`/img/${imagen}`} alt="Home banner" style={styleImgBanner} />
  )
}

export default Banner