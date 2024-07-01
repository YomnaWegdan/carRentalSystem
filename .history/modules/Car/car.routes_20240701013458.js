import { Router } from "express";
import { addCar, deleteCar, getAllCars, getAvailableCarsByModel, getAvailableOrRentedCarsByModel, getCarsByModel, getOneCar, getRentedOrSpecificModelCars, updateCar } from "./car.controller.js";

const carRouter = Router()

carRouter.get('/' , getAllCars)
carRouter.get('/:id' , getOneCar)

carRouter.post('/' , addCar)
carRouter.put('/:id' , updateCar)
carRouter.delete('/:id' , deleteCar)

carRouter.get('/available/model', getAvailableCarsByModel);
carRouter.get('/available/model', getAvailableCarsByModel);
carRouter.get('/rented-or-specific-model', getRentedOrSpecificModelCars);
carRouter.get('/available-or-rented/model', getAvailableOrRentedCarsByModel);

export default carRouter