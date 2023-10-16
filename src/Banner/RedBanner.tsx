import { Container } from "@mui/material";
import "./RedBanner.css";
import MainButton from "../MainButton";

export default function RedBanner() {
  return (
    <>
      <section className="red-banner-section">
        <Container>
          <div className="red-banner">
            <div className="banner-des">
              <h2
                style={{
                  color: "#fff",
                  fontWeight: "bolder",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <h3 style={{ color: "#fff", fontWeight: "normal" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                amet iusto expedita exercitationem.
              </h3>
            </div>
            <div className="vertical-line"></div>

            <div className="banner-btn">
              <MainButton label="Request An Estimate Now" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
