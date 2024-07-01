import { Router } from "express";
import { addCar, deleteCar, getAllCars, getOneCar, updateCar } from "./car.controller.js";

const rentalCarsRouter = Router()

rentalCarsRouter.get('/' , getAllCars)
carRouter.get('/:id' , getOneCar)

carRouter.post('/' , addCar)
carRouter.put('/:id' , updateCar)
carRouter.delete('/:id' , deleteCar)

export default rentalCarsRouter