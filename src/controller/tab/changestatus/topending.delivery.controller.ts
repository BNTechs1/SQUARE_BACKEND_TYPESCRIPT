import { Request, Response } from "express";
import { IncomingMessage, UserDataType } from "../../../middleware/authJWT";
import { showTab } from "../../../utils/db_functions/tab.db";
export const toPending = async (req: IncomingMessage, res: Response) => {
    const { tabId } = req.params
    const { employeeId } = req.userData as UserDataType;

    const Tab = await showTab(tabId);

    if (!Tab) {
        return res.status(404).json({
            message: "tab not found",
            success: false
        })
    }
    if (Tab.status === 'ONGOING' && Tab.type === 'DELIVERY') {
        await Tab.updateOne({
            $set: {
                status: 'COMPLETED', 
                cashierId: employeeId

            }
        });
        return res.status(200).json({
            message: "delivery taken",
            success: true
        })
    } else {
        return res.status(201).json({
            message: 'tab can not be taken',
            success: true
        })

    }
}

