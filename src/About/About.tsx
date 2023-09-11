import MainButton from "../MainButton";
import aboutImage from "../assets/Images/3.png";
import "./About.css";
import { Container } from "@mui/material";
import Vactor0 from "../assets/Images/5.png";
import Vactor1 from "../assets/Images/4.png";
import Vactor2 from "../assets/Images/6.png";

export default function About() {
  return (
    <>
      <Container>
        <div className="service">
          <div className="picture-service">
            <img src={aboutImage} alt="Service-Image" />
          </div>
          <span className="vactor-0">
            <img src={Vactor0} alt="Vactor" />
          </span>

          <div className="about">
            <span className="vactor-1">
              <img src={Vactor1} alt="Vactor" />
            </span>
            <h1
              style={{
                fontFamily: "Prata",
                fontWeight: "400",
                marginTop: "-1rem",
                marginBottom: "0",
              }}
            >
              About Perfect Dry Services
            </h1>

            <p>
              Professional Cleaners for Carpet, Rug, Couch Sofa Cleaning in
              Auckland Carpets are a great addition to any home as they add
              beauty, comfort, and warmth. However, they can easily attract
              dirt, germs, and even dust mites, if not cleaned regularly. This
              is why you need to invest in proper carpet cleaning services at
              least twice a year.
            </p>
            <p>
              We at Perfect Dry, provide professional residential carpet
              cleaning services in Auckland that keep your carpets fresh and
              clean. All our carpet cleaners are highly trained and well
              equipped with the latest equipment and safe cleaning products to
              ensure that you get the best results for your precious carpets.
            </p>
            <MainButton label="Request An Estimate Now" />
            <span className="vactor-2">
              <img src={Vactor2} alt="Vactor" />
            </span>
          </div>
        </div>

        {/*       media view @ 786       */}

        <div className="media-service">
          <h1>About Perfect Dry Services</h1>

          <div className="media-body">
            <div className="picture-service">
              <img src={aboutImage} alt="Service-Image" />
            </div>
            <span className="vactor-0">
              <img src={Vactor0} alt="Vactor" />
            </span>

            <div className="about">
              <span className="vactor-1">
                <img src={Vactor1} alt="Vactor" />
              </span>

              <p>
                Professional Cleaners for Carpet, Rug, Couch Sofa Cleaning in
                Auckland Carpets are a great addition to any home as they add
                beauty, comfort, and warmth. However, they can easily attract
                dirt, germs, and even dust mites, if not cleaned regularly. This
                is why you need to invest in proper carpet cleaning services at
                least twice a year.
              </p>
              <p>
                We at Perfect Dry, provide professional residential carpet
                cleaning services in Auckland that keep your carpets fresh and
                clean. All our carpet cleaners are highly trained and well
                equipped with the latest equipment and safe cleaning products to
                ensure that you get the best results for your precious carpets.
              </p>
              <MainButton label="Request An Estimate Now" />
              <span className="vactor-2">
                <img src={Vactor2} alt="Vactor" />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
