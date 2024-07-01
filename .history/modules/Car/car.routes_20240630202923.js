import { Router } from "express";
import { addCar, deleteCar, getAllCars, getOneCar, updateCar } from "./car.controller.js";

const carRouter = Router()

carRouter.get('/' , getAllCars)
carRouter.get('/:id' , getOneCar)

carRouter.post('/' , addCar)
carRouter.put('/:id' , updateCar)
carRouter.delete('/:id' , deleteCar)

router.get('/model', carController.getCarsByModel);
router.get('/available/model', carController.getAvailableCarsByModel);
router.get('/rented-or-specific-model', carController.getRentedOrSpecificModelCars);
router.get('/available-or-rented/model', carController.getAvailableOrRentedCarsByModel);

export default carRouter