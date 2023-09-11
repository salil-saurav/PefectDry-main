import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./UserForm.css";
import Button from "@mui/material/Button";

export default function UserForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (evt?: any) => {
    evt.preventDefault();
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
    onSubmit();
  };

  //   Form Validaions

  const validateName = (value?: string) => {
    if (!value) {
      return "Name Is Required";
    }
    return "";
  };

  const validatePhone = (value?: any) => {
    const phoneNumberPattern = /^\d{10}$/;

    if (!phoneNumberPattern.test(value)) {
      return "Invalid Phone Number";
    }
    return "";
  };

  const validateEmail = (value?: any) => {
    if (!value) {
      return "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      return "Invalid Email address";
    }
    return "";
  };

  const phoneChangeHandler = (evt?: any) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setPhoneError(validatePhone(value));
  };
  const nameChangeHandler = (evt?: any) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setNameError(validateName(value));
  };
  const emailChangeHandler = (evt?: any) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setEmailError(validateEmail(value));
  };

  const messageChangeHandler = (evt?: any) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div
      style={{ backgroundColor: "#fff" }}
      className="user-form-div"
      id="form"
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
        className="user-form"
        onSubmit={handleSubmit}
      >
        <h2
          style={{
            fontFamily: "Prata",
            width: "auto",
            marginBottom: "2rem",
            fontWeight: "400",
          }}
        >
          Get A Free Quote
        </h2>

        <TextField
          required={true}
          label="Name"
          variant="outlined"
          name="name"
          error={Boolean(nameError)}
          helperText={nameError}
          value={formData.name}
          onChange={nameChangeHandler}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#f0f0f0",
                borderRadius: "0",
              },
              "&:hover fieldset": {
                borderColor: "#bdbdbd",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#bdbdbd",
              },

              "&.MuiFormLabel-root.Mui-focused": {
                color: "green", // Change the label color when focused
              },
            },
          }}
        />

        <TextField
          required={true}
          label="Phone"
          variant="outlined"
          name="phone"
          error={Boolean(phoneError)}
          helperText={phoneError}
          inputProps={{
            type: "tel",
            maxLength: 10,
            inputMode: "numeric",
          }}
          value={formData.phone}
          onChange={phoneChangeHandler}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#f0f0f0",
                borderRadius: "0",
              },
              "&:hover fieldset": {
                borderColor: "#bdbdbd",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#bdbdbd",
              },
            },
          }}
        />
        <TextField
          required={true}
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          value={formData.email}
          onChange={emailChangeHandler}
          error={Boolean(emailError)}
          helperText={emailError}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#f0f0f0",
                borderRadius: "0",
              },
              "&:hover fieldset": {
                borderColor: "#bdbdbd",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#bdbdbd",
              },
            },
          }}
        />
        <TextField
          label="Message"
          variant="outlined"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={messageChangeHandler}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#f0f0f0",
                borderRadius: "0",
              },
              "&:hover fieldset": {
                borderColor: "#bdbdbd",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#bdbdbd",
              },
            },
          }}
        />
        <div className="form-btn">
          <Button variant="contained" type="submit">
            Submit Now
          </Button>
        </div>
      </Box>
    </div>
  );
}
