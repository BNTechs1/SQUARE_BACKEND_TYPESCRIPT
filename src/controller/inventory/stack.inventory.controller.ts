import { Request, Response } from "express";
import { showEmployee } from "../../utils/db_functions/employee.db";
import { checkemployee, showUsers } from "../../utils/db_functions/user.db";
import { showItem } from "../../utils/db_functions/inventory.db";
import { Stack } from "../../interfaces/inventory.interface";
import { IncomingMessage, UserDataType } from "../../middleware/authJWT";

export const stack = async (req: IncomingMessage, res: Response) => {
  const {
    name,
    quantity,
    singlePrice,
  }: {
    name: string;
    quantity: number;
    singlePrice: number;
  } = req.body;
  const { id } = req.params;
  const { employeeId } = req.userData as UserDataType;

  const verifyItem = await showItem(id);
  if (!verifyItem) {
    return res.status(404).json({
      message: "Item not found ",
    });
  }

  const purchaser = await checkemployee(employeeId);
  if (!purchaser) {
    return res.status(404).json({
      message: "purchaser not found ",
    });
  }
  console.log("purchaser", purchaser)
  const eid = purchaser.employeeId
  const user = await showEmployee(eid);
  if (!user) {
    return res.status(404).json({
      message: "employee not found ",
    });
  }
  if (verifyItem) {
    const stack: Stack = {
      price: quantity * singlePrice,
      value: verifyItem.rate * quantity,
      quantity: quantity,
      userId: employeeId,
      userName: user.fullName as string,
    };
    (verifyItem.value = verifyItem.value + stack.value),
      (verifyItem.quantity = verifyItem.quantity + stack.quantity),
      verifyItem.stack.push(stack);
    await verifyItem.save();

    res.status(201).send(`${name} added successfully`);
  } else {
    res.status(404).send(`${name} EXIST.`);
  }
};
