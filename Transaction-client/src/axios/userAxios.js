import axios from "axios";

//Server URL
const API_BASE_URL = "http://localhost:8000";
const userEndpoints = "/api/user";

const API_URL = API_BASE_URL + userEndpoints;

//Signup | User registration | CREATE | POST
export const createUser = (userObj) => {
  const response = axios
    .post(`${API_URL}/signup`, userObj)
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};

//Login | Post

export const loginUser = (userObj) => {
  const response = axios
    .post(`${API_URL}/login`, userObj)
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};
