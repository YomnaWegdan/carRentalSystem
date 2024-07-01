import { Router } from "express";
import {  deleteUser, getAllUser, getOneUser, signin, signup, updateUser } from "./user.controller.js";

const userRouter = Router()

userRouter.get('/' , getAllUser)
userRouter.get('/:id' , getOneUser)

userRouter.post('/signUp' , signup)
userRouter.post('/signIn' , signin)

userRouter.put('/:id' , updateUser)
userRouter.delete('/:id' , deleteUser)

export default userRouter