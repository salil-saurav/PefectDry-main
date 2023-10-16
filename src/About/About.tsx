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
              Lorem ipsum dolor sit amet
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              ipsam totam aliquam, quae, mollitia tenetur sequi eum odit
              voluptatibus aspernatur sit corporis. Mollitia repellat
              perspiciatis corrupti quaerat, possimus fugiat! Enim.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              ipsam totam aliquam, quae, mollitia tenetur sequi eum odit
              voluptatibus aspernatur sit corporis. Mollitia repellat
              perspiciatis corrupti quaerat, possimus fugiat! Enim.
            </p>
            <MainButton label="Request An Estimate Now" />
            <span className="vactor-2">
              <img src={Vactor2} alt="Vactor" />
            </span>
          </div>
        </div>

        {/*       media view @ 786       */}

        <div className="media-service">
          <h1>Lorem ipsum dolor sit amet</h1>

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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi ipsam totam aliquam, quae, mollitia tenetur sequi eum
                odit voluptatibus aspernatur sit corporis. Mollitia repellat
                perspiciatis corrupti quaerat, possimus fugiat! Enim.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi ipsam totam aliquam, quae, mollitia tenetur sequi eum
                odit voluptatibus aspernatur sit corporis. Mollitia repellat
                perspiciatis corrupti quaerat, possimus fugiat! Enim.
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
