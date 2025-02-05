import BrandsRoute from "./brands.routes.js";
import CategoryItemRoute from "./category.item.routes.js";
import CategoryRoute from "./category.routes.js";
import CountryRoute from "./country.routes.js";
import userRoute from "./user.routes.js";
import { Router } from "express";

const mainRoute = Router();

mainRoute.use("/api", userRoute);
mainRoute.use("api", CategoryRoute)
mainRoute.use('/api', CategoryItemRoute)
mainRoute.use('/api', BrandsRoute)
mainRoute.use('/api', CountryRoute)

export default mainRoute;
