import { Button, Checkbox, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
// import Button from '@mui/material/Button';
// import  useState  from "react";
import { Outlet, Link } from "react-router-dom";

const Loginform = () => {
  const [formValid, setFormValid] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newErrors = validateForm(formData);
    // setErrors(newErrors);

    // if (Object.keys(newErrors).length === 0) {
    //     // Form submission logic here
    //     console.log('Form submitted successfully!');
    // } else {
    //     console.log(`Form submission failed
    //      due to validation errors.`);
    // }
    // if(formValid){
    //   <Navigate to="/topicdata" />
    // }
  };

  const validateForm = (data) => {
    const errors = {};

    return errors;
  };

  const btnClick = () => {
    if (formData.username == "") {
      alert("Name cannot be emty");
      return;
    }
    if (formData.email == "") {
      alert("email cannot be emty");
      return;
    }

    if (formData.username != "Ravikant") {
      alert("Wrong username");
      return;
    }
    if (formData.email != "ravikant@gmail.com") {
      alert("Wrong email");
      return;
    }

    if (
      formData.username == "Ravikant" &&
      formData.email == "ravikant@gmail.com"
    ) {
      setFormValid(true);
      <Navigate to="/topicdata" />;
    }
  };

  return (
    <>
      {formValid ? <Navigate to="/topicdata" /> : ""}
      <form onSubmit={handleSubmit}>
        <div className="shadow-2xl flex flex-col justify-evenly h-[400px]  p-3 rounded">
          <div className=" mb-7 ml-3 text-center text-2xl font-bold bg-blue-700 p-2 rounded text-white">
            Basic details of user
          </div>

          <div className="flex gap-5 mb-5">
            <label>Name</label>{" "}
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your name"
              className="outline outline-1 rounded p-2"
            ></input>
          </div>

          <div className="flex gap-5">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="outline outline-1 rounded  p-2"
            ></input>
          </div>

          <div className="mt-4 flex items-center">
            <label>Gender</label>
            <RadioGroup
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Radio value="male"></Radio>Male
              <Radio value="female"></Radio>Female
              <Radio value="other"></Radio>Other
            </RadioGroup>
          </div>

          <Button
            variant="contained"
            sx={{ marginLeft: "10px" }}
            onClick={btnClick}
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default Loginform;
