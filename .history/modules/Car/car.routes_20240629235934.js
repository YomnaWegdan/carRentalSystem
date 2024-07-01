import { Router } from "express";
import { addUser, deleteUser, getAllUser, getOneUser, updateUser } from "./user.controller.js";
import { addCar, getAllCars, getOneCar } from "./car.controller.js";

const userRouter = Router()

userRouter.get('/' , getAllCars)
userRouter.get('/:id' , getOneCar)

userRouter.post('/' , addCar)
userRouter.put('/:id' , updateUser)
userRouter.delete('/:id' , deleteUser)

export default userRouter