import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid"; // Import UUID v4 generator
import { IncomingMessage, UserDataType } from "../../../middleware/authJWT";
import { decrementRecipe, showTab } from "../../../utils/db_functions/tab.db";
import { order } from "../../../interfaces/tab.interfaces"
export const createOrder = async (req: IncomingMessage, res: Response) => {
    try {
        const { tabId } = req.params
        const {
            menuName,
            menuPrice,
            menuId
        } = req.body;

        const newOrderData = {
            orderId: uuidv4().slice(0, 6), // Generate a UUID for tabId
            menuName: menuName,
            menuPrice: menuPrice,
            quantity: 1,
            totalPrice: menuPrice,
            menuId: menuId
        };
        const tab = await showTab(tabId);

        if (!tab) {
            return res.status(404).json({ messgae: "Tab not found", success: false });
        }

        if ( tab.status === "OPENED")  tab.status = "ONGOING"
        // if (tab.orders.length === 0) {
        //     tab.status = "ONGOING"
        //     tab.orders.push(newOrderData);
        //     decrementRecipe(menuId)
        //     await tab.save();

        //     res.status(201).json({ message: "order created successfully", success: true });
        // } else {
            const orderarray = tab.orders;
            const orderExist = orderarray.filter((i) => i.menuId === menuId)
            if (orderExist.length !== 0) {
                const index = orderarray.indexOf(orderExist[0]);
                const orderObject = orderarray[index] as order;
                orderObject.quantity += 1;
                console.log("menuprice", menuPrice)
                console.log("orderObject", orderObject)

                orderObject.totalPrice += menuPrice
                decrementRecipe(menuId)

                await tab.save();
                res.status(201).json({ message: "order created successfully", success: true });
            } else {
                tab.orders.push(newOrderData);
                decrementRecipe(menuId)
                await tab.save();
                res.status(201).json({ message: "order created successfully", success: true });
            }
        // }

    } catch (error) {
        res.status(500).json({ message: "An error occurred while creating the order", error, success: false });
    }
};

export default createOrder;
