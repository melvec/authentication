import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import CustomInput from "./customInput";
import { createUser } from "../axios/userAxios";
import { toast } from "react-toastify";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

export const SignupForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const { name, email, password, confirm_password } = formData;

  const handleOnChange = (element) => {
    const { name, value } = element.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleonSubmit = async (e) => {
    e.preventDefault();

    if (password != confirm_password)
      return toast.error("Password not matching");

    //Logic for signup
    // call axios to make api request
    setLoading(true);
    try {
      const result = await createUser(formData);
      //error
      if (result.status === "error") {
        return toast.error(result.message);
      } else {
        //success
        toast.success(result.message);
      }
    } catch (error) {
      toast.error("An unexpected error ocurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form onSubmit={handleonSubmit}>
        <CustomInput
          label="Name"
          handleOnChange={handleOnChange}
          inputAttributes={{
            type: "text",
            value: name,
            name: "name",
            placeholder: "Enter your name",
            required: true,
          }}
        />
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
        <CustomInput
          label="Confirm Password"
          handleOnChange={handleOnChange}
          inputAttributes={{
            type: "password",
            value: confirm_password,
            name: "confirm_password",
            placeholder: "Confirm your password",
            required: true,
          }}
        />
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : "Signup"}
        </Button>
      </Form>
    </>
  );
};
