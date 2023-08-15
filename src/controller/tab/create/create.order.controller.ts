import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid"; // Import UUID v4 generator
import { IncomingMessage, UserDataType } from "../../../middleware/authJWT";
import { showTab } from "../../../utils/db_functions/tab.db";
export const createOrder = async (req: IncomingMessage, res: Response) => {
    try {
        const { tabId } = req.params

        const {
            menuName,
            menuPrice,
            quantity,
            totalPrice,
        } = req.body;

        const newOrderData = {
            orderId: uuidv4().slice(0, 6), // Generate a UUID for tabId
            menuName: menuName,
            menuPrice: menuPrice,
            quantity: quantity,
            totalPrice: totalPrice,
        };
        const tab = await showTab(tabId);

        if (!tab) {
            return res.status(404).json({ messgae: "Tab not found", success: false });
        }
        tab.status = "ONGOING"
        tab.orders.push(newOrderData);
        await tab.save();

        res.status(201).json({ message: "order created successfully", success: true });
    } catch (error) {
        res.status(500).json({ message: "An error occurred while creating the order", success: false });
    }
};

export default createOrder;
