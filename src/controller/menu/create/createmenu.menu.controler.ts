import { Request, Response } from "express";
import MenuModel from "../../../model/menu.model";
import { Mloop } from "../../../utils/help/cloudinary.help";


export const createMenu = async (req: Request, res: Response) => {
  const { name, size, description, price, type, category } = req.body;

  try {
    if (req.files) {
      const files = req.files;
      const urls = await Mloop(files);
      console.log(urls)
      const createmenu = new MenuModel({
        type,
        category,
        price,
        size,
        description,
        name,
        files:urls
      });
      const createdMenu = await createmenu.save();
      return res.status(201).json({
        message: "create menu type successfully",
        success: true,
        id: createdMenu._id,
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
