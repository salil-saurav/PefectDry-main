import React from "react";
import Button from "@mui/material/Button";
import "./MainButton.css";

interface MainButtonProps {
  label: string;
}

//       scroll to form

const scrollToForm = () => {
  const form = document.getElementById("form");

  if (form) {
    form.scrollIntoView({ behavior: "smooth" });
  }
};

const MainButton: React.FC<MainButtonProps> = ({ label }) => {
  return (
    <Button
      id="MainButton"
      className="scrollToFormButton"
      variant="contained"
      onClick={scrollToForm}
    >
      {label}
    </Button>
  );
};

export default MainButton;
