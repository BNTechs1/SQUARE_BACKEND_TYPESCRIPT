import { Request, Response } from "express";
import { loop } from "../../utils/help/cloudinary.help";
import paymentOptionModel from "../../model/paymentOption.model";
export const createOptions = async (req: Request, res: Response) => {
  const {
    name,
  } = req.body;

  try {
    if (req.files) {
      const files = req.files;
      const urls = await loop(files);

      const option = await new paymentOptionModel({
        name,
        files: urls
      }).save();

      return res.status(200).json({
        message: "option create successfully",
        success: true,
        option
      });
    } else {
      return res.status(405).json({
        err: `At least one image is required`,
      });
    }
  } catch (error) {
    return res.status(412).json({
      success: false,
      message: error,
    });
  }
};
