import { Router } from "express";

let BrandsRoute = Router()

BrandsRoute.get("/brands/all", FindAll)
BrandsRoute.get("/brands/:id", FindOne)
BrandsRoute.post("/create", Create)
BrandsRoute.patch("/brands/:id", Update)
BrandsRoute.delete("/brands/:id", Delete)

export default  BrandsRoute;