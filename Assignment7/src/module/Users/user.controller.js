import { Router } from "express";
import Users from "../../database/model/users.model.js";
import { createOrUpdate, findUserBYEmail, newUser, userByPK } from "./user.service.js";

const router =Router()
// Create a new user (using build and save)
router.post('/users/signup',newUser)
// Create or update based on PK and
router.put('/users/:id',createOrUpdate)
// find a user by their email address.
router.get('/users/by-email',findUserBYEmail)
//user by their PK
router.get('/user/:id',userByPK)
export default userRouter
