import { Request, Response } from "express";
import paymentOptionModel from "../../model/paymentOption.model";

// import  user from "../../model/user"

export const getOptions = async (req: Request, res: Response) => {
  const options = await paymentOptionModel.find();
  res.status(200).send(options);
};

export const getOption = async (req: Request, res: Response) => {
  const { id } = req.params
  const options = await paymentOptionModel.findOne({_id: id});
  res.status(200).send(options);
};
