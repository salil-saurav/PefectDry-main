import "./Gallery.css";
import { Container } from "@mui/material";
import One from "../assets/Images/Gallery/1.png";
import Two from "../assets/Images/Gallery/2.png";
import Three from "../assets/Images/Gallery/3.png";
import Four from "../assets/Images/Gallery/4.png";
import Five from "../assets/Images/Gallery/5.png";
import Six from "../assets/Images/Gallery/6.png";
import Vector from "../assets/Images/Our-customer/circle2.png";
import MainButton from "../MainButton";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Gallery() {
  return (
    <div style={{ backgroundColor: "#f0f0f0" }} className="gallery">
      <Container>
        <div className="gallery-main">
          <h1>Our Gallery</h1>
          <span className="vactor-0-2">
            <img src={Vector} alt="Vector" />
          </span>

          <div className="image-gallery">
            <div className="image-div">
              <img src={One} alt="Gallery Image 1" />
              <p className="hidden-p">Lorem ipsum, dolor sit amet</p>
            </div>
            <div className="image-div">
              <img src={Two} alt="Gallery Image 2" />
              <p className="hidden-p">Lorem ipsum, dolor sit amet</p>
            </div>
            <div className="image-div">
              <img src={Three} alt="Gallery Image 3" />
              <p className="hidden-p">Lorem ipsum, dolor sit amet</p>
            </div>
            <div className="image-div">
              <img src={Four} alt="Gallery Image 4" />
              <p className="hidden-p">Lorem ipsum, dolor sit amet</p>
            </div>
            <div className="image-div">
              <img src={Five} alt="Gallery Image 5" />
              <p className="hidden-p">Lorem ipsum, dolor sit amet</p>
            </div>
            <div className="image-div">
              <img src={Six} alt="Gallery Image 6" />
              <p className="hidden-p">Lorem ipsum, dolor sit amet</p>
            </div>
          </div>
          <MainButton label="View More" />
        </div>

        {/*         Media View @ 472          */}

        <div className="mediaGallerySwiper">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation
          >
            <SwiperSlide>
              <div className="image-div">
                <img src={One} alt="Gallery Image 1" />
                <p className="hidden-p">Lorem ipsum, dolor sit amet</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-div">
                <img src={Two} alt="Gallery Image 2" />
                <p className="hidden-p">Lorem ipsum, dolor sit amet</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-div">
                <img src={Three} alt="Gallery Image 3" />
                <p className="hidden-p">Lorem ipsum, dolor sit amet</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-div">
                <img src={Four} alt="Gallery Image 4" />
                <p className="hidden-p">Lorem ipsum, dolor sit amet</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-div">
                <img src={Five} alt="Gallery Image 5" />
                <p className="hidden-p">Lorem ipsum, dolor sit amet</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-div">
                <img src={Six} alt="Gallery Image 6" />
                <p className="hidden-p">Lorem ipsum, dolor sit amet</p>
              </div>
            </SwiperSlide>
            ╬
          </Swiper>
        </div>
      </Container>
    </div>
  );
}
