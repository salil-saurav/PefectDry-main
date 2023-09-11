import "./Banner.css";
import { useState } from "react";
import BannerImage from "../assets/Images/2.png";
import { Container } from "@mui/material";
import UserForm from "./UserForm";
import Thankyou from "./Thankyou";
import MainButton from "../MainButton";

export default function Banner() {
  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${BannerImage}) `,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "auto",
  };

  const [showThankyouPage, setShowThankyouPage] = useState(false);

  const handleSubmit = () => {
    setShowThankyouPage(true);
  };

  return (
    <>
      <div style={bannerStyle} className="banner-div">
        <Container className="banner">
          <div className="banner-text">
            <h1
              style={{
                color: "#fff",
                fontFamily: "'Prata', sans-serif",
                fontWeight: "400",
                marginBottom: "0",
              }}
            >
              Reliable Carpet and Upholstery Cleaning Service
            </h1>
            <p style={{ color: "#fff" }}>
              Is Just A Call Away We are equipped to tackle the most stubborn
              stains with 100% efficiency. We use eco-friendly, non-toxic and
              safe cleaning solutions to deliver satisfactory results. Get $10
              Off on Online Quote
            </p>
            <MainButton label="Request An Estimate Now" />
          </div>

          <div style={{ display: "grid", alignContent: "center" }}>
            {showThankyouPage ? (
              <Thankyou />
            ) : (
              <UserForm onSubmit={handleSubmit} />
            )}
          </div>
        </Container>
      </div>
    </>
  );
}
