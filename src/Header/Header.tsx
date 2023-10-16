import Logo from "../assets/Images/Logo.png";
import "./Header.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Container } from "@mui/material";

interface HeaderProps {
  isVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({ isVisible }) => {
  const headerClass = isVisible ? "header" : "header hidden";

  return (
    <>
      <header className={headerClass}>
        <Container className="header-container">
          <div className="home-logo">
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <Stack direction="row" spacing={3} className="contact-us-stack">
            <Chip
              className="mail-us"
              label="abc@somemail.com"
              component="a"
              href="mailto:abc@somemail.com"
              clickable
              variant="outlined"
            />
            <Chip
              className="call-us"
              label="Call : 000 111 222"
              component="a"
              href="tel:000111222"
              clickable
            />
          </Stack>
          <div className="icon-stack">
            <div className="MailIconDiv">
              <a href="mailto:abc@somemail.com">
                <EmailOutlinedIcon className="emailIcon" />
              </a>
            </div>
            <div className="callIconDiv">
              <a href="tel:000111222">
                <CallOutlinedIcon className="callIcon" />
              </a>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
