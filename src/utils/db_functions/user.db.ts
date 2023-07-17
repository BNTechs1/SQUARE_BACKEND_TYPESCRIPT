import UserModel from "../../model/user";

export async function getAllUsers() {
    return await UserModel.find()
}

export async function showUsers(id: string) {
    return await UserModel.findOne({_id: id})
}