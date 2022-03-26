import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  getErrorMessage,
  regexForMobileNumber,
  regexForName,
} from "../../utils";

const UserForm = () => {
  const baseURL = process.env.REACT_APP_API_SERVER;
  const history = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    const body = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      adharNumber: formData.adharNumber,
      panNumber: formData.panNumber,
      phone: formData.phone,
    };

    axios
      .post("http://localhost:8080/candidate/profile", body)
      .then((response) => {
        localStorage.setItem(
          "candiDateData",
          JSON.stringify(response?.data?.candidateData)
        );
        history("/download-contract");
      });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <div>
        <h1>Welcome to User Form Page</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputField">
            <TextField
              id="outlined-password-input"
              label="Firstname"
              name="firstName"
              type="text"
              error={errors["firstName"]}
              helperText={getErrorMessage(errors, "firstName", "Firstname")}
              autoComplete="off"
              {...register("firstName", {
                required: true,
                pattern: regexForName,
              })}
            />
          </div>
          <div className="inputField">
            <TextField
              id="outlined-password-input"
              label="Lastname"
              name="lastName"
              type="text"
              error={errors["lastName"]}
              helperText={getErrorMessage(errors, "lastName", "Lastname")}
              autoComplete="off"
              {...register("lastName", {
                required: true,
                pattern: regexForName,
              })}
            />
          </div>
          <div className="inputField">
            <TextField
              id="outlined-password-input"
              label="Adhar Number"
              name="adharNumber"
              type="number"
              error={errors["adharNumber"]}
              helperText={getErrorMessage(
                errors,
                "adharNumber",
                "Adhar Number"
              )}
              autoComplete="off"
              {...register("adharNumber", { required: true })}
            />
          </div>
          <div className="inputField">
            <TextField
              id="outlined-password-input"
              label="PAN Number"
              name="panNumber"
              type="number"
              error={errors["panNumber"]}
              helperText={getErrorMessage(errors, "panNumber", "PAN Number")}
              autoComplete="off"
              {...register("panNumber", { required: true })}
            />
          </div>
          <div className="inputField">
            <TextField
              id="outlined-password-input"
              label="Phone"
              name="phone"
              type="number"
              error={errors["phone"]}
              helperText={getErrorMessage(errors, "phone", "Phone")}
              autoComplete="off"
              {...register("phone", {
                required: true,
                pattern: regexForMobileNumber,
              })}
            />
          </div>
          <div>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Box>
  );
};

export default UserForm;
