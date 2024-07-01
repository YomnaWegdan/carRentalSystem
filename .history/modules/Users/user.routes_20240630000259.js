import { Router } from "express";
import { getAllUser } from "./user.controller.js";

const userRouter = Router()

userRouter.get('/' , get)
userRouter.get('/:id' , getOneCar)

userRouter.post('/' , addCar)
userRouter.put('/:id' , updateCar)
userRouter.delete('/:id' , deleteCar)

export default userRouter