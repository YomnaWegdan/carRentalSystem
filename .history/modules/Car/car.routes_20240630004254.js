import { Router } from "express";
import { addCar, deleteCar, getAllCars, getOneCar, updateCar } from "./car.controller.js";

const carRouter = Router()

carRouter.get('/' , getAllCars)
carRouter.get('/:id' , getOneCar)

carRouter.post('/' , addCar)
userRouter.put('/:id' , updateCar)
userRouter.delete('/:id' , deleteCar)

export default carRouter