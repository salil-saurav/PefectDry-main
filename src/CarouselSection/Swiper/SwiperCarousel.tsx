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
                  <h5>Flood Damage Restroration Services In Auckland</h5>
                  <p>
                    While New Zealand is a beautiful country, it can also be
                    prone to some weather which can cause flooding and water
                    damage.
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
                  <h5>Curtain Cleaning Specialists Auckland</h5>
                  <p>
                    Perfect Dry is your local upholstery and curtain specialist
                    Auckland having years of experience, knowledge, and a high
                    success rate with customers.
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
                  <h5>Commercial Carpet Cleaning Services Auckland</h5>
                  <p>
                    Commercial rugs are often subjected to high traffic, leaving
                    behind accumulated dirt, dust, grime, stubborn stains, and
                    unpleasant odours.
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
                  <h5>Flood Damage Restroration Services In Auckland</h5>
                  <p>
                    While New Zealand is a beautiful country, it can also be
                    prone to some weather which can cause flooding and water
                    damage.
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
                  <h5>Curtain Cleaning Specialists Auckland</h5>
                  <p>
                    Perfect Dry is your local upholstery and curtain specialist
                    Auckland having years of experience, knowledge, and a high
                    success rate with customers.
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
                  <h5>Commercial Carpet Cleaning Services Auckland</h5>
                  <p>
                    Commercial rugs are often subjected to high traffic, leaving
                    behind accumulated dirt, dust, grime, stubborn stains, and
                    unpleasant odours.
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
