import { Request, Response } from "express";
import { IncomingMessage, UserDataType } from "../../../middleware/authJWT";
import { showTab } from "../../../utils/db_functions/tab.db";
export const CompleteTab = async (req: IncomingMessage, res: Response) => {
    const { tabId } = req.params
    const { employeeId } = req.userData as UserDataType;

    const Tab = await showTab(tabId);

    if (!Tab) {
        return res.status(404).json({
            message: "tab not found",
            success: false
        })
    }
    if (Tab.status === 'PENDING' && Tab.type === 'DELIVERY') {
        await Tab.updateOne({
            $set: {
                status: 'PAID'
            }
        });
        return res.status(200).json({
            message: "payment recived successfully",
            success: true
        })
    } else {
        return res.status(201).json({
            message: 'tab can not be paid',
            success: true
        })

    }
}

