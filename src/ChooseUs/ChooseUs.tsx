import MainButton from "../MainButton";
import chooseUsImage from "../assets/Images/choose.png";
import "./ChooseUs.css";
import { Container } from "@mui/material";
import Vector0 from "../assets/Images/Vector-2.png";
import Vector1 from "../assets/Images/vactor-1.png";
import Vector2 from "../assets/Images/5.png";

export default function ChooseUs() {
  return (
    <>
      <Container>
        <div className="service">
          <div className="picture-service">
            <img src={chooseUsImage} alt="" />
          </div>
          <span className="vactor-triangle">
            <img src={Vector0} alt="Vector" />
          </span>
          <div className="about">
            <span className="vactor-square">
              <img src={Vector1} alt="Vector" />
            </span>
            <h1
              style={{
                fontFamily: "Prata",
                fontWeight: "400",
                marginTop: "-1rem",
                marginBottom: "0",
              }}
            >
              Why Choose Us?
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              numquam error deleniti dolores dolorum, sint animi earum
              cupiditate, dolore perspiciatis dolorem illum. Blanditiis nobis
              repellendus corporis molestias hic tempore maxime? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Possimus numquam
              error deleniti dolores dolorum, sint animi earum cupiditate,
              dolore perspiciatis dolorem illum. Blanditiis nobis repellendus
              corporis molestias hic tempore maxime?
            </p>
            <div className="h3tick">
              <h3>
                <span style={{ color: "#d2292d" }}>&#10003; </span> dolore
                perspiciatis dolorem
              </h3>
              <h3>
                <span style={{ color: "#d2292d" }}>&#10003; </span> Blanditiis
                nobis
              </h3>
              <h3>
                <span style={{ color: "#d2292d" }}>&#10003; </span> Possimus
                numquam
              </h3>
            </div>

            <MainButton label="Request An Estimate Now" />
            <span className="vactor-circle">
              <img src={Vector2} alt="Vector" />
            </span>
          </div>
        </div>

        {/*          media view @ 786px            */}

        <div className="media-service">
          <h1
            style={{
              fontFamily: "Prata",
              fontWeight: "400",
              marginTop: "-1rem",
              marginBottom: "0",
            }}
          >
            Why Choose Us?
          </h1>
          <div className="media-body">
            <div className="picture-service">
              <img src={chooseUsImage} alt="" />
            </div>
            <span className="vactor-triangle">
              <img src={Vector0} alt="Vector" />
            </span>
            <div className="about">
              <span className="vactor-square">
                <img src={Vector1} alt="Vector" />
              </span>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus numquam error deleniti dolores dolorum, sint animi
                earum cupiditate, dolore perspiciatis dolorem illum. Blanditiis
                nobis repellendus corporis molestias hic tempore maxime? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Possimus
                numquam error deleniti dolores dolorum, sint animi earum
                cupiditate, dolore perspiciatis dolorem illum. Blanditiis nobis
                repellendus corporis molestias hic tempore maxime?
              </p>
              <div className="h3tick">
                <h3>
                  <span style={{ color: "#d2292d" }}>&#10003; </span> Quality
                  Workmanship
                </h3>
                <h3>
                  <span style={{ color: "#d2292d" }}>&#10003; </span> Free Stain
                  Removal
                </h3>
                <h3>
                  <span style={{ color: "#d2292d" }}>&#10003; </span> Honest And
                  Transparent
                </h3>
              </div>

              <MainButton label="Request An Estimate Now" />
              <span className="vactor-circle">
                <img src={Vector2} alt="Vector" />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
