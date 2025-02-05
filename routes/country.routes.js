import { Router } from "express";

let CountryRoute = Router()

CountryRoute.get("/country/all", FindAll)
CountryRoute.get("/country/:id", FindOne)
CountryRoute.post("/create", Create)
CountryRoute.patch("/country/:id", Update)
CountryRoute.delete("/country/:id", Delete)

export default  CountryRoute;