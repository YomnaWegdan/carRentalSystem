import { Router } from "express";
import { getAllUser } from "./user.controller.js";

const userRouter = Router()

userRouter.get('/' , getAllUser)
userRouter.get('/:id' , get)

userRouter.post('/' , addCar)
userRouter.put('/:id' , updateCar)
userRouter.delete('/:id' , deleteCar)

export default userRouter