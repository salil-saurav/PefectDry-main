import { Container } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#282828" }}>
      <Container>
        <div className="footer-text">
          <h1>
            Excellent Quality Carpet Cleaning Services - Glam your Carpet Today!
            Call us today for a free quotes Call : 022 030 4004
          </h1>
        </div>
      </Container>
      <div
        style={{
          width: "100%",
          backgroundColor: "#fff",
          opacity: "0.2",
          height: "1px",
          marginBottom: "1rem",
        }}
      ></div>
      <Container>
        <p
          style={{
            margin: "0",
            textAlign: "center",
            color: "#fff",
            padding: "0 0 1rem",
          }}
        >
          All Rights Reserved 2023 @ Perfect Dry. | Design by Smegoweb
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
