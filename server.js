import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();
const app = express();

app.use(morgan("dev"))
app.use(express.json());

const port = process.env.PORT||8080

app.listen(port, (req,res)=>{
    console.log(`App is running in ${process.env.NODE_MODE} mode on port : ${process.env.PORT}`);
})