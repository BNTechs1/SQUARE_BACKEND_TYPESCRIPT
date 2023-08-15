import Tab from "../../../model/tab.model"; // Update this path to your actual model file
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid"; // Import UUID v4 generator
import { IncomingMessage, UserDataType } from "../../../middleware/authJWT";
import { showTab } from "../../../utils/db_functions/tab.db";
import TabModel from "../../../model/tab.model";
import tablogModel from "../../../model/tablog.model";


export const deleteTab = async (req: IncomingMessage, res: Response) => {
    const { tabId } = req.params
    const { reason } = req.body
    const { employeeId } = req.userData as UserDataType;

    const Tab = await showTab(tabId);

    if (!Tab) {
        return res.status(404).json({
            message: "tab not found",
            success: false
        })
    }
    if (Tab.status === 'OPENED') {
        await TabModel.deleteOne({ tabId: tabId });
        return res.status(200).json({
            message: "deleted successfully",
            success: true
        })
    } else if (Tab.status === 'ONGOING') {
        await tablogModel.create({
            tabId,
            type: 'DELETED',
            deletedBy: employeeId,
            reason
        });
        await TabModel.updateOne({ tabId: tabId }, {
            $set: {
                status: 'DELETED'
            }
        });
        return res.status(201).json({
            message: 'tab deleted successfully',
            success: true
        })
    }
    else if (Tab.status === 'COMPLETED') {
        return res.status(201).json({
            message: 'can not be deleted',
            success: false
        })
    }

}

