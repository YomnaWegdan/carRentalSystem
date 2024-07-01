import { Router } from "express";
import { addCar, deleteCar, getAllCars, getOneCar, updateCar } from "./car.controller.js";
import { getAllRentalCars } from "./rentals.controller.js";

const rentalCarsRouter = Router()

rentalCarsRouter.get('/' , getAllRentalCars)
rentalCarsRouter.get('/:id' , getOneRentalCar)

rentalCarsRouter.post('/' , addCar)
rentalCarsRouter.put('/:id' , updateCar)
rentalCarsRouter.delete('/:id' , deleteCar)

export default rentalCarsRouter