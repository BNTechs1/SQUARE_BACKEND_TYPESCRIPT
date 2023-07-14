// import { IncomingMessage } from "http";
// import UserModel from "../../model/user";
// import { Response, Request, NextFunction } from "express";

// export const isAdmin = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   if (!UserModel) {
//     res.status(403).send({
//       message: "Invalid JWT token",
//     });
//   }
//   if (req.userData.role === "admin") {
//     res.status(200);
//     next();
//   } else {
//     res.status(403).send({
//       message: "Unauthorised access",
//     });
//   }
// };
