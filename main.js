import express from "express";
import db from "./config/db.js";
import { config } from "dotenv";

config();

let port = process.env.PORT || 3000;

let app = express();

app.use(express.json());

db;

app.listen(port, () => {
  console.log(`Server ${port} portda ishlamoqda...!`);
});
