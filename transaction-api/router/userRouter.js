import express from "express";
import { comparePassword, hashPassword } from "../utility/bcryptHelper.js";
import {
  buildErrorResponse,
  buildSuccessResponse,
} from "../utility/responseHelper.js";
import { createUser, findUserByEmail } from "../model/userModel.js";

const useRouter = express.Router();

//Create User | Signum  | POST
useRouter.post("/signup", async (req, res) => {
  try {
    //Signup process
    const { password, name, email } = req.body;
    //encrypt | hash the password
    const encryptedPassword = hashPassword(password);

    //create user in database
    const result = await createUser({
      name: name,
      email: email,
      password: encryptedPassword,
    });
    result?._id
      ? buildSuccessResponse(res, result, "User created")
      : buildErrorResponse(res, "Couldnt register user");
  } catch (error) {
    if (error.code === 11000) {
      error.message = "User already exists";
    }
    buildErrorResponse(res, error.message);
  }
});

useRouter.post("/login", async (req, res) => {
  try {
    //Get email and password from request
    const { email, password } = req.body;

    // find if the user exists in our database
    const user = await findUserByEmail(email);

    // user not found
    if (!user?._id) {
      return buildErrorResponse(res, "Invalid credentials");
    }

    //user found
    const isPasswordMatch = comparePassword(password, user?.password);
    isPasswordMatch
      ? buildSuccessResponse(res, user, "Logged in successfully")
      : buildErrorResponse(res, "Invalid credentials");
  } catch (error) {
    res.send(error);
    buildErrorResponse(res, "Invalid credentials");
  }
});

export default useRouter;
