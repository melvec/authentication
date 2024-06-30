import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "./customInput";
import { loginUser } from "../axios/userAxios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const { email, password } = formData;

  const handleOnChange = (element) => {
    const { name, value } = element.target;
    setFormData({ ...formData, [name]: value });
  };

  //Navigating
  const navigate = useNavigate();

  const handleonSubmit = async (e) => {
    e.preventDefault();

    //Logic for signup
    // call axios to make api request to check email and password
    const result = await loginUser(formData);

    //error
    if (result.status === "error") {
      return toast.error(result.message);
    }

    //success
    toast.success(result.message);
    navigate("/transactions");
  };

  return (
    <>
      <Form onSubmit={handleonSubmit}>
        <CustomInput
          label="Email"
          handleOnChange={handleOnChange}
          inputAttributes={{
            type: "email",
            value: email,
            name: "email",
            placeholder: "Enter your email",
            required: true,
          }}
        />
        <CustomInput
          label="Password"
          handleOnChange={handleOnChange}
          inputAttributes={{
            type: "password",
            value: password,
            name: "password",
            placeholder: "Enter your password",
            required: true,
          }}
        />

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};
