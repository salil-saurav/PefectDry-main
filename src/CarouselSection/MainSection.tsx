import Heading from "./Heading";
import Container from "@mui/material/Container";
// import Carousel from "./Carousel";
import SwiperCarousel from "./Swiper/SwiperCarousel";
export default function MainSection() {
  return (
    <section style={{ backgroundColor: "#282828" }} className="sectionTwo">
      <Container>
        <Heading />
        <SwiperCarousel />
      </Container>
    </section>
  );
}
