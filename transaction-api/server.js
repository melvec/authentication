import express from "express";
import { connectMongo } from "./config/dbConfig.js";
import cors from "cors";
import useRouter from "./router/userRouter.js";

const app = express();
const PORT = process.env.PORT || 8000;

//middlewares
app.use(express.json());
app.use(cors());

connectMongo();

//Router | API endpoint

app.use("/api/user", useRouter);

app.listen(PORT, (error) => {
  error ? console.log("Error", error) : console.log("Server running");
});
