// import { NextFunction, Request, Response } from "express";
export interface IncomingMessage extends Request {
  userData?: UserDataType | jwt.JwtPayload | string ;
}

export interface UserDataType {
  accessToken: string;
  employeeId: string;
  role: string;
}
import { JWT_SECRET } from "../config/db_config"

import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
export const authJWT = (
  req: IncomingMessage,
  res: Response,
  next: NextFunction
) => {
  console.log("JWT_SECRET as string", JWT_SECRET as string)
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    
    const decoded = jwt.verify(
      token ? token : "",
      JWT_SECRET as string
    );
    req.userData = decoded;
    console.log(req.userData);
    next();
  } catch (err) {
    return res.status(403).json({
      message: "unauthorized crediential",
    });
  }
};
