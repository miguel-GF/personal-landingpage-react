import { Image } from "react-bootstrap"

const styleImgBanner = {
  objectFit: "cover",
  height: "130px",
}

const Banner = () => {
  return (
    <Image className="w-100" fluid src="/img/home_banner.jpg" alt="Home banner" style={styleImgBanner} />
  )
}

export default Banner