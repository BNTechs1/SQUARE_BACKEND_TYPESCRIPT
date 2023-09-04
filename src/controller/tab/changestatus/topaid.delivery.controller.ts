import { Request, Response } from "express";
import { IncomingMessage, UserDataType } from "../../../middleware/authJWT";
import { fetchDataByDateAndCompany, showTab } from "../../../utils/db_functions/tab.db";
import paymentModel from "../../../model/payment.model";
import companyModel from "../../../model/company.model";
// import { getTotalPrice } from "../../../utils/db_functions/payment.db";
export const toPaid = async (req: IncomingMessage, res: Response) => {
    const { employeeId } = req.userData as UserDataType;
    const { fromDate, toDate, companyName } = req.body

    const tab = await fetchDataByDateAndCompany(fromDate, toDate, companyName)
    console.log("tab", tab)
    const company = await companyModel.findOne({ name: companyName })
    console.log("company", company)

    if (!tab) {
        return res.status(404).json({
            message: "tab not found",
            success: false
        })
    }

    if (!company) {
        return res.status(404).json({
            message: "company not found",
            success: false
        })
    }

    tab.map(async (t) => {

        const tId = t.tabId;
        let totalSum = 0;
        let totalPaid = 0
        const orders = t.orders
        // Iterate through each order and add their totalPrice to the totalSum
        for (const order of orders) {
            totalSum += order.totalPrice as number;
            totalPaid = totalSum - totalSum * (parseInt(company.commission as string) / 100)
        }
        t.status = "PAID"
        console.log("totalPaid", totalPaid)
        await new paymentModel({
            paymentMethod: company?.paymentMethod,
            tabId: tId,
            amount: totalPaid,
            acceptedBy: employeeId
        }).save();
        t.save()
    })

    return res.status(200).json({
        message: "paid successfully",
        success: true
    })
}

