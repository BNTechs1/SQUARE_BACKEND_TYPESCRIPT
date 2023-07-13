import { Request, Response } from "express";

//Importing JWT from Json Web Token package
import jwt from "jsonwebtoken";

//Importing the bcrypt package
import bcrypt from "bcrypt";

// Importing usermodel from user
import UserModel from "../../model/user";
import { User } from "../../interfaces/user.interface";

export const login = async (req: Request, res: Response) => {
  //Destructing the inputs from req.body
  const { phoneNumber, password } = req.body;

  //created a variable to assign the user
  //   let getUser = {}
  const phone = phoneNumber.slice(-9);
  //verifying that the user with the email exist or not
  const getUser:User|null = await UserModel.findOne({phoneNumber: phone})
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
        const jwtToken = jwt.sign(
          {
            employeeId: getUser.employeeId,
            role: getUser.role,
          },
          //Signign the token with the JWT_SECRET in the .env
          process.env.JWT_SECRET as string,
          {
            expiresIn: "24h",
          }
        );
        return res.status(200).json({
          accessToken: jwtToken,
          employeeId: getUser.employeeId,
          role: getUser.role,
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
