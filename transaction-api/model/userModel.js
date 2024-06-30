import userSchema from "../schema/userSchema.js";

//create user

export const createUser = (userObj) => {
  return userSchema(userObj).save();
};

//find user by email
export const findUserByEmail = (email) => {
  return userSchema.findOne({ email });
};
