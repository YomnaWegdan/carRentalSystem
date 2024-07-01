import { Router } from "express";
import { addUser, deleteUser, getAllUser, getOneUser, updateUser } from "./user.controller.js";
import { addCar, deleteCar, getAllCars, getOneCar, updateCar } from "./car.controller.js";

const userRouter = Router()

userRouter.get('/' , getAllCars)
userRouter.get('/:id' , getOneCar)

userRouter.post('/' , addCar)
userRouter.put('/:id' , updateCar)
userRouter.delete('/:id' , deleteCar)

export default userRouter