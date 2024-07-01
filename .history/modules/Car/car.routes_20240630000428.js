import { Router } from "express";
import { addCar, deleteCar, getAllCars, getOneCar, updateCar } from "./car.controller.js";

const carRouter = Router()

userRouter.get('/' , getAllCars)
userRouter.get('/:id' , getOneCar)

userRouter.post('/' , addCar)
userRouter.put('/:id' , updateCar)
userRouter.delete('/:id' , deleteCar)

export default carRouter