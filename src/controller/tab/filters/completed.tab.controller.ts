import Payment from '../../../model/payment.model'
import Tab from '../../../model/tab.model'; // Assuming this is the import path for your tab model
import { Request, Response } from "express";
export const getCompleted =  async (req:Request, res:Response) => {
  try {
    // Find tabs that match the criteria
    const completedTabs = await Tab.find({ status: 'COMPLETED', type: 'DINE_IN' });

    // Extract tabIds from the matching tabs
    const tabIds = completedTabs.map((tab) => tab.tabId);

    // Find payments that have matching tabIds
    const payments = await Payment.find({ tabId: { $in: tabIds } });

    // Combine the matching tabs and payments
    const result = completedTabs.map((tab) => {
      const matchingPayments = payments.filter((payment) => payment.tabId === tab.tabId);

      return {
        ...tab.toObject(),
        payment: matchingPayments.map((payment) => ({
          _id: payment._id,
          tabId: payment.tabId,
          paymentMethodId: payment.paymentMethodId,
          acceptedBy: payment.acceptedBy,
          amount: payment.amount,
          createdAt: payment.createdAt,
        })),
      };
    });

    return res.status(200).json(result);
  } catch (error) {
    console.error('Error retrieving completed dine-in payments:', error);
    throw error;
  }
}

































































// import { Request, Response } from "express";
// import { IncomingMessage, UserDataType } from "../../../middleware/authJWT";
// import { showCompletedandDineIN, getAllTab } from "../../../utils/db_functions/tab.db";
// import { getAllPayment } from "../../../utils/db_functions/payment.db";
// import { Tab } from "../../../interfaces/tab.interfaces";
// import { Payment } from "../../../interfaces/payment.interfaces";
// export interface TabWithPayment extends Tab {
//     payment: Payment[]
// }
// export const CompleteTab = async (req: IncomingMessage, res: Response) => {


//     const { employeeId } = req.userData as UserDataType;

//     const Tab = await showCompletedandDineIN();
//     // let resBody : TabWithPayment[] = []
//     const Payment = await getAllPayment()
//     if (!Tab) {
//         return res.status(404).json({
//             message: "tab not found",
//             success: false
//         })
//     }
//     let resBody = []
//     let payment
//     Tab.map((tab) => {
//         payment = Payment.find(payment => payment.tabId === tab.tabId)
//         let tempTab : TabWithPayment = tab
//         tempTab.payment = payment
//     })















//     // Payment.map(Payment =>
//     //     Tab.filter(tab =>  )

//     //             Payment.find(
//     //         payment => payment.tabId === tab.tabId
//     //     ))


//     // const data = {

//     // }
//     // if (Tab.status === 'ONGOING') {
//     //     await Tab.updateOne({
//     //         $set: {
//     //             status: 'COMPLETED'
//     //         }
//     //     });
//     //     return res.status(200).json({
//     //         message: "tab closed successfully",
//     //         success: true
//     //     })
//     // } else {
//     //     return res.status(201).json({
//     //         message: 'tab can not be closed',
//     //         success: true
//     //     })

//     // }
// }


// // export const completedTab = async (req: Request, res: Response) => {
// //   try {
// //     const pipeline = [
// //       {
// //         $match: {
// //           status: "COMPLETED",
// //           type: "DINE_IN",
// //         },
// //       },
// //       {
// //         $lookup: {
// //           from: Payment, // Replace with the actual name of your payment collection
// //           localField: "tabId",
// //           foreignField: "tabId",
// //           as: "payments",
// //         },
// //       },
// //       {
// //         $unwind: "$payments",
// //       },
// //       {
// //         $replaceRoot: { newRoot: "$payments" },
// //       },
// //     ];

// //     const result = await Tab.aggregate(pipeline);
// //     return result;
// //   } catch (error) {
// //     console.error("Error retrieving payments for completed dine-in tabs:", error);
// //     throw error;
// //   }
// // }

// // Example usage:
// // getPaymentsForCompletedDineInTabs().then((payments) => {
// //   console.log(payments);
// // }).catch((error) => {
// //   console.error(error);
// // });

// // module.exports = getPaymentsForCompletedDineInTabs;