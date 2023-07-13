import { Request, Response } from "express";

//Importing the express-async-handler package


//Importing the bcrypt package
import bcrypt from 'bcrypt'

//Importing the user model 
import UserModel from "../../model/user";

import { showEmployee } from "../../utils/db_functions/employee.db";

export const register = async (req: Request, res: Response) => {

    //Destructuing the inputs from req.body 
    const { role, employeeId } = req.body;

    const verifyEmployee = await showEmployee(employeeId)
    console.log("verifyEmployee", verifyEmployee)
    if(!verifyEmployee){
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
            bcrypt.hash(password, 10)
                .then((hash) => {
                    //Registering the user
                    const user = new UserModel({
                        employeeId: verifyEmployee._id,
                        phoneNumber: verifyEmployee.phoneNumber,
                        role: role,
                        password: hash,
                    });
                    verifyEmployee.role = role 
                    verifyEmployee.save()
                    //saving the data to the mongodb user collection
                    user.save()
                        .then((response) => {
                            return res.status(201).json({
                                message: 'user successfully created!',
                                response,
                                success: true
                            })
                        })
                        .catch((error) => {
                            res.status(500).json({
                                error: error,
                            })
                        })
                })

        }
    } catch (error) {
        return res.status(412).send({
            success: false,
            message: "something went wrong"
        })
    }

}