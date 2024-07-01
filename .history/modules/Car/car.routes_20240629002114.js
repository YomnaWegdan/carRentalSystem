import { Router } from "express";
import { addUser, deleteUser, getAllUser, getOneUser, updateUser } from "./user.controller.js";

const userRouter = Router()

userRouter.get('/' , getAllUser)
userRouter.get('/:id' , getOneUser)

userRouter.post('/' , addUser)
userRouter.put('/:id' , updateUser)
userRouter.delete('/:id' , deleteUser)

export default userRouter