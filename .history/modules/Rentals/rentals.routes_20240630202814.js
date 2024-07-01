import { Router } from "express";
import { addCar, deleteCar, getAllCars, getOneCar, updateCar } from "./car.controller.js";
import { addRentalCar, deleteRentalCar, getAllRentalCars, getOneRentalCar, updateRentalCar } from "./rentals.controller.js";

const rentalCarsRouter = Router()

rentalCarsRouter.get('/' , getAllRentalCars)
rentalCarsRouter.get('/:id' , getOneRentalCar)

rentalCarsRouter.post('/' , addRentalCar)
rentalCarsRouter.put('/:id' , updateRentalCar)
rentalCarsRouter.delete('/:id' , deleteRentalCar)

export default rentalCarsRouter