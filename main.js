// http://localhost:3005/api-docs
import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.routes.js"; 
import mainRoute from "./routes/index.js";
import swaggerDocs from "./config/swagger.js";
dotenv.config();

const port = process.env.port || 3005;
const app = express();
app.use(express.json());
swaggerDocs(app);

app.use("/", mainRoute)
app.use("/users", userRoute);
app.use("/api", CategoryRoute)

app.listen(port, () => console.log("server started on port", port));
