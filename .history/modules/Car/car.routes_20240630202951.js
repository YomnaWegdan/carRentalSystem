import { Router } from "express";
import { addCar, deleteCar, getAllCars, getCarsByModel, getOneCar, updateCar } from "./car.controller.js";

const carRouter = Router()

carRouter.get('/' , getAllCars)
carRouter.get('/:id' , getOneCar)

carRouter.post('/' , addCar)
carRouter.put('/:id' , updateCar)
carRouter.delete('/:id' , deleteCar)

carRouter.get('/model', getCarsByModel);
carRouter.get('/available/model', carController.getAvailableCarsByModel);
carRouter.get('/rented-or-specific-model', carController.getRentedOrSpecificModelCars);
carRouter.get('/available-or-rented/model', carController.getAvailableOrRentedCarsByModel);

export default carRouter