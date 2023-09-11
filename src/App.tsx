import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import { useState, useEffect } from "react";
import Loading from "./Loading";
import "./App.css";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import About from "./About/About";
import MainSection from "./CarouselSection/MainSection";
import ChooseUs from "./ChooseUs/ChooseUs";
import RedBanner from "./Banner/RedBanner";
import Gallery from "./Gallery/Gallery";
import SwiperCarouselTwo from "./CarouselSection/Swiper/SwiperCarouselTwo";
import Map from "./Map";
import Footer from "./Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setShowContent(true);
      }, 100);
    }
  }, [loading]);

  // Header Visibility

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down, hide the header
      setIsHeaderVisible(false);
    } else {
      // Scrolling up, show the header
      setIsHeaderVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <CssBaseline />

      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className={`content-container ${showContent ? "show" : ""}`}>
            <Container>
              <Header isVisible={isHeaderVisible} />
            </Container>
            <Banner />
            <About />
            <MainSection />
            <ChooseUs />
            <RedBanner />
            <Gallery />
            <SwiperCarouselTwo />
            <Map />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
