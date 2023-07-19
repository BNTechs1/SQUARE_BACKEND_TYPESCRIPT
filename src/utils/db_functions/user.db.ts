import UserModel from "../../model/user.model";

export async function getAllUsers() {
    return await UserModel.find()
}

export async function showUsers(id: string) {
    return await UserModel.findOne({_id: id})
}

export async function checkemployee(id: string) {
    return await UserModel.findOne({employeeId: id})
}