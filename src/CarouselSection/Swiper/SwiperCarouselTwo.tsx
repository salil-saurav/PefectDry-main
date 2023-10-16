import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@mui/material";
import "./SwiperCarousel.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import One from "../../assets/Images/Our-customer/1.png";
import Two from "../../assets/Images/Our-customer/2.png";
import Three from "../../assets/Images/Our-customer/3.png";
import HeadingTwo from "../HeadingTwo";
import "./SwiperCarouselTwo.css";

const SwiperCarouselTwo = () => {
  const breakpointsswipe = {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    770: {
      slidesPerView: 3,
    },
  };

  const [centeredSlide, setCenteredSlide] = useState(true);

  const handleResize = () => {
    if (window.innerWidth <= 786 && centeredSlide) {
      setCenteredSlide(false);
    } else if (window.innerWidth > 786 && !centeredSlide) {
      setCenteredSlide(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [centeredSlide]);

  return (
    <div className="swiperDivTwo">
      <Container>
        <HeadingTwo />
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          centeredSlides={centeredSlide}
          loop={true}
          breakpoints={breakpointsswipe}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="item">
              <div className="card-b carousel-cards">
                <img className="card-b-img" src={One} alt="card-one-image" />
                <div className="card-body">
                  <h5>Lorem ipsum dolor</h5>
                  <span>sit amet</span>
                  <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente dolore quas provident repudiandae eius perspiciatis
                    cumque totam Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sapiente dolore quas provident repudiandae
                    eius perspiciatis cumque totam
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="card-b carousel-cards">
                <img className="card-b-img" src={Two} alt="card-one-image" />
                <div className="card-body">
                  <h5>Lorem ipsum dolor</h5>
                  <span>sit amet</span>
                  <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente dolore quas provident repudiandae eius perspiciatis
                    cumque totam Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sapiente dolore quas provident repudiandae
                    eius perspiciatis cumque totam
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="carousel-cards card-b">
                <img className="card-b-img" src={Three} alt="card-one-image" />
                <div className="card-body ">
                  <h5>Lorem ipsum dolor</h5>
                  <span>sit amet</span>
                  <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente dolore quas provident repudiandae eius perspiciatis
                    cumque totam Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sapiente dolore quas provident repudiandae
                    eius perspiciatis cumque totam
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="card-b carousel-cards">
                <img className="card-b-img" src={One} alt="card-one-image" />
                <div className="card-body">
                  <h5>Lorem ipsum dolor</h5>
                  <span>sit amet</span>
                  <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente dolore quas provident repudiandae eius perspiciatis
                    cumque totam Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sapiente dolore quas provident repudiandae
                    eius perspiciatis cumque totam
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="card-b carousel-cards">
                <img className="card-b-img" src={Two} alt="card-one-image" />
                <div className="card-body">
                  <h5>Lorem ipsum dolor</h5>
                  <span>sit amet</span>
                  <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente dolore quas provident repudiandae eius perspiciatis
                    cumque totam Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sapiente dolore quas provident repudiandae
                    eius perspiciatis cumque totam
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="carousel-cards card-b">
                <img className="card-b-img" src={Three} alt="card-one-image" />
                <div className="card-body ">
                  <h5>Lorem ipsum dolor</h5>
                  <span>sit amet</span>
                  <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente dolore quas provident repudiandae eius perspiciatis
                    cumque totam Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sapiente dolore quas provident repudiandae
                    eius perspiciatis cumque totam
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default SwiperCarouselTwo;
