import { Router } from "express";
import { addUser, getAllUser, getOneUser, updateUser } from "./user.controller.js";

const userRouter = Router()

userRouter.get('/' , getAllUser)
userRouter.get('/:id' , getOneUser)

userRouter.post('/' , addUser)
userRouter.put('/:id' , updateUser)
userRouter.delete('/:id' , deleteCar)

export default userRouter