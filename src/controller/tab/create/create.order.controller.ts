import { Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { IncomingMessage } from "../../../middleware/authJWT";
import { decrementRecipe, showTab } from "../../../utils/db_functions/tab.db";
import { order } from "../../../interfaces/tab.interfaces";
import InventoryModel from "../../../model/inventory.model";
import MenuModel from "../../../model/menu.model"
export const createOrder = async (req: IncomingMessage, res: Response) => {
    try {
        const { tabId } = req.params;
        const {
            menuName,
            menuPrice,
            menuId
        } = req.body;

        const newOrderData = {
            orderId: uuidv4().slice(0, 6),
            menuName: menuName,
            menuPrice: menuPrice,
            quantity: 1,
            totalPrice: menuPrice,
            menuId: menuId
        };

        const tab = await showTab(tabId);

        if (!tab) {
            return res.status(404).json({ message: "Tab not found", success: false });
        }

        if (tab.status === "OPENED") tab.status = "ONGOING";

        // Retrieve the menu's recipe from the database
        const menuDocument = await MenuModel.findOne({ name: menuName });
        const menuIngredients = menuDocument?.recipe;

        // Check if there is enough inventory for each ingredient in the recipe
        if (!Array.isArray(menuIngredients) || menuIngredients.length === 0) {
            return res.status(400).json({ message: `Menu ${menuName} does not have a valid recipe`, success: false });
        }

        for (const ingredient of menuIngredients) {
            const { name, value } = ingredient;
            const inventoryItem = await InventoryModel.findOne({ name: name });

            if (!inventoryItem || inventoryItem.dailyvalue < value) {
                return res.status(400).json({ message: `Insufficient ${name} in inventory for this order`, success: false });
            }
        }

        // Proceed with creating the order
        const orderArray = tab.orders;
        const existingOrder = orderArray.find((order: order) => order.menuId === menuId);

        if (existingOrder) {
            existingOrder.quantity++;
            existingOrder.totalPrice += menuPrice;
        } else {
            tab.orders.push(newOrderData);
        }

        decrementRecipe(menuId);
        await tab.save();

        return res.status(201).json({ message: "Order created successfully", success: true });
    } catch (error) {
        console.error('Error creating order:', error);
        return res.status(500).json({ message: "An error occurred while creating the order", error, success: false });
    }
};

export default createOrder;
