import { Request, Response } from "express";

//Importing JWT from Json Web Token package
import jwt from "jsonwebtoken";
export const JWT_SECRET= "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZ3d0RRWUpLb1pJaHZjTkFRRUJCUUFEU3dBd1NBSkJBTlFLQStSV2ZQZFdHR25iYS9WRVo1TUs5cG1nMUlQawovaWhBOXVxdjcvKzVZc0YzVFVEaHFHZXN1bGJhdFFGdkNPaHVmSlNJQmFWT3RjbVZrTWZoWmRrQ0F3RUFBUT09Ci0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ"

//Importing the bcrypt package
import bcrypt from "bcrypt";

// Importing usermodel from user
import UserModel from "../../model/user.model";
import { IUser } from "../../interfaces/user.interface";

export const login = async (req: Request, res: Response) => {
  //Destructing the inputs from req.body
  const { phoneNumber, password } = req.body;
  const getUser:IUser|null = await UserModel.findOne({phoneNumber: phoneNumber})
  if (!getUser) {
        //if user does not exist responding Authentication Failed
        return res.status(403).json({
          message: "Authentication Failed",
        });
      }
      return bcrypt.compare(password, getUser.password)
    .then((response) => {
      if (!response) {
        return res.status(401).json({
          message: "Authentication Failed",
        });
      } else {

        // console.log("process.env.JWT_SECRET as string", process.env.JWT_SECRET);

        const jwtToken = jwt.sign(

          {
            employeeId: getUser.employeeId,
            role: getUser.role,
            firstTimeLogin: getUser.firstTimeLogin

          },
          //Signign the token with the JWT_SECRET in the .env
          JWT_SECRET as string,
          {
            expiresIn: "24h",
          }
        );
        return res.status(200).json({
          accessToken: jwtToken,
          employeeId: getUser.employeeId,
          role: getUser.role,
          firstTimeLogin: getUser.firstTimeLogin

        })
      }
    })
    .catch((err) => {
      return res.status(401).json({
        messgae: err.message,
        success: false,
      });
    });
};
