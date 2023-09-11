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
                  <h5>Wonderful Service</h5>
                  <span>Charlotte Robinson</span>
                  <p className="para">
                    Thank you so much for a wonderful carpet cleaning service. I
                    am so glad I called you before the housewarming party. Our
                    carpeted floors have never looked so pretty. Wouldn’t trust
                    anyone except you for the job. I will be back soon.
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
                  <h5>Brilliant Results</h5>
                  <span>Amelia Sugg</span>
                  <p className="para">
                    You guys are amazing! Thank you for the excellent job you
                    did cleaning my large cotton rug. My sofa also looks as good
                    as new. I would not hesitate to recommend you to friends and
                    family as my home has never felt so neat and clean before...
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
                  <h5>Nice & Fresh Smelling Carpets</h5>
                  <span>Mia Elizabeth Barnett</span>
                  <p className="para">
                    Carpet cleaners at Perfect Dry did a very good job with my
                    stained, soiled commercial carpets. After a grand office
                    party last week, I was upset seeing alcohol & food stains
                    all over the carpeted areas. But I am glad I found these
                    guys when I did...
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
                  <h5>Wonderful Service</h5>
                  <span>Charlotte Robinson</span>
                  <p className="para">
                    Thank you so much for a wonderful carpet cleaning service. I
                    am so glad I called you before the housewarming party. Our
                    carpeted floors have never looked so pretty. Wouldn’t trust
                    anyone except you for the job. I will be back soon.
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
                  <h5>Brilliant Results</h5>
                  <span>Amelia Sugg</span>
                  <p className="para">
                    You guys are amazing! Thank you for the excellent job you
                    did cleaning my large cotton rug. My sofa also looks as good
                    as new. I would not hesitate to recommend you to friends and
                    family as my home has never felt so neat and clean before...
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
                  <h5>Nice & Fresh Smelling Carpets</h5>
                  <span>Mia Elizabeth Barnett</span>
                  <p className="para">
                    Carpet cleaners at Perfect Dry did a very good job with my
                    stained, soiled commercial carpets. After a grand office
                    party last week, I was upset seeing alcohol & food stains
                    all over the carpeted areas. But I am glad I found these
                    guys when I did...
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
