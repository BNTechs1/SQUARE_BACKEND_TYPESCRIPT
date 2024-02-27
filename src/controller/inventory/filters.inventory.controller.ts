// import { Request, Response } from "express";
// import { Stack } from "../../interfaces/inventory.interface";
// import InventoryModel from "../../model/inventory.model";

// export const filterStack = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { startDate, endDate } = req.body;

//   const purchases:Stack[] = [];
//   const Item = await InventoryModel.findOne({ _id: id });
//   if (!Item) {
//     return res.status(404).json({
//       message: "Item not found",
//       success: false,
//     });
//   }
//   const purchasHistory= Item.stack;
//   purchasHistory.map((purchase) => {
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     if (
//       start.getTime() <= purchase.date?.getTime() &&
//       purchase.date.getTime() <= end.getTime()
//     )
//       purchases.push(purchase as Stack);
//   });
//   res.status(200).send(purchases);
// };

