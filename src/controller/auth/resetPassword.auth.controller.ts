import bcrypt from "bcrypt";
import { Response, Request } from "express";
import { checkemployee } from "../../utils/db_functions/user.db";

export const resetPassword = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const verifyUser = await checkemployee(id);
    if (!verifyUser) {
      return res.status(401).json({
        message: "user not found",
      });
    } else {
      const password = "06070809";
      bcrypt
        .hash(password, 10)
        .then((hash) => {
          verifyUser.password = hash;
          verifyUser.firstTimeLogin = true
          verifyUser.save();
          return res.status(201).json({
            message: "password reseted successfully",
            success: true,
          });
        })
        .catch((error) => {
          return res.status(500).json({
            error: error,
          });
        });
    }
  } catch (error) {
    return res.status(412).json({
      success: false,
      message: error,
    });
  }
};
