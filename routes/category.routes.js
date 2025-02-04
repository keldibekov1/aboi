import { Router } from "express";
import { Create, Delete, FindAll, FindOne, Update } from "../controllers/category.controller.js";

let CategoryRoute = Router()

CategoryRoute.get("/category/all", FindAll)
CategoryRoute.get("/category/:id", FindOne)
CategoryRoute.post("/category/:id", Create)
CategoryRoute.patch("/category/:id", Update)
CategoryRoute.delete("/category/:id", Delete)

export default CategoryRoute;