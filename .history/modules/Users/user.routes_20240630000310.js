import { Router } from "express";
import { addUser, getAllUser, getOneUser } from "./user.controller.js";

const userRouter = Router()

userRouter.get('/' , getAllUser)
userRouter.get('/:id' , getOneUser)

userRouter.post('/' , addUser)
userRouter.put('/:id' , updateCar)
userRouter.delete('/:id' , deleteCar)

export default userRouter