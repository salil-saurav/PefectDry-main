// src/components/SwiperComponent.js
import cardImageOne from "../../assets/Images/food.png";
import cardImageTwo from "../../assets/Images/curtain.png";
import cardImageThree from "../../assets/Images/commercial.png";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@mui/material";
import MainButton from "../../MainButton";
import "./SwiperCarousel.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperCarousel = () => {
  const breakpointsswipe = {
    // When window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // When window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // When window width is >= 768px
    770: {
      slidesPerView: 3,
    },
  };
  return (
    <div className="swiperDiv">
      <Container>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          loop={true}
          breakpoints={breakpointsswipe}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="item">
              <div className="card-1 carousel-cards">
                <img
                  className="card-img"
                  src={cardImageOne}
                  alt="card-one-image"
                />
                <div className="card-body ">
                  <h5>Lorem ipsum dolor, sit amet </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente dolore quas provident repudiandae eius perspiciatis
                    cumque totam
                  </p>
                  <a className="read-more" href="#">
                    Read More <span>&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="card-2 carousel-cards">
                <img
                  className="card-img"
                  src={cardImageTwo}
                  alt="card-one-image"
                />
                <div className="card-body ">
                  <h5>Lorem ipsum dolor, sit amet</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente dolore quas provident repudiandae eius perspiciatis
                    cumque totam
                  </p>
                  <a className="read-more" href="#">
                    Read More <span>&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="card-3 carousel-cards">
                <img
                  className="card-img"
                  src={cardImageThree}
                  alt="card-one-image"
                />
                <div className="card-body">
                  <h5>Lorem ipsum dolor, sit amet</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente dolore quas provident repudiandae eius perspiciatis
                    cumque totam
                  </p>
                  <a className="read-more" href="#">
                    Read More <span>&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="card-1 carousel-cards">
                <img
                  className="card-img"
                  src={cardImageOne}
                  alt="card-one-image"
                />
                <div className="card-body ">
                  <h5>Lorem ipsum dolor, sit amet</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente dolore quas provident repudiandae eius perspiciatis
                    cumque totam
                  </p>
                  <a className="read-more" href="#">
                    Read More <span>&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="card-2 carousel-cards">
                <img
                  className="card-img"
                  src={cardImageTwo}
                  alt="card-one-image"
                />
                <div className="card-body ">
                  <h5>Lorem ipsum dolor, sit amet</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente dolore quas provident repudiandae eius perspiciatis
                    cumque totam
                  </p>
                  <a className="read-more" href="#">
                    Read More <span>&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="card-3 carousel-cards">
                <img
                  className="card-img"
                  src={cardImageThree}
                  alt="card-one-image"
                />
                <div className="card-body">
                  <h5>Lorem ipsum dolor, sit amet</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente dolore quas provident repudiandae eius perspiciatis
                    cumque totam
                  </p>
                  <a className="read-more" href="#">
                    Read More <span>&#8594;</span>
                  </a>
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
        </Swiper>
        <div className="carousel-btn">
          <MainButton label="View All Services" />
        </div>
      </Container>
    </div>
  );
};

export default SwiperCarousel;
