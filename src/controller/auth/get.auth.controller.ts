import { Request, Response } from "express";
//Importing the express-async-handler package
import asyncHandler from "express-async-handler";
import { getAllUsers, showUsers } from "../../utils/db_functions/user.db";

//Importing the uuidv4 package to generate userId

export const getUsers = asyncHandler(async (req:Request, res:Response) => {
  const user = getAllUsers();
  res.status(200).json(user);
});

export const getuser = asyncHandler(async (req, res) => {
  // const { id } = req.userData
  const id = "1212112211";
  const user = showUsers(id);
  res.status(200).send(user);
});
