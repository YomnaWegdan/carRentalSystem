import { Router } from "express";
import { addUser, deleteUser, getAllUser, getOneUser, signup, updateUser } from "./user.controller.js";

const userRouter = Router()

userRouter.get('/' , getAllUser)
userRouter.get('/:id' , getOneUser)

userRouter.post('/signUP' , signup)
userRouter.post('/signIn' , signup)

userRouter.put('/:id' , updateUser)
userRouter.delete('/:id' , deleteUser)

export default userRouter