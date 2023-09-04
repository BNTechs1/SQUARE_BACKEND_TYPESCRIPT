import Tab from "../../../model/tab.model"; // Update this path to your actual model file
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid"; // Import UUID v4 generator
import { IncomingMessage, UserDataType } from "../../../middleware/authJWT";
import { generateNumericUUID } from "../../../utils/help/help.hepl";

// Create a new tab
export const createTab = async (req: IncomingMessage, res: Response) => {
    try {
        const { employeeId } = req.userData as UserDataType;
        const {
            type,
            companyName, 
            companyId, 
            coId, 
        } = req.body;

        const newTabData = {
            tabId: generateNumericUUID(6),
            type,
            status: "OPENED",
            companyName,
            companyId,
            coId,
            cashierId: employeeId,
        };

        const createdTab = await Tab.create(newTabData);
        res.status(201).json({
            message: "tab created successfully",
            success: true,
            tabId:createdTab.tabId
        });
    } catch (error) {
        console.error("Error creating tab:", error);
        res.status(500).json({ error: "An error occurred while creating the tab" });
    }
};

export default createTab;
