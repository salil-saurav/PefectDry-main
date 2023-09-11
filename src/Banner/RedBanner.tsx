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
                Excellent Quality Carpet Cleaning Services
              </h2>
              <h3 style={{ color: "#fff", fontWeight: "normal" }}>
                Glam your Carpet Today! Call us today for a free quotes Call :
                022 030 4004
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
