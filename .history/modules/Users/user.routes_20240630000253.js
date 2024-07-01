import { Router } from "express";
import {  getAllCars, getOneCar, updateCar } from "./car.controller.js";
import { getAllUser } from "./user.controller.js";

const userRouter = Router()

userRouter.get('/' , getAllUser)
userRouter.get('/:id' , getOneCar)

userRouter.post('/' , addCar)
userRouter.put('/:id' , updateCar)
userRouter.delete('/:id' , deleteCar)

export default userRouter