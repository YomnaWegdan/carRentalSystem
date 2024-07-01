import { Router } from "express";
import { getAllUser, getOneUser } from "./user.controller.js";

const userRouter = Router()

userRouter.get('/' , getAllUser)
userRouter.get('/:id' , getOneUser)

userRouter.post('/' , add)
userRouter.put('/:id' , updateCar)
userRouter.delete('/:id' , deleteCar)

export default userRouter