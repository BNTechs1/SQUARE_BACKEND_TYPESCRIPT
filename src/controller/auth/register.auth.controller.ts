import { Request, Response } from "express";

import bcrypt from 'bcrypt'

//Importing the user model 
import UserModel from "../../model/user.model";

import { showEmployee } from "../../utils/db_functions/employee.db";
// import asyncHandler from "express-async-handler"
export const registerUser = async (req: Request, res: Response) => {

    //Destructuing the inputs from req.body 
    const { role, employeeId } = req.body;

    const verifyEmployee = await showEmployee(employeeId)
    if (!verifyEmployee) {
        return res.status(404).json({
            message: "employee not found",
            success: false
        })
    }

    //Verifying the email address inputed is not used already 
    const verifyUser = await UserModel.findOne({ phoneNumber: verifyEmployee.phoneNumber })

    try {
        if (verifyUser) {
            return res.status(403).json({
                message: "phone number already registered"
            })
        } else {
            const password = "060708"
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)
            const response = new UserModel({
                employeeId: verifyEmployee._id,
                phoneNumber: verifyEmployee.phoneNumber,
                role: role,
                password: hashPassword,
            })
            verifyEmployee.role = role
            verifyEmployee.save()
            return res.status(201).json({
                message: 'user successfully created!',
                response,
                success: true
            })
        }
    } catch (error) {
        return res.status(412).send({
            success: false,
            message: "something went wrong"
        })
    }

}