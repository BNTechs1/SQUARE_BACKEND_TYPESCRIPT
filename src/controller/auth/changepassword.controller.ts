import bcrypt from "bcrypt";
import { Response} from "express";
import { checkemployee } from "../../utils/db_functions/user.db";
import { IncomingMessage, UserDataType } from "../../middleware/authJWT";


export const changePassword = async (req: IncomingMessage, res: Response) => {

    //Destructing the inputs from req.body
    const { password } = req.body
    const { employeeId } = req.userData as UserDataType;
    try {
        if (req.method === 'POST') {

            const verifyUser = await checkemployee(employeeId)
            if (!verifyUser) {
                return res.status(401).json({
                    message: "user not found",
                })
            } else {
                bcrypt.hash(password, 10)
                    .then((hash) => {
                        verifyUser.password = hash
                        verifyUser.firstTimeLogin = false
                        verifyUser.save();
                        return res.status(201).json({
                            message: 'pasword changed successfully',
                            success: true
                        })
                    })                       
                    .catch((error) => {
                        return res.status(500).json({
                            error: error,
                        })
                    })
            }}
    }
    catch (error) {
        return res.status(412).json({
            success: false,
            message: error
        })
    }
}

