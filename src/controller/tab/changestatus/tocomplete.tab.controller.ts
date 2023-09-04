import { Request, Response } from "express";
import { IncomingMessage, UserDataType } from "../../../middleware/authJWT";
import { showTab } from "../../../utils/db_functions/tab.db";
import paymentModel from "../../../model/payment.model";
import { getTotalPrice } from "../../../utils/db_functions/payment.db";
export const tocomplete = async (req: IncomingMessage, res: Response) => {
    const { tabId } = req.params
    const { employeeId } = req.userData as UserDataType;
    const { paymentMethod } = req.body
    const tab = await showTab(tabId);

    if (!tab) {
        return res.status(404).json({
            message: "tab not found",
            success: false
        })
    }
    if (tab.status === 'ONGOING') {

        let totalSum = 0;
        const orders = tab.orders
        // Iterate through each order and add their totalPrice to the totalSum
        for (const order of orders) {
            totalSum += order.totalPrice as number;
        }
        await tab.updateOne({
            $set: {
                status: 'COMPLETED',
                cashierId: employeeId
            }
        });

        await new paymentModel({
            paymentMethod: paymentMethod,
            tabId: tabId,
            amount: totalSum
        }).save();

        return res.status(200).json({
            message: "tab closed successfully",
            success: true
        })
    } else {

        return res.status(201).json({
            message: 'tab can not be closed',
            success: true
        })

    }
}

