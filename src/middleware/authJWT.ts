// import { NextFunction, Request, Response } from "express";
export interface IncomingMessage extends Request {
  userData?: UserDataType | jwt.JwtPayload | string ;
}

export interface UserDataType {
  accessToken: string;
  employeeId: string;
  role: string;
}
// export const JWT_SECRET= "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZ3d0RRWUpLb1pJaHZjTkFRRUJCUUFEU3dBd1NBSkJBTlFLQStSV2ZQZFdHR25iYS9WRVo1TUs5cG1nMUlQawovaWhBOXVxdjcvKzVZc0YzVFVEaHFHZXN1bGJhdFFGdkNPaHVmSlNJQmFWT3RjbVZrTWZoWmRrQ0F3RUFBUT09Ci0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ"
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
export const authJWT = (
  req: IncomingMessage,
  res: Response,
  next: NextFunction
) => {
  console.log("process.env.JWT_SECRET as string", process.env.JWT_SECRET as string)
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    
    const decoded = jwt.verify(
      token ? token : "",
      process.env.JWT_SECRET as string
    );
    req.userData = decoded;
    // console.log(req.userData);
    next();
  } catch (err) {
    return res.status(403).json({
      message: "unauthorized crediential",
    });
  }
};
