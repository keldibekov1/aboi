import { Router } from "express";

let CategoryItemRoute = Router()

CategoryItemRoute.get("/category_item/all", FindAll)
CategoryItemRoute.get("/category_item/:id", FindOne)
CategoryItemRoute.post("/create_item", Create)
CategoryItemRoute.patch("/category_item/:id", Update)
CategoryItemRoute.delete("/category_item/:id", Delete)

export default  CategoryItemRoute;