import express from "express";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";
//import jwt from "jsonwebtoken";
import User from "../models/User.js";
//import { isAuth, isAdmin, generateToken, baseUrl, mailgun } from "../utils.js";

const userRouter = express.Router();

userRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const user = await User.create({
      name: "djdjdjd",
      isAdmin: true,
      email: "dj@gmail.com",
      password: "123456",
    });
    const users = await User.findAll();
    res.send(users);
  })
);

export default userRouter;
