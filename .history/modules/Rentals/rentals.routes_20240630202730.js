import { Router } from "express";
import { addCar, deleteCar, getAllCars, getOneCar, updateCar } from "./car.controller.js";

const rentalCarsRouter = Router()

rentalCarsRouter.get('/' , get)
rentalCarsRouter.get('/:id' , getOneCar)

rentalCarsRouter.post('/' , addCar)
rentalCarsRouter.put('/:id' , updateCar)
rentalCarsRouter.delete('/:id' , deleteCar)

export default rentalCarsRouter