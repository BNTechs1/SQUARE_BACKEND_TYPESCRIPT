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
  const JWT_SECRET = "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZ3d0RRWUpLb1pJaHZjTkFRRUJCUUFEU3dBd1NBSkJBTlFLQStSV2ZQZFdHR25iYS9WRVo1TUs5cG1nMUlQawovaWhBOXVxdjcvKzVZc0YzVFVEaHFHZXN1bGJhdFFGdkNPaHVmSlNJQmFWT3RjbVZrTWZoWmRrQ0F3RUFBUT09Ci0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ"
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
    JWT_SECRET as string,
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
   
   
