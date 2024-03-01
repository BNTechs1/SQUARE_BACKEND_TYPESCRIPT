import { Request, Response } from "express";

//Importing JWT from Json Web Token package
import jwt from "jsonwebtoken";
import { signJwt } from "../../middleware/jwt"
//Importing the bcrypt package
import bcrypt from "bcrypt";

// Importing usermodel from user
import UserModel from "../../model/user.model";
import { IUser } from "../../interfaces/user.interface";

export const login = async (req: Request, res: Response) => {
  //Destructing the inputs from req.body
  const { phoneNumber, password } = req.body;
  const userExist = await UserModel.findOne({phoneNumber: phoneNumber})
  if(!userExist) res.status(401).json({ message:"user not found"})
  const userpassword = userExist?.password
  const match = await bcrypt.compare(password, userpassword as string)
  if(!match) res.status(403).json({message: "invalid criedential"})
  
  const toBeSignedData = {
    employeeId: userExist?.employeeId,
    role: userExist?.role,
    firstTimeLogin: userExist?.firstTimeLogin
  }


  const accessToken = signJwt(
    toBeSignedData,
    process.env.JWT_SECRET as string,
    {
        expiresIn: "3d"
    })
          
    res.status(200).json({
            accessToken: accessToken,
            employeeId: userExist?.employeeId,
            role: userExist?.role,
            firstTimeLogin: userExist?.firstTimeLogin

    })
}
   
   
